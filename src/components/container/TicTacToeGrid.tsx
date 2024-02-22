"use client";
import TTTCell from "@/components/sprites/TTTCell";
import { useEffect, useState } from "react";

type TTicTacToeGrid = {
	gridSize: number;
};

export default function TicTacToeGrid({ gridSize }: TTicTacToeGrid) {
	// Creating grid with initial empty spaces
	const [grid, setGrid] = useState(
		new Array(gridSize).fill(new Array(gridSize).fill(0))
	);

	useEffect(() => {
		console.log("Grid:", grid);
	}, [grid]);
	const [nextMove, setNextMove] = useState<1 | -1>(1);

	const handleMoveClick = (rowIdx: number, colIdx: number) => {
		// spread original grid to make mutation on the copied one
		const copiedGrid = [...grid];

		if (grid[rowIdx][colIdx] !== nextMove && grid[rowIdx][colIdx] === 0) {
			copiedGrid[rowIdx][colIdx] = nextMove;
			setGrid(copiedGrid);
		}
	};

	return (
		<>
			<div className="text-3xl">Tic Tac Toe</div>

			<div
				className={`grid grid-cols-${gridSize} w-[400px] sm:w-[500px] bg-teal-700 bg-opacity-30 p-5 rounded-3xl`}
			>
				{grid.map((row: Array<number>, rowIdx: number) => (
					<div key={rowIdx} className=" ">
						{row.map((cell: number, colIdx: number) => (
							<div
								key={`${rowIdx} ${colIdx}`}
								onClick={() => handleMoveClick(rowIdx, colIdx)}
								className={` aspect-square border-opacity-50  border  border-white cursor-pointer hover:bg-gray-700 hover:bg-opacity-30`}
							>
								<TTTCell value={grid[rowIdx][colIdx]} />
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
}
