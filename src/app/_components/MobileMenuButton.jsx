"use client";

import { useToggle } from "./ToggleMenuContext";
import { IoIosArrowDown } from "react-icons/io";

function MobileMenuButton() {
	const { toggleMenuTrue } = useToggle();

	return (
		<button
			className='sm:hidden flex items-center rounded-full bg-primary-white px-4 py-2 text-sm font-medium text-primary-black shadow-lg '
			type='button'
			onClick={toggleMenuTrue}>
			Menu
			<IoIosArrowDown />
		</button>
	);
}

export default MobileMenuButton;
