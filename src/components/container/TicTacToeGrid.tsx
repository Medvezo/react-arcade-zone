"use client";
import { useEffect } from "react";
import TTTCell from "../sprites/TTTCell";

type TTicTacToeGrid = {
	gridSize: number;
};

export default function TicTacToeGrid({ gridSize }: TTicTacToeGrid) {
	const grid = new Array(gridSize).fill(new Array(gridSize).fill(0));
	useEffect(() => {
		console.log(grid);
	}, [grid]);

	return (
		<>
			<div className="">Tic Tac Toe</div>

			<div className={` grid grid-cols-${gridSize} divide-x-2 divide-white `}>
				{grid.map((row, rowIdx) => (
					<div key={rowIdx} className="divide-y-2  divide-white">
						{row.map((cell: number, colIdx: number) => (
							<TTTCell key={`${rowIdx} ${colIdx}`} />
						))}
					</div>
				))}
			</div>
		</>
	);
}
