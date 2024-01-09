import { Taction } from "@/lib/types";

const initialState = {
	totalMoves: 0,
};

function reducer(state: any, action: Taction) {
	switch (action.type) {
		case "INCREMENT_MOVES":
			return {
				...state,
				totalMoves: state.totalMoves + action.payload,
			};
		case "RESET_MOVES":
			return {
				...state,
				totalMoves: 0,
			};
		default:
			return state;
	}
}

export { initialState, reducer };
