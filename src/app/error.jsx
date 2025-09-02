"use client";
import { useRouter } from "next/navigation";

import Button from "@/app/_ui/Button";

export default function Error({ error }) {
	const router = useRouter();
	return (
		<main className='flex justify-center items-center flex-col gap-6 h-screen'>
			<h1 className='text-3xl font-semibold'>Something went wrong!</h1>
			<p className='text-lg'>{error.message}</p>

			<Button
				className='bg-black text-2xl rounded-2xl text-primary-grey py-3 px-6'
				onClick={() => router.back()}>
				Try again
			</Button>
		</main>
	);
}
