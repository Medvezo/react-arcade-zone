"use client";
import {
	useContext,
	useState,
	useEffect,
	ReactElement,
	useCallback,
} from "react";
import Balloon from "../sprites/Balloon";
import BalloonContext from "../providers/balloon-pop/BalloonProvider";
import { balloons } from "@/lib/const";
import GameOver from "../common/GameOver";

export default function BalloonCanvas() {
	const { state, dispatch } = useContext(BalloonContext);
	const [activeBalloons, setActiveBalloons] = useState<ReactElement[]>([]);
	const [gameOver, setGameOver] = useState<boolean>(false);

	// Func to add balloons
	const addBalloon = useCallback(() => {
		const randomColorIndex = Math.floor(Math.random() * balloons.length);
		setActiveBalloons((prevBalloons) => [
			...prevBalloons,
			<Balloon
				key={Math.random()}
				onExit={() => setGameOver(true)}
				color={balloons[randomColorIndex]}
			/>,
		]);
	}, []);

	useEffect(() => {
		if (!gameOver) {
			const interval = setInterval(
				addBalloon,
				2000 / ((state.currentScore + 25) * 0.04)
			); // coeficient for exponential grow of balloon generation

			return () => clearInterval(interval);
		}
	}, [gameOver, addBalloon, state.currentScore]);

	if (gameOver) {
		return (
			<GameOver
				setGameOver={setGameOver}
				setActiveBalloons={setActiveBalloons}
			/>
		);
	}

	return (
		<section className="w-full h-full pt-20 z-10  overflow-hidden">
			<p className="z-10 text-green-500 text-3xl fixed top-24 left-5">
				Score: {state.currentScore}
			</p>
			{activeBalloons}
		</section>
	);
}
