import { Check } from "lucide-react"

import { Container, Link } from "@/components"

const plans = [
	{
		name: "Starter",
		tag: "Landing Page",
		description:
			"Premium, high-converting landing page designed to turn visitors into clients.",
		features: [
			"1–2 pages",
			"Premium design",
			"Conversion rate optimization",
			"Copywriting assistance",
			"Fully responsive design",
			"Unlimited revisions",
			"10–12 day delivery",
		],
	},
	{
		name: "Full Website",
		badge: "Most Popular",
		description:
			"Full website with more pages, advanced features, and complete brand experience.",
		features: [
			"Custom page count",
			"Premium design",
			"Conversion rate optimization",
			"Copywriting assistance",
			"Fully responsive design",
			"Unlimited revisions",
			"Custom delivery timeline",
		],
	},
]

function WhatWeOffer() {
	return (
		<section id="pricing" className="my-20">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-foreground">
						How i can help you
					</p>

					<h2 className="text-balance text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
						Simple, transparent pricing for you
					</h2>
				</div>

				<div className="mt-12 grid gap-6 lg:grid-cols-2">
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={
								"relative flex h-full flex-col rounded-xl border bg-surface p-6 lg:p-8 " +
								(plan.badge ? "border-accent" : "border-border")
							}>
							{plan.badge && (
								<span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary dark:text-background">
									{plan.badge}
								</span>
							)}

							<h3 className="text-xl font-semibold text-heading sm:text-2xl">
								{plan.name}
							</h3>

							{plan.tag && (
								<p className="mt-1 text-sm font-medium text-primary dark:text-foreground">
									{plan.tag}
								</p>
							)}

							<p className="mt-4 leading-relaxed text-muted">
								{plan.description}
							</p>

							<ul className="mt-6 grid gap-3 border-t border-border pt-6">
								{plan.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center gap-3">
										<span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent">
											<Check className="size-3 text-primary dark:text-background" />
										</span>
										<span className="text-sm text-foreground">
											{feature}
										</span>
									</li>
								))}
							</ul>

							<div className="mt-8 flex grow flex-col justify-end">
								<Link
									href="/book-me"
									className="w-full justify-center"
									aria-label={`Get a project quote for the ${plan.name} plan`}>
									Get a project quote →
								</Link>

								<p className="mt-4 text-center text-xs text-muted">
									or reach out on Facebook / WhatsApp / X
									(Twitter)
								</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default WhatWeOffer
