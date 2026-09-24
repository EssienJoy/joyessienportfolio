import { Link, Container } from "@/components"

function NotFound() {
	return (
		<section
			className="h-screen flex flex-col
		 items-center justify-center gap-6">
			<Container>
				<h1
					className="text-3xl 
				font-medium">
					Page Not Found
				</h1>
				<Link href="/">Return Home</Link>
			</Container>
		</section>
	)
}

export default NotFound
