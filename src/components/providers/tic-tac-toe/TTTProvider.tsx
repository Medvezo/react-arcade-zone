"use client";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./ttt-store";

type TTTType = {
	state: typeof initialState;
	dispatch: React.Dispatch<any>;
};

const TTTContext = createContext<TTTType>({
	state: initialState,
	dispatch: () => null,
});

export function TTTProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<TTTContext.Provider value={{ state, dispatch }}>
			{children}
		</TTTContext.Provider>
	);
}
