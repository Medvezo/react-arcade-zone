"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import BalloonContext from "../providers/BalloonProvider";
import { motion } from "framer-motion";
import { balloonVariants } from "@/utils/motion";
import { scores } from "@/lib/const";
import useRandomPosition from "@/hooks/useRandomPosition";

type TBalloon = {
	color: keyof typeof scores;
	onExit: () => void
};

export default function Balloon({ color, onExit }: TBalloon) {
	const { dispatch } = useContext(BalloonContext); // to increment score on pop

	const [isPopped, setIsPopped] = useState(false); // to unmount component

	const [ranX, ranY] = useRandomPosition(); // getting random x,y from custom hook

	// Handle popping on balloon
	const pop = () => {
		dispatch({ type: "increment_score", payload: scores[color] });
		const audio = new Audio("/balloons-pop/pop-sound.mp3");

		audio.play();
		setIsPopped(true);
	};

	if (isPopped) {
		return null; // Don't render anything if the balloon is popped
	}

	return (
		<motion.div
			onClick={pop}
			initial="initial"
			animate="animate"
			onAnimationComplete={onExit}
			custom={[ranX, ranY, scores[color]]}
			variants={balloonVariants}
			className="absolute z-10">
			<Image
				src={`/balloons-pop/${color}-Baloon.webp`}
				alt={`${color} balloon`}
				width={50}
				height={100}
				className="z-10"
			/>
		</motion.div>
	);
}
