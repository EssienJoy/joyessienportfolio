"use client";

import { useContext, createContext, useState } from "react";
import type { ReactNode } from "react";

type ToggleContextValue = {
	toggleMenu: boolean;
	toggleMenuTrue: () => void;
	toggleMenuFalse: () => void;
};

const ToggleContext = createContext<ToggleContextValue | null>(null);

function ToggleProvider({ children }: { children: ReactNode }) {
	const [toggleMenu, setToggleMenu] = useState(false);

	function toggleMenuTrue() {
		setToggleMenu(true);
	}

	function toggleMenuFalse() {
		setToggleMenu(false);
	}

	return (
		<ToggleContext.Provider
			value={{ toggleMenu, toggleMenuTrue, toggleMenuFalse }}>
			{children}
		</ToggleContext.Provider>
	);
}

function useToggle() {
	const context = useContext(ToggleContext);
	if (!context) throw new Error("Context used outside provider");
	return context;
}

export { ToggleProvider, useToggle };