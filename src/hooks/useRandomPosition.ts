import { useMemo } from "react";
const useRandomPosition = () => {
	// Generating X position of vw
	const randomX = useMemo(() => Math.floor(Math.random() * 100), []);

	// Generating Y position of vh
	const randomY = useMemo(() => Math.floor(Math.random() * 80), []);

	return [randomX, randomY];
};
