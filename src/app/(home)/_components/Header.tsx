import NextLink from "next/link"
import { ArrowRight } from "lucide-react"

import { Container, Link, ToggleModeBtn } from "@/components"

function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
			<Container className="flex items-center justify-between gap-3 py-3">
				<div className="flex min-w-0 items-center gap-2">
					<NextLink
						href="/"
						className="text-lg font-semibold uppercase tracking-tight text-heading">
						Essien
					</NextLink>

					<span className="whitespace-nowrap border-l border-border pl-2 text-[10px] text-muted sm:text-[11px]">
						1+ years experience
					</span>
				</div>

				<nav className="flex items-center gap-2">
					<ToggleModeBtn />

					<Link href="/book-me" size="sm" className="gap-1.5">
						Book Me
						<ArrowRight className="size-4" />
					</Link>
				</nav>
			</Container>
		</header>
	)
}

export default Header
