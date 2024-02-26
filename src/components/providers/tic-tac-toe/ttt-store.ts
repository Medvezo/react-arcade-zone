import { Taction } from "@/lib/types";

const initialState = {
	nextMove: 1, // X starts first
	isGameOver: false,
	winner: 0,
};

function reducer(state: any, action: Taction) {
	switch (action.type) {
		case "MAKE_MOVE":
			return {
				...state,
				nextMove: -state.nextMove,
			};
		case "PLAYER_WIN":
			return {
				...state,
				winner: action.payload, 
				isGameOver: true,

			};
		case "RESTART_GAME":
			return {
				...initialState
			}
		default:
			return state;
	}
}

export { initialState, reducer };
