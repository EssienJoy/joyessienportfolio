import NextLink from "next/link"

import { Container } from "@/components"
import { CONTACT_EMAIL, socials } from "@/lib/constants/data"

function Footer() {
	return (
		<footer className="border-t border-border bg-surface/60">
			<Container className="flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
				<p className="text-sm text-muted">
					© 2026 Essien. All rights reserved.
				</p>

				<div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className="text-muted transition-colors hover:text-heading">
						{CONTACT_EMAIL}
					</a>

					<a
						href="/essien-joy-cv.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted transition-colors hover:text-heading">
						View CV
					</a>

					<NextLink
						href="/certifications"
						className="text-muted transition-colors hover:text-heading">
						Certifications
					</NextLink>

					<div className="flex items-center gap-3">
						{socials.map((social) => {
							const Icon = social.icon

							return (
								<NextLink
									key={social.text}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${social.text} profile`}
									className="text-muted transition-colors hover:text-heading">
									<Icon className="size-4" aria-hidden />
								</NextLink>
							)
						})}
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
