import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"

import { ArrowToHome, Container, buttonVariants } from "@/components"
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/constants/data"
import ContactMeForm from "./_components/ContactMeForm"

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Essien about a frontend role or a website project.",
}

export default function ContactPage() {
	return (
		<Container className="py-10 sm:py-14">
			<ArrowToHome />

			<div className="mx-auto mt-6 max-w-2xl text-center">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
					Contact
				</p>

				<h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
					Let&apos;s work together
				</h1>

				<p className="mx-auto mt-4 max-w-xl text-muted">
					Hiring for a frontend role or need a website built? Message
					me on WhatsApp or send the form below — I usually reply
					within 24 hours.
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
						{CONTACT_EMAIL}
					</a>
				</div>
			</div>

			<div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
				<h2 className="text-lg font-semibold text-heading">
					Send a project brief
				</h2>
				<p className="mt-1 text-sm text-muted">
					Tell me a little about what you need and I&apos;ll get back
					to you.
				</p>

				<div className="mt-5">
					<ContactMeForm />
				</div>
			</div>
		</Container>
	)
}
