import type { Metadata } from "next"
import Image from "next/image"

import { ArrowToHome, Container } from "@/components"
import { certifications } from "@/lib/data/certifications"

export const metadata: Metadata = {
	title: "Certifications",
	description:
		"Courses and certifications completed by Essien Joy in web development.",
}

export default function CertificationsPage() {
	return (
		<Container className="py-10 sm:py-14">
			<ArrowToHome />

			<div className="mt-6 max-w-2xl">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
					Credentials
				</p>

				<h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
					Certifications
				</h1>

				<p className="mt-4 text-muted">
					Courses I&apos;ve completed to sharpen my frontend and
					backend skills.
				</p>
			</div>

			<div className="mt-8 grid gap-5 sm:grid-cols-2">
				{certifications.map((certificate) => (
					<article
						key={certificate.id}
						className="overflow-hidden rounded-xl border border-border bg-surface">
						<div className="relative aspect-[4/3] overflow-hidden border-b border-border">
							<Image
								src={certificate.image}
								alt={certificate.title}
								fill
								sizes="(min-width: 640px) 50vw, 100vw"
								className="object-cover"
							/>
						</div>

						<div className="p-5">
							<h2 className="text-base font-semibold text-heading">
								{certificate.title}
							</h2>

							<p className="mt-1 text-sm text-muted">
								{certificate.issuer}
							</p>

							<p className="mt-3 text-xs text-muted">
								Completed {certificate.date}
							</p>
						</div>
					</article>
				))}
			</div>
		</Container>
	)
}
