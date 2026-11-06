import type { Metadata } from "next"
import { Star } from "lucide-react"

import { ArrowToHome, Container } from "@/components"

export const metadata: Metadata = {
	title: "Reviews",
	description:
		"What clients say about working with Essien on website design and development projects.",
}

function getInitials(name: string) {
	return name
		.split(" ")
		.map((part) => part[0])
		.join("")
		.slice(0, 2)
		.toUpperCase()
}

export default function ReviewsPage() {
	return (
		<Container className="py-10 sm:py-14">
			<ArrowToHome />

			<div className="mt-6 max-w-2xl">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
					Client reviews
				</p>

				<h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
					What clients say
				</h1>

				<p className="mt-4 text-muted">
					Real feedback from people I&apos;ve worked with. These are
					read-only — if you&apos;d like to talk to me directly, my
					contact details are below.
				</p>

				<div className="mt-5 flex items-center gap-2 text-sm text-muted">
					<span className="flex items-center gap-0.5">
						{Array.from({ length: 5 }).map((_, index) => (
							<Star
								key={index}
								className="size-4 fill-accent text-accent"
								aria-hidden
							/>
						))}
					</span>
					<span>5.0 average from {reviews.length} reviews</span>
				</div>
			</div>

			<div className="mt-8 grid gap-4 md:grid-cols-3">
				{reviews.map((review) => (
					<article
						key={review.name}
						className="flex flex-col rounded-xl border border-border bg-surface p-5">
						<div className="flex items-center gap-0.5">
							{Array.from({ length: 5 }).map((_, index) => (
								<Star
									key={index}
									className="size-3.5 fill-accent text-accent"
									aria-hidden
								/>
							))}
						</div>

						<blockquote className="mt-3 grow text-sm leading-relaxed text-muted">
							&ldquo;{review.text}&rdquo;
						</blockquote>

						<div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
							<span className="inline-flex size-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-primary dark:text-white">
								{getInitials(review.name)}
							</span>

							<div>
								<p className="text-sm font-medium text-heading">
									{review.name}
								</p>
								<p className="text-xs text-muted">
									{review.role}
								</p>
							</div>
						</div>
					</article>
				))}
			</div>

			{/* <div className="mt-10 rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
				<h2 className="text-2xl font-semibold tracking-tight text-heading">
					Want to work together?
				</h2>

				<p className="mx-auto mt-2 max-w-xl text-sm text-muted">
					Whether you&apos;re hiring or need a website built, I&apos;d
					love to hear from you.
				</p>

				<div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
					<a
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
						className={buttonVariants({ size: "lg" })}>
						<FaWhatsapp className="size-5" aria-hidden />
						Chat on WhatsApp
					</a>

					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className={buttonVariants({
							size: "lg",
							variant: "outline",
						})}>
						<Mail className="size-4" aria-hidden />
						Email me
					</a>
				</div>
			</div> */}
		</Container>
	)
}
