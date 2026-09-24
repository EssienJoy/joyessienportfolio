import * as React from "react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
	return (
		<label
			className={cn(
				"mb-2 block text-lg font-medium text-heading sm:text-xl",
				className,
			)}
			{...props}
		/>
	)
}

export { Label }