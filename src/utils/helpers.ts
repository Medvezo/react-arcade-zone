// Tic-Tac-Toe
export const getWinCondition = (gridSize: number) => {
	if (gridSize <= 4) return 3;
	if (gridSize >= 5 && gridSize <= 6) return 4;
	return 5; // Default for gridSize >= 7
};

export const checkWin = (
	grid: number[][],
	row: number,
	col: number,
	player: number,
	winCondition: number
) => {
	// Direction vectors
	const directions = [
		[0, 1], // Horizontal
		[1, 0], // Vertical
		[1, 1], // Diagonal \
		[1, -1], // Anti-diagonal /
	];

	const inBounds = (x: number, y: number) =>
		x >= 0 && x < grid.length && y >= 0 && y < grid.length;

	for (let [dx, dy] of directions) {
		let count = 1;
		// Check one direction
		for (let i = 1; i < winCondition; i++) {
			const x = row + dx * i;
			const y = col + dy * i;
			if (inBounds(x, y) && grid[x][y] === player) count++;
			else break;
		}
		// Check the opposite direction
		for (let i = 1; i < winCondition; i++) {
			const x = row - dx * i;
			const y = col - dy * i;
			if (inBounds(x, y) && grid[x][y] === player) count++;
			else break;
		}
		if (count >= winCondition) return true;
	}
	return false;
};
