"use client";

import { Link as AriaLink } from "react-aria-components";

function Link({
	variant = "outline",
	size = "md",
	className = "",
	children,
	...props
}) {
	// 🎯 Variants (design styles)
	const variants = {
		filled: "bg-primary-black text-white dark:bg-primary ",
		// ghost: "",
		white: "bg-white text-primary-black border dark:border-transparent ",
	};

	// 🎯 Sizes
	const sizes = {
		sm: "text-sm px-4 py-2",
		md: "text-sm sm:text-lg px-6 py-3",
		lg: "text-lg px-8 py-4",
	};

	return (
		<AriaLink
			className={`
        flex items-center justify-center rounded-md
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
			{...props}>
			{children}
		</AriaLink>
	);
}

export default Link;
