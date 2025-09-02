"use client";

import { Link as AriaLink } from "react-aria-components";

function Link({
	paddingInline = "1.5rem",
	paddingBlock = "1rem",
	className = "",
	...props
}) {
	return (
		<AriaLink
			className={`link text-sm  sm:text-lg   flex gap-4 items-center rounded-2xl px-[${paddingInline}] border border-solid border-primary-black  text-primary-black bg-transparent font-medium relative transition-all overflow-hidden hover:text-primary-grey  ${className}`}
			style={{
				paddingInline,
				paddingBlock,
			}}
			{...props}
		/>
	);
}

export default Link;
