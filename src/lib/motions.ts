export const balloonVariants = {
	initial: {
		x: 0,
		y: 0,
	},
	animate: (score: number) => ({
		x: "100vhw",
		y: "100vh",
		transition: {
			duration: 20 / score,
			ease: "linear",
		},
	}),
};
