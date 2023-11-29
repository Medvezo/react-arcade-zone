export const slideInFromTop = {
	hidden: { y: -100, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
};

export function slideInFromLeft(delay: number) {
	return {
		hidden: { x: -100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: 0.5,
			},
		},
	};
}

export function slideInFromRight(delay: number) {
	return {
		hidden: { x: 100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: 0.5,
			},
		},
	};
}

export function fadeIn(delay: number) {
	return {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: delay,
				duration: 0.7,
			},
		},
	};
}

export const balloonVariants = {
	initial: ([ranX, ranY]: [number, number]) => ({
		x: `${ranX}vw`,
		y: 0,
		// y: `${ranY}vh`,
	}),
	animate: ([, , score]: [number, number, number]) => ({
		x: "100vhw",
		y: "81vh",
		transition: {
			duration: 20 / score,
			ease: "linear",
		},
	}),
};
