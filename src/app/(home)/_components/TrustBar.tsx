import NextLink from "next/link"
import { Star } from "lucide-react"

import { Container } from "@/components"

const stats = [
	{ value: "5.0", label: "Client rating" },
	{ value: "5+", label: "Projects delivered" },
	{ value: "5+", label: "Happy clients" },
	{ value: "98%", label: "Satisfaction" },
]

function TrustBar() {
	return (
		<section className="border-y border-border bg-surface/60">
			<Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
				<div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:items-center sm:gap-10">
					{stats.map((stat, index) => (
						<div key={stat.label}>
							<p className="flex items-center gap-1 text-xl font-semibold text-heading">
								{stat.value}
								{index === 0 && (
									<Star
										className="size-4 fill-accent text-accent"
										aria-hidden
									/>
								)}
							</p>
							<p className="text-xs text-muted">{stat.label}</p>
						</div>
					))}
				</div>

				<NextLink
					href="/reviews"
					className="text-sm font-medium text-accent hover:underline">
					Read client reviews &rarr;
				</NextLink>
			</Container>
		</section>
	)
}

export default TrustBar
