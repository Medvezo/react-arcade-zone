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
		<section className="w-full h-full pt-20 z-10 overflow-hidden flex justify-center items-center flex-col">
			<h3 className={`${pixelFont} text-3xl `}>Game Over!</h3>
			<p>{state.currentScore}</p>
			<Button variant="solid" color="secondary" onClick={restartGame} className="text-white">Restart Game</Button>
		</section>
	);
}
