import { Award, Heart, Rocket, Users } from "lucide-react"

import { Container } from "@/components"

const stats = [
	{ icon: Users, value: "5+", label: "Satisfied Clients" },
	{ icon: Rocket, value: "15+", label: "Projects Delivered" },
	{ icon: Award, value: "2+", label: "Years of Experience" },
	{ icon: Heart, value: "98%", label: "Client Satisfaction" },
]

function WhyTrustUs() {
	return (
		<section className="my-20">
			<Container>
				<div data-aos="fade-right" className="max-w-3xl">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-foreground">
						My Story
					</p>

					<h2 className="text-balance text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
						Creating Digital{" "}
						<span className="rounded-lg bg-accent px-2 text-primary dark:text-white">
							Experiences That Convert
						</span>
					</h2>

					<div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
						<p>
							I specialize in transforming visions into
							conversion-driven websites. My work blends creative
							innovation with functional design to craft digital
							experiences that inspire action.
						</p>
						<p>
							I deeply understand your customers, refine your
							product, and align with your strategy to solve real
							problems. From startups to established businesses —
							no templates, no shortcuts.
						</p>
					</div>
				</div>

				<section className="mt-14 grid grid-cols-2 gap-5">
					{stats.map((stat, index) => (
						<div
							key={stat.label}
							data-aos="fade-up"
							data-aos-delay={index * 100}
							className="cursor-pointer rounded-xl border border-border bg-surface p-6 text-center transition-transform hover:-translate-y-1">
							<div
								className="mx-auto mb-4 inline-flex
								size-11 items-center justify-center rounded-full
								bg-accent text-primary dark:text-white">
								<stat.icon className="size-5" />
							</div>
							<p className="text-3xl font-bold text-heading sm:text-4xl">
								{stat.value}
							</p>
							<p className="mt-1 text-sm text-muted">
								{stat.label}
							</p>
						</div>
					))}
				</section>
			</Container>
		</section>
	)
}

export default WhyTrustUs