export const balloonVariants = {
	initial: {
		x: 0,
		y: 0,
	},
	animate: (score: number) => ({
		x: "100vhw",
		y: "100vh",
		transition: {
			duration: score * 2,
			ease: "linear",
		},
	}),
};
