import { Button } from "@nextui-org/button";
import { VscDebugRestart } from "react-icons/vsc";
import { pixelFont } from "@/lib/fonts";
import { useContext } from "react";
import TTTContext from "../providers/tic-tac-toe/TTTProvider";

type PlayerWins = {
	Player: number;
};

export default function PlayerWins(Player: PlayerWins) {
	const { state, dispatch } = useContext(TTTContext);

	// Onclick handle to restart game
	const restartGame = () => {};

	return (
		<section className="w-full h-screen pt-20 z-10 overflow-hidden flex justify-center items-center flex-col gap-16">
			<p className="text-2xl text-green-800 z-10">Winner: {state.nextMove}</p>
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
