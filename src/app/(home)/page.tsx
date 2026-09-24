import { Faq, Hero, Projects, Reviews, WhatYouGet, WhyTrustUs } from "./_components"

export default function Home() {
	return (
		<>
			<Hero />
			<WhyTrustUs />
			<Projects />
			<WhatYouGet />
			<Reviews />
			<Faq />
		</>
	)
}