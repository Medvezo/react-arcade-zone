"use client";
import { useEffect } from "react";
import TTTCell from "../sprites/TTTCell";

type TTicTacToeGrid = {
	gridSize: number;
};

export default function TicTacToeGrid({ gridSize }: TTicTacToeGrid) {
	const grid = new Array(gridSize).fill(new Array(gridSize).fill(-1));
	useEffect(() => {
		console.log(grid);
	}, [grid]);

	return (
		<>
			<div className="text-3xl">Tic Tac Toe</div>

			<div
				className={` grid grid-cols-${gridSize} w-[400px] sm:w-[500px] divide-x-2 divide-white bg-teal-700 bg-opacity-30 p-5 rounded-3xl`}
			>
				{grid.map((row, rowIdx) => (
					<div key={rowIdx} className="divide-y-2 divide-white ">
						{row.map((cell: number, colIdx: number) => (
							<div key={`${rowIdx} ${colIdx}`} className={`aspect-square `}>
								<TTTCell value={cell} />
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
}
