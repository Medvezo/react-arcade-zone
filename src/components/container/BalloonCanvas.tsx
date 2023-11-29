"use client";
import { useContext, useState, useEffect, ReactElement } from "react";
import Balloon from "../sprites/Balloon";
import BalloonContext from "../providers/BalloonProvider";
import { balloons } from "@/lib/const";

export default function BalloonCanvas() {
	const { state } = useContext(BalloonContext);
	const [activeBalloons, setActiveBalloons] = useState<ReactElement[]>([]);
	

	useEffect(() => {
		const interval = setInterval(() => {
			const randomColorIndex = Math.floor(Math.random() * balloons.length);
			setActiveBalloons((prevBalloons) => [
				...prevBalloons,
				<Balloon key={Math.random()} color={balloons[randomColorIndex]} />,
			]);
		}, 2000 / ((state.currentScore + 100)* 0.01));
		console.log(state.currentScore)

		return () => clearInterval(interval);
	});

	return (
		<section className="w-full h-full pt-20 z-10  overflow-hidden">
			<p className="z-10 text-green-500 text-3xl fixed top-24 left-5">
				Score: {state.currentScore}
			</p>
			{activeBalloons}
		</section>
	);
}
