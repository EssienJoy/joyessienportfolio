"use client";

import { useToggle } from "./ToggleMenuContext";
import { IoIosArrowDown } from "react-icons/io";

function MobileMenuButton() {
	const { toggleMenuTrue } = useToggle();

	return (
		<button
			className='sm:hidden flex gap-1 items-center rounded-full bg-primary-black dark:bg-primary text-primary-white px-4 py-1 sm:py-2 text-sm font-medium  shadow-lg '
			type='button'
			onClick={toggleMenuTrue}>
			Menu
			<IoIosArrowDown />
		</button>
	);
}

export default MobileMenuButton;
