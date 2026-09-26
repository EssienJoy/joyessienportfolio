import { Container } from "@/components"

const benefits = [
	{
		label: "Growth",
		value: "80%",
		title: "Success as a service",
		description:
			"I've been transforming digital products for years by designing unique interfaces and driving measurable growth for every client.",
	},
	{
		label: "Conversion focused",
		value: "200%",
		title: "Conversion-focused design",
		description:
			"Websites so stunning they increase your conversion rate, decrease bounce rate, and improve user engagement significantly.",
	},
	{
		label: "Market analytics",
		value: "92%",
		title: "Stay ahead of the market",
		description:
			"Designs that make you and your venture shine in a crowd of similar-looking websites. Be the one that leads the industry.",
	},
]

const miniStats = [
	{ value: "+80%", label: "User retention" },
	{ value: "+150%", label: "More leads" },
]

function WhatYouGet() {
	return (
		<section id="benefits" className="my-20">
			<Container>
				<div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-foreground">
						Benefits
					</p>

					<h2 className="text-balance text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
						Crafting designs that{" "}
						<span className="rounded-lg bg-accent px-2 text-primary dark:text-background">
							drive growth
						</span>
					</h2>

					<p className="mt-4 text-lg text-muted">
						Best for: startups, SaaS, digital creators, businesses,
						e-commerce.
					</p>
				</div>

				<div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{benefits.map((benefit, index) => (
						<article
							key={benefit.title}
							data-aos="fade-up"
							data-aos-delay={index * 100}
							className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-foreground">
								{benefit.label}
							</p>

							<p className="mt-3 text-5xl font-bold tracking-tight text-heading">
								{benefit.value}
							</p>

							<h3 className="mt-4 text-lg font-semibold text-heading">
								{benefit.title}
							</h3>

							<p className="mt-2 grow leading-relaxed text-muted">
								{benefit.description}
							</p>
						</article>
					))}
				</div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2">
					{miniStats.map((stat, index) => (
						<div
							key={stat.label}
							data-aos="fade-up"
							data-aos-delay={index * 150}
							className="rounded-xl border border-border bg-accent/30 p-6 text-center">
							<p className="text-3xl font-bold tracking-tight text-heading">
								{stat.value}
							</p>
							<p className="mt-1 text-sm text-muted">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default WhatYouGet
