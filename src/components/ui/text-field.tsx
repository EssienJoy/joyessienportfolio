import * as React from "react"

import { cn } from "@/lib/utils"

function TextField({ className, ...props }: React.ComponentProps<"div">) {
	return <div className={cn("grid gap-2", className)} {...props} />
}

export { TextField }