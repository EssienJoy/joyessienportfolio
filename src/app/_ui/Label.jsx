"use client";
import { Label as AriaLabel } from "react-aria-components";

function Label({ text, children }) {
	return (
		<AriaLabel htmlFor={text} className='text-md sm:text-xl font-medium '>
			{children}
		</AriaLabel>
	);
}

export default Label;
