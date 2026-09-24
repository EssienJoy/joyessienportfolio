import { cn } from "@/lib/utils"

export default function Container({
	children,
	className = "",
	id = "",
}: {
	className?: string
	id?: string
	children: React.ReactNode
}) {
	return (
		<section
			id={id}
			className={cn("max-w-5xl mx-auto px-2 sm:px-6", className)}>
			{children}
		</section>
	)
}
