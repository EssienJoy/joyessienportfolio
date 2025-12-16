export default function Container({ children, className = "" }) {
	return (
		<section className={`${className} max-w-7xl mx-auto px-4`}>
			{children}
		</section>
	);
}
