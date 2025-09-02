function PhoneFrame({ children }) {
	return (
		<section className='flex justify-center items-center px-[var(--spacing-padding-inline)] '>
			<div className='relative rounded-[2rem] border-7 border-[#ffffff] shadow-[200px] w-[350px] h-[600px] overflow-hidden'>
				<div className='absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#ffffff] rounded-b-2xl z-10'></div>
				{children}
			</div>
		</section>
	);
}

export default PhoneFrame;
