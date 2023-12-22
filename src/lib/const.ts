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

export const balloons: (keyof typeof scores)[] = [
	"blue",
	"green",
	"pink",
	"yellow",
	"red",
];

//! Pair Match Game
export const pairs = [
	{ title: "Capacitor", src: "/pair-match/capacitor-js.svg" },
	{ title: "Electron", src: "/pair-match/electron.svg" },
	{ title: "Expo Go", src: "/pair-match/expo.svg" },
	{ title: "Jest", src: "/pair-match/jest.svg" },
	{ title: "Next.js", src: "/pair-match/next-js.svg" },
	{ title: "Redux", src: "/pair-match/redux.svg" },
	{ title: "TypeScript", src: "/pair-match/typescript.svg" },
	{ title: "Vite ", src: "/pair-match/vitejs.svg" },
];
