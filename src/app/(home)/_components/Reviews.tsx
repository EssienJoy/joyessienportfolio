import { Container } from "@/components"

const reviews = [
	{
		company: "company",
		text: "I wasn't sure a new website would make much of a difference at first, but it honestly changed everything for us. The site looks great, works perfectly on phones, and customers actually tell us how easy it is to find what they need. Our enquiries have gone up since launch.",
		name: "Prince Charles Dogini",
		role: "Executive Director",
	},
	{
		company: "company",
		text: "From the very first call, they just got it. No back and forth, no confusion — they listened, then built exactly what we had in mind. The website finally looks like the brand we thought we were. I'd work with them again in a heartbeat.",
		name: "Alex Osuji",
		role: "Executive Director",
	},
	{
		text: "Honestly, the whole process was smoother than I expected. They kept me updated, took feedback well, and the final result looks better than anything I imagined. If you're serious about your business's online presence, these are your guys.",
		name: "Christian Chidebere",
		role: "Executive Director",
	},
]

function getInitials(name: string) {
	return name
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word[0])
		.join("")
		.toUpperCase()
}

function Reviews() {
	return (
		<section id="reviews" className="my-20">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-foreground">
						Clients say about us
					</p>

					<h2 className="text-balance text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
						Our valued clients
					</h2>

					<p className="mt-4 text-lg text-muted">
						Real feedback from real clients. See how our work drives
						results.
					</p>
				</div>

				<div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{reviews.map((review) => (
						<article
							key={review.name}
							className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
							<div className="mb-4 flex items-center gap-3">
								{review.company && (
									<span className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
										{review.company}
									</span>
								)}
								<span className="ml-auto text-lg leading-none text-amber-400">
									★★★★★
								</span>
							</div>

							<p className="grow leading-relaxed text-muted">
								{review.text}
							</p>

							<div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
								<span className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary dark:text-background">
									{getInitials(review.name)}
								</span>
								<div>
									<p className="font-semibold text-heading">
										{review.name}
									</p>
									<p className="text-sm text-muted">
										{review.role}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</Container>
		</section>
	)
}

export default Reviews
