"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"

import { Button, Input, Label, TextField } from "@/components"
import { cn } from "@/lib/utils"

function ContactMeForm() {
	const services = [
		"Website Design",
		"Website Development",
		"Branding",
		"Product Design",
		"Backend Development",
		"Bug fixes",
	]

	const BUDGET_RANGES = {
		NGN: [
			"Under ₦500,000",
			"₦500,000 – ₦1,000,000",
			"₦1,000,000 – ₦3,000,000",
			"Above ₦3,000,000",
		],
		USD: ["Under $500", "$500 – $1,000", "$1,000 – $3,000", "Above $3,000"],
		GBP: ["Under £400", "£400 – £800", "£800 – £2,000", "Above £2,000"],
		EUR: ["Under €500", "€500 – €1,000", "€1,000 – €3,000", "Above €3,000"],
	}

	function detectUserCurrency() {
		const EUR_REGIONS = new Set([
			"FR",
			"DE",
			"ES",
			"IT",
			"NL",
			"PT",
			"IE",
			"AT",
			"BE",
			"FI",
			"GR",
			"SE",
			"DK",
			"PL",
			"LUX",
		])
		if (typeof window === "undefined") return "USD"

		const region = navigator.language?.split("-")[1]?.toUpperCase() || ""
		const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
		if (region === "NG" || timeZone === "Africa/Lagos") return "NGN"
		if (region === "GB" || timeZone?.startsWith("Europe/London"))
			return "GBP"
		if (EUR_REGIONS.has(region)) return "EUR"
		return "USD"
	}

	function buildBudgetOptions() {
		const currency = detectUserCurrency()
		const ranges = BUDGET_RANGES[currency] ?? BUDGET_RANGES.USD
		return [...ranges, "Lets Discuss It"]
	}
	const [state, handleSubmit] = useForm("xaenbooy")
	const [selectedServices, setSelectedServices] = useState([])
	const [budgetOptions, setBudgetOptions] = useState([
		...BUDGET_RANGES.USD,
		"Lets Discuss It",
	])

	useEffect(() => {
		const timer = window.setTimeout(
			() => setBudgetOptions(buildBudgetOptions()),
			0,
		)
		return () => window.clearTimeout(timer)
	}, [])

	function toggleService(service) {
		setSelectedServices((prev) =>
			prev.includes(service)
				? prev.filter((s) => s !== service)
				: [...prev, service],
		)
	}

	return (
		<form className="grid gap-6" onSubmit={handleSubmit}>
			<TextField>
				<Label htmlFor="name">Your name</Label>
				<Input
					required
					type="text"
					id="name"
					name="name"
					placeholder="Your name"
				/>
				<ValidationError
					prefix="Name"
					field="name"
					errors={state.errors}
				/>
			</TextField>

			<TextField>
				<Label htmlFor="email">Email address</Label>
				<Input
					required
					type="email"
					id="email"
					name="email"
					placeholder="you@example.com"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
			</TextField>

			<fieldset>
				<legend className="mb-2 block text-lg font-medium text-heading sm:text-xl">
					What do you need help with?
				</legend>
				<div className="grid gap-3">
					{services.map((service) => {
						const isSelected = selectedServices.includes(service)
						return (
							<label
								key={service}
								className={cn(
									"flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors",
									isSelected
										? "border-accent bg-accent/20"
										: "border-border bg-background hover:bg-accent/10",
								)}>
								<input
									type="checkbox"
									name="services"
									value={service}
									checked={isSelected}
									onChange={() => toggleService(service)}
									className="size-4 accent-primary"
								/>
								<span className="text-sm text-foreground sm:text-base">
									{service}
								</span>
							</label>
						)
					})}
				</div>
			</fieldset>

			<TextField>
				<Label htmlFor="budget">Your budget</Label>
				<select
					name="budget"
					id="budget"
					defaultValue=""
					className="h-12 w-full rounded-xl border border-border bg-surface px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
					<option value="" disabled>
						Select budget range
					</option>
					{budgetOptions.map((budget) => (
						<option key={budget} value={budget}>
							{budget}
						</option>
					))}
				</select>
			</TextField>

			<TextField>
				<Label htmlFor="message">Tell us about your project</Label>
				<textarea
					required
					id="message"
					name="message"
					rows={5}
					placeholder="Briefly describe your project, goals, and any specific requirements..."
					className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</TextField>

			<p className="text-sm text-muted">
				By clicking this button, you agree to the site&apos;s Privacy
				Policy and consent to the processing of your personal data.
			</p>

			<Button
				type="submit"
				disabled={state.submitting}
				className="h-12 w-full rounded-xl text-base">
				{state.submitting ? "Sending..." : "Send request"}
			</Button>

			<ValidationError errors={state.errors} />
			{state.succeeded && (
				<div className="flex items-start gap-3 rounded-xl border border-accent bg-accent/20 p-4">
					<Check className="mt-0.5 size-5 shrink-0 text-primary dark:text-white" />
					<p className="text-sm text-foreground">
						Thank you! Your submission has been received. We&apos;ll
						get back to you within 24 hours.
					</p>
				</div>
			)}
		</form>
	)
}

export default ContactMeForm
