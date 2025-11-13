"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ToggleModeContext = createContext();

function ToggleModeProvider({ children }) {
	const [mode, setMode] = useState("light");

	// Load theme preference from localStorage or system preference
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setMode(storedTheme);
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setMode(prefersDark ? "dark" : "light");
		}
	}, []);

	// Apply theme to document and persist
	useEffect(() => {
		if (!mode) return;

		const htmlEl = document.documentElement;

		if (mode === "dark") {
			htmlEl.classList.add("dark");
		} else {
			htmlEl.classList.remove("dark");
		}

		localStorage.setItem("theme", mode);
		document.cookie = `themeMode=${mode}; path=/; max-age=31536000`;
	}, [mode]);

	// Toggle function
	function toggleMode() {
		setMode((prev) => (prev === "light" ? "dark" : "light"));
	}

	return (
		<ToggleModeContext.Provider value={{ mode, toggleMode }}>
			{children}
		</ToggleModeContext.Provider>
	);
}

function useToggleMode() {
	const context = useContext(ToggleModeContext);
	if (!context)
		throw new Error("useToggleMode must be used within ToggleModeProvider");
	return context;
}

export { ToggleModeProvider, useToggleMode };
