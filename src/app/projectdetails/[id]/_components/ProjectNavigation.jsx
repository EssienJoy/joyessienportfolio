import Link from "@/app/_ui/Link";

function ProjectNavigation({ project, projectLength }) {
	return (
		<div className='flex justify-center items-center gap-3 mt-6'>
			{project.id > 1 && (
				<Link
					className='text-sm sm:text-lg'
					href={`/projectdetails/${project.id - 1}`}
					prefetch>
					Prev
				</Link>
			)}
			<p className='font-medium text-lg grid place-items-center'>
				{project.id}/{projectLength}
			</p>
			{project.id < projectLength && (
				<Link
					className='text-sm sm:text-lg'
					href={`/projectdetails/${project.id + 1}  `}
					prefetch>
					Next
				</Link>
			)}
		</div>
	);
}

export default ProjectNavigation;
