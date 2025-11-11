"use client";

import { useToggle } from "./ToggleMenuContext";

function MobileMenuButton() {
	const { toggleMenuTrue } = useToggle();

	return (
		<button
			class='sm:hidden flex items-center rounded-full bg-primary-white px-4 py-2 text-sm font-medium text-primary-black shadow-lg '
			type='button'
			onClick={toggleMenuTrue}>
			Menu
			<svg
				viewBox='0 0 8 6'
				ariaHidden='true'
				class='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400'>
				<path
					d='M1.75 1.75 4 4.25l2.25-2.5'
					fill='none'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'></path>
			</svg>
		</button>
	);
}

export default MobileMenuButton;
