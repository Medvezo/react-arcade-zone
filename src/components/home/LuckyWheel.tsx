"use client";

import { useState, useRef, useEffect } from "react";
import { games } from "@/lib/const";
import { pixelFont } from "@/lib/fonts";
import { Button } from "@nextui-org/button";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LuckyWheel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [angle, setAngle] = useState(0);
  const [top, setTop] = useState<number | null>(null);
  const [offset, setOffset] = useState<number | null>(null);
  const [animationId, setAnimationId] = useState<number | null>(null);
  const router = useRouter();

  // Wheel parameters
  const radius = 75; // Wheel radius in pixels
  const gamesList = games.map(game => game.title);

  // Colors for wheel segments
  const colors = [
    "#5518C2", // Purple
    "#15DACC", // Teal
    "#FFB300", // Amber
    "#D81B60", // Pink
  ];

  // Initialize the wheel on component mount
  useEffect(() => {
    renderWheel();
    
    // Clean up animation on unmount
    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Re-render the wheel when rotation changes
  useEffect(() => {
    if (canvasRef.current) {
      renderWheel();
    }
  }, [rotate]);

  // Calculate the top position based on number of segments
  const topPosition = (num: number, arc: number) => {
    let topSpot: number | null = null;
    let degreesOff: number | null = null;
    
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - arc * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - arc;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    setTop(topSpot ? topSpot - 1 : 0);
    setOffset(degreesOff);
  };

  // Get color for wheel segment
  const getColor = (index: number) => {
    return colors[index % colors.length];
  };

  // Render a wheel sector
  const renderSector = (
    ctx: CanvasRenderingContext2D,
    index: number, 
    text: string, 
    start: number, 
    arc: number, 
    color: string
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const startAngle = start;
    const endAngle = start + arc;
    const angle = index * arc;
    const baseSize = radius * 3.33;
    const textRadius = baseSize - 150;

    // Draw sector
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;
    ctx.stroke();

    // Draw text
    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillStyle = "white";
    ctx.font = `17px ${pixelFont.className}`;
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  };

  // Render the entire wheel
  const renderWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set wheel properties
    const numOptions = gamesList.length;
    const arcSize = (2 * Math.PI) / numOptions;
    setAngle(arcSize);
    
    // Calculate top position
    topPosition(numOptions, arcSize);
    
    // Draw sectors
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      const text = gamesList[i];
      renderSector(ctx, i + 1, text, angle, arcSize, getColor(i));
      angle += arcSize;
    }
    
    // Draw border around the inner wheel
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius * 2 + 5, 0, 2 * Math.PI);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "white";
    ctx.stroke();
  };

  // Advanced easing function for acceleration and deceleration
  const easeInOutCubic = (t: number) => {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  
  // Spin the wheel with improved animation
  const spinWheel = () => {
    if (isSpinning) return;
    
    // Reset
    setSelectedGame(null);
    setIsSpinning(true);
    
    // Generate random destination angle (between 2 and 4 full rotations)
    const randomSpin = Math.floor(Math.random() * 900) + 1440; // Minimum 4 rotations
    
    // Animate with requestAnimationFrame for smoother control
    const startTime = performance.now();
    const duration = 5000; // 5 seconds
    const startAngle = rotate;
    const angleChange = randomSpin;
    
    // Cancel any existing animation
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
    
    // Animation function
    const animateWheel = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      // Calculate current rotation angle
      const currentRotate = startAngle + easedProgress * angleChange;
      setRotate(currentRotate);
      
      // Continue animation if not complete
      if (progress < 1) {
        const id = requestAnimationFrame(animateWheel);
        setAnimationId(id);
      } else {
        // Animation complete
        setAnimationId(null);
        getResult(randomSpin);
      }
    };
    
    // Start animation
    const id = requestAnimationFrame(animateWheel);
    setAnimationId(id);
  };

  // Calculate the result based on final wheel position
  const getResult = (spin: number) => {
    if (top === null || offset === null) return;
    
    // Find net rotation and add to offset angle
    const netRotation = ((spin % 360) * Math.PI) / 180; // Convert to radians
    let travel = netRotation + offset;
    let count = top + 1;
    
    // Calculate the game index
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = gamesList.length + count;
    }
    
    setSelectedGame(result);
    setIsSpinning(false);
  };

  // Reset the wheel
  const resetWheel = () => {
    // Cancel any running animation
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }
    
    setRotate(0);
    setSelectedGame(null);
    setIsSpinning(false);
  };

  // Navigate to the selected game
  const playSelectedGame = () => {
    if (selectedGame !== null) {
      router.push(games[selectedGame].href);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-16 pb-16 z-10">
      <h2 className={`text-center text-3xl ${pixelFont.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500`}>
        Can't decide? Spin the wheel!
      </h2>
      
      <div className="relative text-center my-8 mx-auto">
        {/* Wheel pointer/selector */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-20 text-4xl text-white z-10">
          &#9660;
        </div>
        
        {/* Canvas-based wheel without outer border */}
        <div className="relative rounded-full overflow-hidden inline-block">
          <canvas
            ref={canvasRef}
            id="wheel"
            width="500"
            height="500"
            className="wheel-canvas"
            style={{ 
              transform: `rotate(${rotate}deg)`,
            }}
          />
        </div>
        
        {/* Game result */}
        {selectedGame !== null && (
          <div className={`mt-6 text-xl ${pixelFont.className}`}>
            You got: <span className="text-green-500 text-2xl">{games[selectedGame].title}</span>!
          </div>
        )}
        
        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {isSpinning ? (
            <Button
              variant="bordered"
              color="danger"
              onClick={resetWheel}
              className={`text-white text-xl ${pixelFont.className} border-2`}
              size="lg"
            >
              Reset
            </Button>
          ) : (
            <>
              <Button
                variant="bordered"
                color="success"
                onClick={spinWheel}
                className={`text-white text-xl ${pixelFont.className} border-2`}
                size="lg"
              >
                Spin the Wheel
              </Button>
              
              {selectedGame !== null && (
                <Button
                  variant="bordered"
                  color="primary"
                  onClick={playSelectedGame}
                  className={`text-white text-xl ${pixelFont.className} border-2`}
                  size="lg"
                  startContent={<FaPlay className="h-5 w-5" />}
                >
                  Play Now
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 