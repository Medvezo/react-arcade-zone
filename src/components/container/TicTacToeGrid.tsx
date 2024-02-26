"use client";

import TTTCell from "@/components/sprites/TTTCell";
import { useState, useContext, useEffect } from "react";
import TTTContext from "../providers/tic-tac-toe/TTTProvider";
import { getWinCondition, checkWin } from "@/utils/helpers";
import TTTHeader from "../layout/TTTHeader";

type TTicTacToeGrid = {
	gridSize: number;
};

export default function TicTacToeGrid() {
	const { state, dispatch } = useContext(TTTContext);
	const gridSize = state.gridSize; // global gridsize

	useEffect(() => {
		console.log(`Grid size updated to: ${gridSize}`);
	}, [gridSize]);

	const createGrid = () =>
		// reusable function
		Array.from({ length: gridSize }, () => new Array(gridSize).fill(0));

	// Creating grid with initial empty spaces
	const [grid, setGrid] = useState(() =>
		// init as () for expensive computation
		createGrid()
	);

	const handleMoveClick = (rowIdx: number, colIdx: number) => {
		// deep copy original grid to make mutation on the copied one which are independent
		const copiedGrid = grid.map((row) => [...row]);

		if (copiedGrid[rowIdx][colIdx] === 0) {
			copiedGrid[rowIdx][colIdx] = state.nextMove; // Make the move
			setGrid(copiedGrid); // Update the grid

			const winCondition = getWinCondition(gridSize); // how many in a row needed from helper

			if (checkWin(copiedGrid, rowIdx, colIdx, state.nextMove, winCondition)) {
				dispatch({ type: "PLAYER_WIN", payload: state.nextMove });
			} else {
				// Checking if Tie
				const isTie = copiedGrid.every((row) => row.every((cell) => cell != 0));
				if (isTie) {
					dispatch({ type: "PLAYER_WIN", payload: 0 });
				} else {
					dispatch({ type: "MAKE_MOVE" }); // No win yet
				}
			}
		}
	};

	// Use the same function to reset the grid in restartGame
	const restartGame = () => {
		setGrid(createGrid());
		dispatch({ type: "RESTART_GAME" });
	};

	// Conditionally end game
	if (state.isGameOver) {
		return <TTTHeader onRestart={restartGame} />;
	}

	return (
		<>
			<TTTHeader onRestart={restartGame} />

			<div
				key={gridSize} // Force re-render when gridSize changes
				style={{
					gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`, // Dynamic columns
				}}
				className={`grid w-[400px] sm:w-[500px] bg-teal-700 bg-opacity-30 p-5 rounded-3xl`}
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
