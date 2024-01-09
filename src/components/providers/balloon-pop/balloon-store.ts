import { Taction } from "@/lib/types";

const initialState = {
	highScore: 0,
	currentScore: 0,
};

function reducer(state: any, action: Taction) {
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
		case "reset_score":
			return {
				...state,
				currentScore: 0,
			};
		default:
			return state;
	}
}

export { initialState, reducer };
