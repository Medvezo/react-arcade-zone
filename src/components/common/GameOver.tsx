import { pixelFont } from "@/lib/fonts";
import BalloonContext from "../providers/BalloonProvider";
import {
	useContext,
	Dispatch,
	SetStateAction,
	ReactElement,
	JSXElementConstructor,
} from "react";
import { Button } from "@nextui-org/button";
import { VscDebugRestart } from "react-icons/vsc";

type TGameOver = {
	setGameOver: Dispatch<SetStateAction<boolean>>;
	setActiveBalloons: Dispatch<
		SetStateAction<ReactElement<any, string | JSXElementConstructor<any>>[]>
	>;
};

export default function GameOver({
	setGameOver,
	setActiveBalloons,
}: TGameOver) {
	const { state, dispatch } = useContext(BalloonContext);

	// Onclick handle to restart game
	const restartGame = () => {
		setGameOver(false);
		setActiveBalloons([]);
		dispatch({ type: "reset_score" });
	};

	return (
		<section className="w-full h-screen pt-20 z-10 overflow-hidden flex justify-center items-center flex-col gap-16">
			<h3 className={`${pixelFont} text-4xl lg:text-6xl text-red-500 z-10`}>
				Game Over!
			</h3>
			<p className="text-2xl text-green-800 z-10">Your score: {state.currentScore}</p>
			<Button
				variant="ghost"
				color="secondary"
				onClick={restartGame}
				className="text-white text-xl"
				size="lg"
				radius="full"
				startContent={<VscDebugRestart className="h-8 w-8" />}>
				Restart
			</Button>
		</section>
	);
}
