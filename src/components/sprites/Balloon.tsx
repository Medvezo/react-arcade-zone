"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import BalloonContext from "../providers/BalloonProvider";

type TBalloon = {
	audio: HTMLAudioElement | null;
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

export default function Balloon({ color, audio }: TBalloon) {
	const { dispatch } = useContext(BalloonContext);
	const [x, setX] = useState<number>();
	const [y, setY] = useState<number>();

	const [isPopped, setIsPopped] = useState(false);

	// Handle popping on balloon
	const pop = () => {
		dispatch({ type: "increment_score", payload: scores[color] });

		audio?.play();
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
