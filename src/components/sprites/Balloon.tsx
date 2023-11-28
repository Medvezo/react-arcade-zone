"use client";
import Image from "next/image";
import { useState } from "react";

type TBalloon = {
	color: "blue" | "green" | "pink" | "yellow" | "red";
};

const scores = {
	blue: 1,
	green: 2,
	pink: 3,
	yellow: 4,
	red: 5,
};

// Audio of popping balloons
const audio = new Audio("/balloons-pop/pop-sound.mp3");

export default function Balloon({ color }: TBalloon) {
	const [x, setX] = useState<number>();
	const [y, setY] = useState<number>();

	const [isPopped, setIsPopped] = useState(false);

	// Handle popping on balloon
	const pop = () => {
		audio.play();
		setIsPopped(true);
	};

	if (isPopped) {
		return null; // Don't render anything if the balloon is popped
	}

	return (
		<Image
			onClick={pop}
			src={`/balloons-pop/${color}-Baloon.webp`}
			alt={`${color} balloon`}
			width={50}
			height={100}
			className="z-10"
		/>
	);
}
