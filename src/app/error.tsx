"use client"
import { Button, Container } from "@/components"
import { useRouter } from "next/navigation"

export default function Error({
	error,
}: {
	error: Error & { digest?: string }
}) {
	const router = useRouter()
	return (
		<section>
			<Container
				className="flex justify-center 
		items-center flex-col gap-6 h-screen">
				<h1
					className="text-2xl
			 font-semibold">
					Something went wrong!
				</h1>
				<p className="text-lg">{error.message}</p>

				<Button
					className="dark:bg-primary bg-primary-black
				 text-2xl rounded-2xl py-3 px-6"
					onClick={() => router.back()}>
					Try again
				</Button>
			</Container>
		</section>
	)
}
