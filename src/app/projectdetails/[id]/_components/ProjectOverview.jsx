function ProjectOverview({ project }) {
	return (
		<div className='w-full sm:w-[80%] mx-auto mt-5'>
			<h3 className='text-2xl sm:text-3xl mb-5 font-medium'>Overview </h3>
			<p className='text-lg sm:text-xl '>{project?.description}</p>
		</div>
	);
}

export default ProjectOverview;
