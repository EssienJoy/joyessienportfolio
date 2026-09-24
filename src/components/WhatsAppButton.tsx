import { FaWhatsapp } from "react-icons/fa"

const WA_LINK =
	"https://wa.me/2348087152901?text=Hello%2C%20I%27d%20like%20to%20book%20a%20service"

function WhatsAppButton() {
	return (
		<a
			href={WA_LINK}
			target='_blank'
			rel='noopener noreferrer'
			aria-label='Chat with us on WhatsApp'
			title='Book a service on WhatsApp'
			className='fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'>
			<FaWhatsapp className='size-8' />
		</a>
	)
}

export default WhatsAppButton