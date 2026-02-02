import Container from "./Container";

function Experience() {
	return (
		<section className='my-10 '>
			<Container>
				<h2 className='text-3xl sm:text-5xl font-bold  my-6 '>
					Work Experience
				</h2>
			</Container>

			<ul>
				<li className='border-t-primary-black border-b-primary-black  dark:border-t-primary dark:border-b-primary border-t border-b border-solid '>
					<Container className='max-w-7xl flex flex-col sm:flex-row gap-10 sm:gap-20 py-6 items-start'>
						<div className='flex flex-col gap-3'>
							<p className='font-bold'>2025</p>

							<p>1 month 1 week</p>
						</div>

						<div className='grow flex flex-col gap-3'>
							<h2 className='font-bold text-2xl'>Campus Cart</h2>
							<p>Frontend Developer Internship</p>
							<ul className='flex flex-wrap gap-5 uppercase '>
								<li>Next js</li>
								<li>Type Script</li>
								<li>Redux</li>
								<li>Tailwind</li>
								{/* <li>Fast Api</li> */}
							</ul>
						</div>
					</Container>
				</li>
			</ul>
		</section>
	);
}

export default Experience;
