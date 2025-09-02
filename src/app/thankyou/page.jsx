import ThankYouButton from "@/app/_components/ThankyouButton";

export default function Page() {
	return (
		<main className='flex flex-col items-center  justify-center min-h-screen'>
			<h1 className='text-3xl font-bold'> Thank You! 🎉</h1>
			<p className='text-primary-black mb-6'>Your message has been received.</p>

			<ThankYouButton />
		</main>
	);
}
