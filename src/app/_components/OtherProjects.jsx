import Image from "next/image";
import Link from "next/link";
import { otherProjects } from "../_data/projectDetails";

export default function OtherProjects() {
	const items = [...otherProjects, ...otherProjects];

	return (
		<section className='my-10 '>
			<h2 className='text-3xl sm:text-4xl font-semibold text-center mb-10'>
				Other Projects
			</h2>

			<div className=' py-3 relative w-full overflow-hidden slider'>
				<ul className='list flex items-stretch gap-5 will-change-transform w-full'>
					{items.map((project, i) => (
						<li
							key={i}
							className='slide flex-0 shrink-0 w-full sm:w-[70%] lg:w-1/2'
							aria-hidden={otherProjects.length > i}>
							<div className=' bg-[#cbcbcb] backdrop-blur-[2px] shadow-3xl rounded-tl-3xl rounded-tr-3xl p-4 sm:p-8'>
								<Link
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'>
									<figure className='relative h-[200px] sm:h-[250px]'>
										<Image
											src={project.image}
											quality={80}
											fill
											className='object-cover object-top rounded-3xl'
											alt={`${project.title} screenshot`}
											placeholder='blur'
										/>
									</figure>
								</Link>
							</div>

							<div className='grid grid-cols-2 gap-3 pt-5 p-5 border-[#cbcbcb]  border-solid border-b border-l border-r rounded-bl-3xl rounded-br-3xl shadow-2xl'>
								{project.stack.map((stack) => (
									<p className='sm:w-full border-primary-black border border-solid p-2 bg-black text-primary-grey'>
										{stack}
									</p>
								))}
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
