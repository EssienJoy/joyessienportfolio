"use client"

import { useEffect, useState } from "react"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import NextLink from "next/link"

import { cn } from "@/lib/utils"
import { Container, Link, ToggleModeBtn } from "@/components"

function Header() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8)
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full border-b transition-colors duration-300",
				scrolled
					? "border-border bg-background/80 backdrop-blur-md"
					: "border-transparent bg-transparent",
			)}>
			<Container className="flex items-center justify-between gap-5 py-3">
				<NextLink
					href="/"
					className="text-lg 
				uppercase font-semibold">
					Essien
				</NextLink>

				<nav className="flex items-center gap-6">
					<div className="flex gap-2 items-center">
						<div className="relative w-7 h-7">
							<Image
								src="/images/portfolio-image.png"
								fill
								alt="portfolio profile image"
								className="rounded-lg object-cover object-top"
							/>
						</div>
						<ToggleModeBtn />
					</div>
					<Link href="/book-me">
						Book Me
						<ArrowRightIcon />
					</Link>
				</nav>
			</Container>
		</header>
	)
}

export default Header
