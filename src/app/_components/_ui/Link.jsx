"use client";

import { Link as AriaLink } from "react-aria-components";

function Link({
	paddingInline = "1.5rem",
	paddingBlock = "1rem",
	className = "",
	children,
	...props
}) {
	return (
		<AriaLink
			className={` text-sm  sm:text-lg   flex items-center rounded-2xl px-[${paddingInline}] border border-solid dark:border-primary border-primary-black font-medium transition-all   ${className}`}
			style={{
				paddingInline,
				paddingBlock,
			}}
			{...props}>
			{children}
		</AriaLink>
	);
}

export default Link;
