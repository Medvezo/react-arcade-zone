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
	{
		title: "Pair Match",
		href: "/pair-match",
		screenshot: "/ss/Pair-Match-SS.webp",
	},
	{
		title: "Tic-Tac-Toe",
		href: "/tic-tac-toe",
		screenshot: "/ss/tic-tac-toe-SS.webp	",
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

export const confettiConfig: any = {
	angle: "90",
	spread: 360,
	startVelocity: 40,
	elementCount: 70,
	dragFriction: 0.12,
	duration: "2000",
	stagger: 3,
	width: "10px",
	height: "10px",
	perspective: "500px",
	colors: ["#f00", "#0f0", "#00f"],
};
