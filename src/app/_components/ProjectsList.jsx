import Image from "next/image";
import { HiOutlineChevronRight } from "react-icons/hi";
import Link from "@/app/_components/_ui/Link";
import { HiLink } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";

function ProjectsList({ projects }) {
	return (
		<section className='mt-4 '>
			{projects?.map((project) => (
				<div
					className='grid lg:grid-cols-2 gap-6 p-3 sm:p-6 dark:border-primary border-primary-black  border-solid border rounded-2xl mb-10'
					key={project.id}>
					<section className='dark:bg-primary bg-primary-black backdrop-blur-[2px] shadow-2xl rounded-3xl  p-3 sm:p-5'>
						<figure className='relative  h-[250px] sm:h-[350px]'>
							<Image
								src={project?.image}
								quality={80}
								fill
								className='object-cover object-top rounded-2xl'
								alt={project.title + " Image"}
							/>
						</figure>
					</section>

					<section className='flex flex-col justify-around gap-4 lg:gap-0'>
						<h3 className='text-2xl sm:text-4xl font-medium '>
							{project.title}
						</h3>
						<p className='text-md sm:text-2xl'>{project.info}</p>

						<div className='text-sm sm:text-xl font-medium grid grid-cols-2 gap-3'>
							{project.stack.slice(0, 2).map((stack, index) => (
								<p
									key={index}
									className='sm:w-full p-2 bg-black dark:bg-primary text-primary-white'>
									{stack}
								</p>
							))}
						</div>

						<div className='grid gap-4 '>
							<div className='grid grid-cols-2 gap-4'>
								<Link
									href={project.live}
									target='_blank'
									className='gap-2'
									rel='noopener noreferrer'>
									<span>Live</span>
									<HiLink size='1.5rem' />
								</Link>
								<Link
									className='gap-2'
									href={project.github}
									target='_blank'
									rel='noopener noreferrer'>
									<span> GitHub</span>{" "}
									<DiGithubBadge className='shrink-0' size='1.5rem' />
								</Link>
							</div>

							<Link
								className=' justify-center gap-1 hover:gap-3'
								href={`/projects/${project.id}`}>
								<span>Project Details</span>
								<HiOutlineChevronRight size='1.5rem' />
							</Link>
						</div>
					</section>
				</div>
			))}
		</section>
	);
}

export default ProjectsList;
