const initialState = {
	highScore: 0,
	currentScore: 0,
};

type Treducer = {
	state: any;
	action: {
		payload: number;
		type: string;
	};
};

function reducer({ state, action }: Treducer) {
	switch (action.type) {
		case "set_high_score":
			return {
				...state,
				highScore: Math.max(state.highScore, action.payload),
			};
		case "increment_score":
			return {
				...state,
				currentScore: state.currentScore + action.payload,
			};
		default:
			return state;
	}
}

export { initialState, reducer };
