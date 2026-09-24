import { ArrowRightIcon } from "lucide-react"
import { Container, EmailCopy } from "@/components"
import { socials, quickLinks } from "@/lib/constants/data"
import NextLink from "next/link"
import { Link } from "../../../components/ui/link"

function FooterColumn({ title, children }: FooterColumnProps) {
	return (
		<nav>
			<h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-heading">
				{title}
			</h3>
			<ul className="flex flex-col gap-3">{children}</ul>
		</nav>
	)
}

function Footer() {
	const FOOTER_EMAIL = "talktoessienjoy@gmail.com"

	return (
		<footer className="mt-20 border-t border-border bg-surface/60">
			<Container>
				<div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
					<div className="max-w-sm space-y-5">
						<p className="text-3xl font-bold tracking-tight text-heading">
							Essien
						</p>

						<p className="text-muted">
							Building websites that look stunning and drive real
							results. Your digital growth partner.
						</p>

						<Link
							href="/book-me"
							size="lg"
							className="w-fit dark:text-white">
							Book a Call
							<ArrowRightIcon />
						</Link>

						<p className="text-sm text-muted">
							Let&rsquo;s collaborate! Reach out for projects or
							inquiries.
						</p>

						<div className="flex items-center gap-2 text-sm">
							<EmailCopy email={FOOTER_EMAIL} />
							<a
								href={`mailto:${FOOTER_EMAIL}`}
								className="text-muted transition-colors hover:text-heading">
								{FOOTER_EMAIL}
							</a>
						</div>
					</div>

					<FooterColumn title="Social Links">
						{socials.map((social) => {
							const Icon = social.icon
							return (
								<li key={social.text}>
									<NextLink
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${social.text} profile`}
										className="inline-flex w-full items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-muted transition-colors hover:text-heading">
										<Icon size="1rem" />
										<span>{social.text}</span>
									</NextLink>
								</li>
							)
						})}
					</FooterColumn>

					<FooterColumn title="Quick Links">
						{quickLinks?.map((link) => (
							<li key={link.url}>
								<NextLink
									href={link.url}
									className="block w-full rounded-md border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:text-heading">
									{link.text}
								</NextLink>
							</li>
						))}
					</FooterColumn>
				</div>

				<div className="border-t border-border py-6 text-center text-sm text-muted">
					<p>©2026 Essien — All rights reserved.</p>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
