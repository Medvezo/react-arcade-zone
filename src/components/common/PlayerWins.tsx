import { Button } from "@nextui-org/button";
import { VscDebugRestart } from "react-icons/vsc";
import { pixelFont } from "@/lib/fonts";
import TTTCell from "../sprites/TTTCell";

type PlayerWins = {
	winner: number;
	onRestart: () => void;
};

export default function PlayerWins({ winner, onRestart }: PlayerWins) {

	return (
		<section className="w-full h-screen pt-20 z-10 overflow-hidden flex justify-center items-center flex-col gap-16">
			<p className={`text-2xl text-green-500 z-10 flex max-h-16 justify-center items-center  ${pixelFont}`}>
				Winner: <TTTCell value={winner} />
			</p>
			<Button
				variant="ghost"
				color="secondary"
				onClick={onRestart}
				className="text-white text-xl"
				size="lg"
				radius="full"
				startContent={<VscDebugRestart className="h-8 w-8" />}>
				Restart
			</Button>
		</section>
	);
}
