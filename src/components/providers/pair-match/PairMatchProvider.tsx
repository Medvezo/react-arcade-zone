"use client";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./pair-store";

type TPairMatchContext = {
	state: typeof initialState;
	dispatch: React.Dispatch<any>;
};

const PairMatchContext = createContext<TPairMatchContext>({
	state: initialState,
	dispatch: () => null,
});

export function PairMatchProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<PairMatchContext.Provider value={{ state, dispatch }}>
			{children}
		</PairMatchContext.Provider>
	);
}

export default PairMatchContext;
