// Tic-Tac-Toe
const getWinCondition = (gridSize: number) => {
	if (gridSize <= 4) return 3;
	if (gridSize >= 5 && gridSize <= 6) return 4;
	return 5; // Default for gridSize >= 7
};
