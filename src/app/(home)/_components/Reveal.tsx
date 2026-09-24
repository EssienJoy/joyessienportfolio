import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type RevealProps = {
	children: ReactNode
	className?: string
	delay?: number
	variant?: "up" | "left"
}

function Reveal({
	children,
	className,
	delay = 0,
	variant = "up",
}: RevealProps) {
	return (
		<div
			style={delay ? { animationDelay: `${delay}ms` } : undefined}
			className={cn(
				variant === "left"
					? "animate-reveal-left"
					: "animate-reveal-up",
				className,
			)}>
			{children}
		</div>
	)
}

export default Reveal