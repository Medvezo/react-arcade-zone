"use client";
import TTTCell from "@/components/sprites/TTTCell";
import { useEffect, useState, useContext } from "react";
import TTTContext from "../providers/tic-tac-toe/TTTProvider";

type TTicTacToeGrid = {
	gridSize: number;
};

export default function TicTacToeGrid({ gridSize }: TTicTacToeGrid) {
	// Creating grid with initial empty spaces
	const [grid, setGrid] = useState(
		Array.from({ length: gridSize }, () => new Array(gridSize).fill(0))
	);

	const { state, dispatch } = useContext(TTTContext);

	useEffect(() => {
		console.log("Grid:", grid);
	}, [grid]);

	const handleMoveClick = (rowIdx: number, colIdx: number) => {
		// spread original grid to make mutation on the copied one
		const copiedGrid = [...grid];

		if (grid[rowIdx][colIdx] !== state.nextMove && grid[rowIdx][colIdx] === 0) {
			copiedGrid[rowIdx][colIdx] = state.nextMove;
			setGrid(copiedGrid);
			dispatch({ type: "MAKE_MOVE" });
		}
	};

	return (
		<>
			<div
				style={{
					gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`, // Dynamic columns
				}}
				className={`grid w-[400px] sm:w-[500px] bg-teal-700 bg-opacity-30 p-5 rounded-3xl`}>
				{grid.map((row: Array<number>, rowIdx: number) => (
					<div key={rowIdx} className=" ">
						{row.map((cell: number, colIdx: number) => (
							<div
								key={`${rowIdx} ${colIdx}`}
								onClick={() => handleMoveClick(rowIdx, colIdx)}
								className={` aspect-square border-opacity-50  border  border-white cursor-pointer hover:bg-gray-700 hover:bg-opacity-30`}>
								<TTTCell value={grid[rowIdx][colIdx]} />
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
}
