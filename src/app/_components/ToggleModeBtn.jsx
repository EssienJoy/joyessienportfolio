"use client";

import { useToggleMode } from "./ToggleModeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

function ToggleModeBtn() {
	const { mode, toggleMode } = useToggleMode();

	return (
		<button onClick={toggleMode} className={` text-primary-white `}>
			{mode === "light" ? (
				<IoSunnyOutline size='1.25rem' />
			) : (
				<LuMoonStar size='1.25rem' />
			)}
		</button>
	);
}
export default ToggleModeBtn;
