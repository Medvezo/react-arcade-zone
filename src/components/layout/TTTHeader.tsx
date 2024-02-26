"use client";

import { pixelFont } from "@/lib/fonts";
import TTTContext from "../providers/tic-tac-toe/TTTProvider";
import { useContext } from "react";
import XSVG from "@/../public/tic-tac-toe/X";
import OSVG from "@/../public/tic-tac-toe/O";
import TTTCell from "../sprites/TTTCell";
import { VscDebugRestart } from "react-icons/vsc";
import { Button } from "@nextui-org/button";
import { Slider } from "@nextui-org/slider";

type TTTHeader = {
	onRestart: () => void;
};

export default function TTTHeader({ onRestart }: TTTHeader) {
	const { state, dispatch } = useContext(TTTContext);

	return (
		<header className="flex flex-col justify-center items-center gap-3 lg:gap-10 ">
			<h2
				className={` z-40 pt-32 text-4xl lg:text-5xl font-bold text-center ${pixelFont.className}`}
			>
				Tic Tac Toe
			</h2>

			{state.isGameOver && (
				<Slider
					size="sm"
					step={1}
					color="foreground"
					label="Grid Size"
					showSteps={true}
					maxValue={10}
					minValue={3}
					defaultValue={3}
					className="max-w-md"
				/>
			)}

			{state.isGameOver ? (
				state.winner && (
					<p
						className={`text-2xl text-green-500 flex max-h-16 justify-center items-center  ${pixelFont}`}
					>
						Winner: <TTTCell value={state.winner} />
					</p>
				)
			) : (
				<p className="text-2xl lg:text-3xl font-bold text-cyan-50 z-40 flex justify-center items-center gap-3">
					Next move:{" "}
					<span className="w-10 h-10 ">
						{state.nextMove === 1 ? <XSVG /> : <OSVG />}
					</span>
				</p>
			)}

			{state.isGameOver && (
				<Button
					variant="ghost"
					color="secondary"
					onClick={onRestart}
					className="text-white text-xl"
					size="lg"
					radius="full"
					startContent={<VscDebugRestart className="h-8 w-8" />}
				>
					Play
				</Button>
			)}
		</header>
	);
}
