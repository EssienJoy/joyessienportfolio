"use client";

import { useToggleMode } from "./ToggleModeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

function ToggleModeBtn() {
	const { toggleMode, mode } = useToggleMode();

	return (
		<button
			onClick={toggleMode}
			className={` flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary-white transition-all duration-500
        ${
					mode === "dark"
						? "bg-primary-black  text-primary-white"
						: "bg-primary-grey text-primary-black"
				}
        scale-105`}>
			{mode === "dark" ? (
				<IoSunnyOutline size='1.6rem' />
			) : (
				<LuMoonStar size='1.6rem' />
			)}
		</button>
	);
}

export default ToggleModeBtn;
