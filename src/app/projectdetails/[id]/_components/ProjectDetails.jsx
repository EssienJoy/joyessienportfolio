function ProjectDetails({ project }) {
	return (
		<div className='w-full sm:w-[80%] mx-auto '>
			<div className='text-md sm:text-xl font-medium grid grid-cols-2 gap-3 '>
				{project?.stack.map((stack, index) => (
					<p
						className=' sm:w-full border-primary-black border border-solid p-2 bg-black text-primary-grey'
						key={index}>
						{stack}
					</p>
				))}
			</div>
			<h3 className='text-2xl sm:text-3xl my-7 font-medium'>Project Details</h3>
			<p className='text-lg sm:text-xl '>{project.details}</p>

			<h3 className='text-2xl sm:text-3xl my-5 font-medium'>Implimentations</h3>
			<ul className='list-disc list-inside text-lg sm:text-xl'>
				{project?.implimentations?.map((implimetation, index) => (
					<li className='mb-2' key={index}>
						{implimetation}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProjectDetails;
