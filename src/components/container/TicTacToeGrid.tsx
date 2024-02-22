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
	}, [gridSize, grid]);

	return (
		<>
			<div className="text-3xl">Tic Tac Toe</div>
			
			<div
				className={`grid grid-cols-${grid.length} w-[400px] sm:w-[500px] bg-teal-700 bg-opacity-30 p-5 rounded-3xl`}
			>
				{grid.map((row, rowIdx) => (
					<div key={rowIdx} className=" ">
						{row.map((cell: number, colIdx: number) => (
							<div key={`${rowIdx} ${colIdx}`} className={` aspect-square border-opacity-50  border  border-white`}>
								<TTTCell value={cell} />
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
}
