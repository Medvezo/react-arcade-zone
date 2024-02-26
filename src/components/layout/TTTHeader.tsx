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
import { FaCircleInfo } from "react-icons/fa6";
import { Tooltip } from "@nextui-org/tooltip";

type TTTHeader = {
	onRestart: () => void;
};

export default function TTTHeader({ onRestart }: TTTHeader) {
	const { state, dispatch } = useContext(TTTContext);

	return (
		<header className="flex flex-col justify-center items-center gap-5 lg:gap-12 px-3 ">
			<h2
				className={` z-40 pt-32 text-4xl lg:text-5xl font-bold text-center ${pixelFont.className}`}
			>
				Tic Tac Toe
			</h2>

			{state.isGameOver ? ( // whether is first game or not
				state.winner === 0 ? ( //if tie
					<p
						className={`text-3xl lg:text-4xl font-bold text-amber-500 flex max-h-16 justify-center items-center  ${pixelFont}`}
					>
						Tie !
					</p>
				) : (
					state.winner && ( // to check if not null
						// if not tie
						<p
							className={`text-3xl lg:text-4xl font-bold text-lime-500 flex max-h-16 justify-center items-center gap-5 lg:gap-10 ${pixelFont}`}
						>
							Winner:{" "}
							<span className="w-16 h-16 lg:h-24 lg:w-24">
								<TTTCell value={state.winner} />
							</span>
						</p>
					)
				)
			) : (
				// showing next move
				<p className="text-3xl lg:text-4xl font-bold text-cyan-50 z-40 flex justify-center items-center gap-3">
					Next move:{" "}
					<span className="w-10 h-10 ">
						{state.nextMove === 1 ? <XSVG /> : <OSVG />}
					</span>
				</p>
			)}

			{state.isGameOver && ( // Grid size selection
				<Slider
					size="md"
					showTooltip
					step={1}
					color="primary"
					label="Grid Size"
					showSteps={true}
					onChangeEnd={(
						size // changing grid size instantly
					) => dispatch({ type: "SET_GRID_SIZE", payload: size })}
					maxValue={10}
					minValue={3}
					defaultValue={3}
					getValue={(size) => `${size}x${size}`}
					className="max-w-md"
					// Add custom tooltip label
					renderLabel={({ children, ...props }) => (
						<label {...props} className="text-medium flex gap-2 items-center">
							{children}
							<Tooltip
								color="warning"
								className="w-[200px] px-1.5"
								content={
									<section className="flex flex-col gap-3">
										<h4 className="text-center text-bold text-lg text-blue-700">
											Needed to win:{" "}
										</h4>
										<span>
											<b className=" text-blue-600">4</b> in a row
											between 4x4-6x6
										</span>
										<span>
											<b className=" text-blue-600">5</b> in a row more
											than 7x7
										</span>
									</section>
								}
								placement="right"
							>
								<span className="transition-opacity opacity-80 hover:opacity-100">
									<FaCircleInfo />
								</span>
							</Tooltip>
						</label>
					)}
				/>
			)}

			{state.isGameOver && ( // Play game
				<Button
					variant="ghost"
					color="primary"
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
