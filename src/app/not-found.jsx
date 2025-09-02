import Link from "@/app/_ui/Link";

function NotFound() {
	return (
		<section className='h-screen flex flex-col items-center justify-center gap-6'>
			<h1 className='text-3xl font-medium'>Page Not Found</h1>
			<Link href='/'>Return Home</Link>
		</section>
	);
}

export default NotFound;
