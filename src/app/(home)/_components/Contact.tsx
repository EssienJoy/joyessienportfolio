import { Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"

import { Container, Link, buttonVariants } from "@/components"
import {
	CONTACT_EMAIL,
	WHATSAPP_URL,
	socials,
} from "@/lib/constants/data"

function Contact() {
	return (
		<section id="contact" className="pb-16">
			<Container>
				<div className="rounded-2xl border border-border bg-surface p-6 text-center sm:p-10">
					<h2 className="text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
						Let&apos;s work together
					</h2>

					<p className="mx-auto mt-3 max-w-xl text-pretty text-muted">
						Hiring for a frontend role or need a website built?
						Tell me what you need and I&apos;ll reply within 24
						hours.
					</p>

					<div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
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

					<p className="mt-4 text-sm text-muted">
						Prefer a form?{" "}
						<Link
							href="/book-me"
							variant="link"
							className="text-sm underline">
							Send a project brief
						</Link>
					</p>

					<div className="mt-6 flex items-center justify-center gap-4">
						{socials.map((social) => {
							const Icon = social.icon

							return (
								<a
									key={social.text}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${social.text} profile`}
									className="text-muted transition-colors hover:text-heading">
									<Icon className="size-5" aria-hidden />
								</a>
							)
						})}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Contact
