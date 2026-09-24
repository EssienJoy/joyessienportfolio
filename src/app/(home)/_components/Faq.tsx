"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Container } from "@/components"
import { cn } from "@/lib/utils"

const faqs = [
	{
		question: "How long does it take to complete a project?",
		answer: "Most projects take 2–6 weeks depending on scope and complexity. We share a clear timeline after the discovery call, so you always know what to expect.",
	},
	{
		question: "What is included in the design process?",
		answer: "Every package includes research, wireframes, custom design, development, and testing. You review progress at every stage and give feedback before we move on.",
	},
	{
		question: "Do you offer post-launch support?",
		answer: "Yes. Every project ships with a post-launch support window, and i also offer ongoing maintenance plans if you need long-term help.",
	},
	{
		question: "Can I customize the package?",
		answer: "Absolutely. Every package is flexible — i tailor scope, pages, and features to fit your goals and budget, with no hidden fees.",
	},
	{
		question: "What payment methods do you accept?",
		answer: "We accept bank transfers, cards, PayPal, and pay locally in Nigeria. Payment terms are agreed on before work begins.",
	},
]

function Faq() {
	const [open, setOpen] = useState<number | null>(0)

	return (
		<section id="faq" className="my-20">
			<Container>
				<div className="mx-auto max-w-3xl">
					<p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-foreground">
						Some questionaires
					</p>

					<h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
						Frequently asked questions
					</h2>

					<div className="mt-10 space-y-3">
						{faqs.map((faq, index) => {
							const isOpen = open === index
							return (
								<div
									key={faq.question}
									className="overflow-hidden rounded-xl border border-border bg-surface">
									<button
										type="button"
										onClick={() =>
											setOpen(isOpen ? null : index)
										}
										aria-expanded={isOpen}
										className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left">
										<span className="text-base font-medium text-heading sm:text-lg">
											{faq.question}
										</span>
										<ChevronDown
											className={cn(
												"size-5 shrink-0 text-muted transition-transform duration-300",
												isOpen && "rotate-180",
											)}
										/>
									</button>

									<div
										className={cn(
											"grid transition-all duration-300 ease-out",
											isOpen
												? "grid-rows-[1fr] opacity-100"
												: "grid-rows-[0fr] opacity-0",
										)}>
										<div className="overflow-hidden">
											<p className="border-t border-border px-5 py-4 text-muted">
												{faq.answer}
											</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Faq
