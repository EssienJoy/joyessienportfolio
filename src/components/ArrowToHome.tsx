import Link from "next/link"
import { ArrowLeft } from "lucide-react"

function ArrowToHome({ label = "Back to home" }: { label?: string }) {
	return (
		<Link
			href="/"
			className="inline-flex w-fit items-center gap-1.5 text-sm text-muted transition-colors hover:text-heading">
			<ArrowLeft className="size-4" aria-hidden />
			{label}
		</Link>
	)
}

export default ArrowToHome
