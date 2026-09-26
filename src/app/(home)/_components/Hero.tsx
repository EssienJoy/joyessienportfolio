import { IoIosArrowForward } from "react-icons/io"

import { Container, Link } from "@/components"

function Hero() {
	return (
		<Container className="relative mt-16 mb-24 lg:mt-24">
			<div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
				<p
					className="inline-flex items-center gap-2
					 rounded-full bg-accent px-4 py-1.5 text-sm font-medium
					 text-primary dark:text-white">
					<span
						className="size-2 rounded-full
						dark:bg-white bg-primary"
					/>
					Available for new projects
				</p>

				<h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
					Transforming visions into conversion websites
				</h1>

				<p
					className="max-w-2xl text-pretty
					dark:text-white text-lg text-muted sm:text-2xl">
					Building websites that look stunning and drive real
					results — elevating your online presence to achieve your
					business goals.
				</p>

				<div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
					<Link href="/book-me" size="lg">
						Work With Me
						<IoIosArrowForward />
					</Link>
					<Link href="#projects" size="lg" variant="outline">
						Projects
						<IoIosArrowForward />
					</Link>
				</div>
			</div>
		</Container>
	)
}

export default Hero