"use client";

import { Button as AriaButton } from "react-aria-components";

function Button({ onClick, className = "", children }) {
	return (
		<AriaButton
			className={` text-primary-black  cursor-pointer
		${className}`}
			onPress={onClick}>
			{children}
		</AriaButton>
	);
}

export default Button;
