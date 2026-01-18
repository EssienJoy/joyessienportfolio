import Image from "next/image";
import { HiLink } from "react-icons/hi";
import { DiGithubBadge } from "react-icons/di";

import Container from "@/app/_components/Container";
import ArrowBack from "@/app/_components/ArrowBack";
import { projects } from "@/app/_data/projectDetails";
import Link from "@/app/_components/_ui/Link";
import ProjectNavigation from "@/app/_components/ProjectNavigation";

async function page({ params }) {
	const { id } = await params;
	const project = projects.find((proj) => proj.id === Number(id));

	const { title, image } = project;
	const maxLength = projects?.length || 5;

	return (
		<Container className='my-5'>
			{project.note && (
				<p className='my-4 text-sm text-yellow-700 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded'>
					⚠️ {project?.note}
				</p>
			)}
			<ArrowBack />
			<h2 className='text-5xl sm:text-4xl font-boldtext-center my-6 text-center'>
				{title}
			</h2>
			<div className='w-full sm:w-[80%] mx-auto mt-5'>
				<h3 className='text-2xl sm:text-3xl mb-5 font-medium'>Overview </h3>
				<p className='text-lg sm:text-xl '>{project?.description}</p>
			</div>
			<section className='bg-primary-black dark:bg-primary backdrop-blur-[2px] drop-shadow-2xl rounded-3xl  p-3 sm:p-5 my-10'>
				<figure className='relative w-full h-[250px] sm:h-[500px]'>
					<Image
						src={image}
						quality={80}
						fill
						className='object-cover object-top rounded-2xl'
						alt={title + " Image"}
					/>
				</figure>
			</section>
			<div className='w-full sm:w-[80%] mx-auto '>
				<div className='text-md sm:text-xl font-medium grid grid-cols-2 gap-3 '>
					{project?.stack.map((stack, index) => (
						<p
							className='sm:w-full border-primary-black border border-solid p-2 bg-black dark:bg-primary text-primary-white'
							key={index}>
							{stack}
						</p>
					))}
				</div>
				<h3 className='text-2xl sm:text-3xl my-7 font-medium'>
					Project Details
				</h3>
				<p className='text-lg sm:text-xl '>{project.details}</p>

				<h3 className='text-2xl sm:text-3xl my-5 font-medium'>
					Implimentations
				</h3>
				<ul className='list-disc list-inside text-lg sm:text-xl'>
					{project?.implimentations?.map((implimetation, index) => (
						<li className='mb-2' key={index}>
							{implimetation}
						</li>
					))}
				</ul>
			</div>
			<section className='my-8'>
				<div className='w-full sm:w-[80%] mx-auto'>
					<h2 className='text-3xl mb-3 font-medium'>Problem</h2>
					<p className='text-lg sm:text-xl'>{project.problem}</p>
				</div>
			</section>
			<section className='my-8'>
				<div className='w-full sm:w-[80%] mx-auto'>
					<h2 className='text-3xl mb-3 font-medium'>Solution</h2>
					<p className='text-lg sm:text-xl'>{project.solution}</p>
				</div>
			</section>
			<div className='grid grid-cols-2 gap-4'>
				<Link
					href={project.live}
					target='_blank'
					className='gap-2 border-primary flex'
					rel='noopener noreferrer'>
					<span>Live</span>
					<HiLink size='1.5rem' />
				</Link>
				<Link
					className='gap-2 border-primary flex'
					href={project.github}
					target='_blank'
					rel='noopener noreferrer'>
					<span> GitHub</span>{" "}
					<DiGithubBadge className='shrink-0' size='1.5rem' />
				</Link>
			</div>
			<ProjectNavigation project={project} projectLength={maxLength} />
		</Container>
	);
}

export default page;
