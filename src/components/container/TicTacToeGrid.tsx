"use client";
import TTTCell from "@/components/sprites/TTTCell";
import { useState, useContext } from "react";
import TTTContext from "../providers/tic-tac-toe/TTTProvider";
import { getWinCondition, checkWin } from "@/utils/helpers";

type TTicTacToeGrid = {
	gridSize: number;
};

export default function TicTacToeGrid({ gridSize }: TTicTacToeGrid) {
	const createGrid = () =>
		Array.from({ length: gridSize }, () => new Array(gridSize).fill(0));

	// Creating grid with initial empty spaces
	const [grid, setGrid] = useState(() =>
		// init as () for expensive computation
		createGrid()
	);

	const { state, dispatch } = useContext(TTTContext);

	const handleMoveClick = (rowIdx: number, colIdx: number) => {
		// deep copy original grid to make mutation on the copied one which are independent
		const copiedGrid = grid.map((row) => [...row]);

		if (copiedGrid[rowIdx][colIdx] === 0) {
			copiedGrid[rowIdx][colIdx] = state.nextMove; // Make the move
			setGrid(copiedGrid); // Update the grid

			const winCondition = getWinCondition(gridSize); // how many in a row needed from helper
			if (checkWin(copiedGrid, rowIdx, colIdx, state.nextMove, winCondition)) {
				console.log(`Player ${state.nextMove === 1 ? "X" : "O"} wins!`);
				dispatch({ type: "PLAYER_WIN", player: state.nextMove });
				// TODO: reset the game or take other actions here
			} else {
				dispatch({ type: "MAKE_MOVE" }); // No win yet
			}
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
