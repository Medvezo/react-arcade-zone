export const games = [
	{
		title: "Hex Guess",
		href: "/hex-guess",
		screenshot: "/ss/Hex-Guess-Screenshot-min.webp",
	},
	{
		title: "Balloons Pop",
		href: "/balloons-pop",
		screenshot: "/balloons-pop/Air-Baloons-Raw.png",
	},
];

//! Baloon Pop Game
export const scores = {
	blue: 1,
	green: 2,
	pink: 3,
	yellow: 4,
	red: 5,
};

export const balloons: (keyof typeof scores)[] = ["blue", "green", "pink", "yellow", "red"];


//! Pair Match Game
