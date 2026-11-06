import { FaWhatsapp } from "react-icons/fa6"

import { WHATSAPP_URL } from "@/lib/constants/data"

export default function WhatsAppButton() {
	return (
		<a
			href={WHATSAPP_URL}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Chat with Essien on WhatsApp"
			title="Chat with me on WhatsApp"
			className="fixed bottom-24 right-6 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
			<FaWhatsapp className="size-7" aria-hidden />
		</a>
	)
}
