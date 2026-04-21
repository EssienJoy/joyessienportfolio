import { PiSuitcaseSimple } from "react-icons/pi";

const experience = [
	{
		year: "2025",
		project: "Campus Cart",
		skill: "Frontend Developer Internship",
		stack: ["Next js", "Type Script", "Redux", "Tailwind"],
	},
	{
		year: "2025 - 2026",
		project: "Plan Pal",
		skill: "Fullstack Development",
		stack: ["Node js", "Express js", "React", "Mongo db", "Mongoose"],
	},
];

function Experience() {
	return (
		<section className='sm:w-300 px-5 '>
			<h2 className='text-2xl flex items-center gap-3 font-bold mb-5  '>
				<PiSuitcaseSimple /> <span>Experience</span>
			</h2>

			<ul>
				{experience.map((e) => {
					return (
						<li
							key={e.project}
							className='border-t-primary-black border-b-primary-black dark:border-t-[#342752] dark:border-b-[#342752]   border-t border-b border-solid '>
							<section className=' flex flex-col px-3  py-6 items-start'>
								<p className='text-sm'>{e.year}</p>

								<div className='grow flex flex-col gap-2'>
									<h2 className='font-bold text-xl'>{e.project}</h2>
									<p className='font-semibold text-lg'>{e.skill}</p>
									<ul className='flex flex-wrap text-xs gap-3 uppercase '>
										{e.stack.map((s) => (
											<li key={s}>{s}</li>
										))}
									</ul>
								</div>
							</section>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default Experience;
