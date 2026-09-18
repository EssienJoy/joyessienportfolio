import ThankYouButton from "@/app/_components/ThankyouButton";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
// export const instant = false;

export default function Page() {
	return (
		<main className='flex flex-col items-center  justify-center min-h-screen'>
			<h1 className='text-3xl font-bold'> Thank You! 🎉</h1>
			<p className='text-primary-black mb-6'>Your message has been received.</p>

			<ThankYouButton />
		</main>
	);
}
