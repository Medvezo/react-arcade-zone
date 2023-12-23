//! Match Pair Game
export type TPair = {
	title: string;
	src: string;
};

export type TPairCard = {
	pair: TPair;
	handleClick: (rowIdx: number, colIdx: number) => void;
	rowIdx: number;
	colIdx: number;
	revealedGrid: boolean[][];
};

export type Taction = {
	payload: number;
	type: string;
};
