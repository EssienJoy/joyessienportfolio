import { Clock, MessageSquareQuote, Zap } from "lucide-react"
import type { Metadata } from "next"
import NextLink from "next/link"

import { BookingCalendar, Container, Link } from "@/components"
import ContactMeForm from "./_components/ContactMeForm"
import { socials } from "@/lib/constants/data"

export const metadata: Metadata = {
	title: "Book Me",
}

function ContactMe() {
	const benefits = [
		{
			icon: Clock,
			title: "30-minute free consultation",
			text: "No commitment. We'll discuss your project, goals, and how we can help.",
		},
		{
			icon: MessageSquareQuote,
			title: "Direct communication",
			text: "Work directly with the developer — no middlemen, full transparency.",
		},
		{
			icon: Zap,
			title: "Fast turnaround",
			text: "Landing pages in 10–14 days. Full websites in 3–4 weeks. No delays.",
		},
	]
	return (
		<section id="contactme" className="py-8">
			<Container>
				<header className=" mt-8" data-aos="fade-up">
					<h1
						className="text-balance text-muted text-md 
					font-semibold tracking-tight
					  ">
						Book a Call
					</h1>
					<p
						className="mt-4 text-balance text-3xl 
					 ">
						Let&apos;s transform your vision into a lasting impact!
					</p>
					<p className="mt-3 text-muted">
						Get in touch — or reach out directly on {""}
						{socials.map((s) => (
							<NextLink
								className="text-accent dark:text-blue-300"
								key={s.href}
								href={s.href}>
								{s.text}/{" "}
							</NextLink>
						))}
					</p>
				</header>

				<div
					data-aos="fade-up"
					data-aos-delay="100"
					className="mt-12 grid gap-5 
				sm:grid-cols-2 lg:grid-cols-3">
					{benefits.map(({ icon: Icon, title, text }, index) => (
						<div
							key={title}
							data-aos="fade-up"
							data-aos-delay={index * 100}
							className="rounded-xl border border-border
							 bg-surface p-6">
							<span
								className="inline-flex size-10
							 items-center justify-center rounded-full
							  bg-accent text-primary dark:text-white">
								<Icon className="size-5" />
							</span>
							<h3
								className="mt-4 text-lg 
							font-semibold text-heading">
								{title}
							</h3>
							<p
								className="mt-2
							 leading-relaxed text-muted">
								{text}
							</p>
						</div>
					))}
				</div>

				<div
					data-aos="fade-up"
					data-aos-delay="150"
					className="mt-10 flex flex-col
				 items-center justify-center 
				 gap-4 sm:flex-row">
					<Link href="#contact-form" className="w-full sm:w-auto">
						Request a quote
					</Link>
					<Link
						href="#book-a-call"
						variant="outline"
						className="w-full sm:w-auto">
						Book a call
					</Link>
				</div>

				<div
					data-aos="fade-up"
					id="contact-form"
					className="mx-auto 
				mt-20 max-w-2xl">
					<h2
						className="text-center text-2xl 
					font-semibold tracking-tight 
					text-heading sm:text-3xl">
						Contact information
					</h2>

					<div
						className="mt-8 rounded-2xl border
					 border-border bg-surface p-6 sm:p-8">
						<ContactMeForm />
					</div>
				</div>
				<div id="book-a-call" data-aos="fade-up" className="mx-auto mt-20 max-w-3xl">
					<h2
						className="text-center text-2xl 
						font-semibold tracking-tight 
						text-heading sm:text-3xl">
						Book a call
					</h2>
					<p className="mt-3 text-center text-muted">
						Pick a time that works for you. A Google Meet link is
						customized automatically for every booking.
					</p>

					<div
						className="mt-8 overflow-hidden rounded-2xl 
						border border-border bg-surface">
						<BookingCalendar />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default ContactMe
