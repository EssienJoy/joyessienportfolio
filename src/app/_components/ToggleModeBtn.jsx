"use client";

import { useToggleMode } from "./ToggleModeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

function ToggleModeBtn() {
	const { lightMode, darkMode, mode } = useToggleMode();

	return (
		<div
			className='flex items-center gap-2 py-1 px-3 rounded-4xl
		border-primary dark:border-primary-black border border-solid'>
			<button
				onClick={lightMode}
				className={` text-primary-white 
				${mode === "light" ? " bg-[#57575779] rounded-2xl p-1 " : ""}
				`}>
				<IoSunnyOutline size='1.25rem' />
			</button>
			<button
				onClick={darkMode}
				className={`  text-primary-white ${
					mode === "dark" ? " bg-[#575757c8] rounded-2xl p-1" : ""
				} `}>
				<LuMoonStar size='1.25rem' />
			</button>
		</div>
	);
}
export default ToggleModeBtn;
