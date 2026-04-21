export default function Container({ children, className = "" }) {
	return (
		<section className={`${className} max-w-5xl mx-auto px-4`}>
			{children}
		</section>
	);
}
