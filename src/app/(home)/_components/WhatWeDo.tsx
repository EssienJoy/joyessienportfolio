import { Container } from "@/components"

function WhatWeDo() {
	const steps = [
		{
			number: "01",
			title: "Consulting",
			description:
				"I start by understanding your goals, design preferences, and target audience to lay a solid foundation.",
		},
		{
			number: "02",
			title: "Collaborative Review",
			description:
				"During design, i invite client feedback to ensure optimal structure and functionality early on.",
		},
		{
			number: "03",
			title: "Make it Pop",
			description:
				"Establishing structure focused on functionality and accessibility, including interactions for total immersion.",
		},
		{
			number: "04",
			title: "Refinement",
			description:
				"I refine every detail, iterating until you're completely satisfied with the final output.",
		},
		{
			number: "05",
			title: "Ready to Take Off",
			description:
				"Delivering a fully functional, launch-ready website for a seamless transition from concept to completion.",
		},
		{
			number: "06",
			title: "Project Support",
			description:
				"I stay engaged for as long as you need us, making sure our designs are implemented smoothly.",
		},
	]
	return (
		<section id="process" className="my-20">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-foreground">
						Project Scope
					</p>

					<h2 className="text-balance text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
						My work process
					</h2>
				</div>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{steps.map((step) => (
						<article
							key={step.number}
							className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
							<span className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary dark:text-background">
								{step.number}
							</span>

							<h3 className="mt-4 text-lg font-semibold text-heading">
								{step.title}
							</h3>

							<p className="mt-2 grow leading-relaxed text-muted">
								{step.description}
							</p>
						</article>
					))}
				</div>
			</Container>
		</section>
	)
}

export default WhatWeDo
