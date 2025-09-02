function LaptopFrame({ children }) {
	return (
		<section className='my-5  '>
			<div className='relative rounded-2xl border-2 border-primary-white shadow-2xl w-full aspect-video overflow-hidden'>
				<div className='absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-grey rounded-full'></div>

				<div className='w-full h-full'>{children}</div>
			</div>
		</section>
	);
}

export default LaptopFrame;
