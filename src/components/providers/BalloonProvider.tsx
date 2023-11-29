"use client";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./balloon-store";

type TBalloonContext = {
	state: typeof initialState;
	dispatch: React.Dispatch<any>;
};

const BalloonContext = createContext<TBalloonContext>({
	state: initialState,
	dispatch: () => null,
});

export function BalloonProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<BalloonContext.Provider value={{ state, dispatch }}>
			{children}
		</BalloonContext.Provider>
	);
}

export default BalloonContext;
