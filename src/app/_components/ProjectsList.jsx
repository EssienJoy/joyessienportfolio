import Image from "next/image";
import { HiOutlineChevronRight } from "react-icons/hi";

import { projects } from "@/app/_data/projectDetails";
import Link from "@/app/_ui/Link";
import ProjectSocials from "@/app/_components/ProjectSocials";

function ProjectsList() {
	return (
		<section className='mt-4 '>
			{projects?.map((project) => (
				<div
					className='grid lg:grid-cols-2 gap-6 p-3 sm:p-6 border-primary-black  border-solid border rounded-2xl mb-10'
					key={project.id}>
					<section className='bg-[#cbcbcb] backdrop-blur-[2px] shadow-2xl rounded-3xl  p-3 sm:p-5'>
						<figure className='relative  h-[250px] sm:h-[350px]'>
							<Image
								src={project?.image}
								quality={80}
								fill
								className='object-cover object-top rounded-2xl'
								alt={project.title + " Image"}
								placeholder='blur'
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
									className='sm:w-full border-primary-black border border-solid p-2 bg-black text-primary-grey'>
									{stack}
								</p>
							))}
						</div>

						<div className='grid gap-4 '>
							<ProjectSocials project={project} />

							<Link
								className=' justify-center'
								href={`/projectdetails/${project.id}`}>
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
