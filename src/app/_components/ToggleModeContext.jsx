"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ToggleModeContext = createContext();

function ToggleModeProvider({ children }) {
	const [mode, setMode] = useState(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme");
			if (storedTheme) return storedTheme;

			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			return prefersDark ? "dark" : "light";
		}
		return "light";
	});

	useEffect(() => {
		localStorage.setItem("theme", mode);
		document.cookie = `themeMode=${mode}; path=/; max-age=31536000`;

		const htmlEl = document.documentElement;
		if (mode === "dark") {
			htmlEl.classList.add("dark");
		} else {
			htmlEl.classList.remove("dark");
		}
	}, [mode]);

	function lightMode() {
		setMode("light");
	}

	function darkMode() {
		setMode("dark");
	}

	// function toggleMode() {
	// 	setMode((prev) => (prev === "light" ? "dark" : "light"));
	// }

	return (
		<ToggleModeContext.Provider value={{ mode, lightMode, darkMode }}>
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
