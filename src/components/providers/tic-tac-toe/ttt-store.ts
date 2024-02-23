import { Taction } from "@/lib/types";

const initialState = {
	nextMove: 1, // X starts first
};

function reducer(state: any, action: Taction) {
	switch (action.type) {
		case "MAKE_MOVE":
			return {
				...state,
				nextMove: -state.nextMove,
			};
		default:
			return state;
	}
}

export { initialState, reducer };
