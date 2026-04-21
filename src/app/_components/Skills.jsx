import { frontend, backend, devTools } from "../_constants/data";
import { VscArrowSwap } from "react-icons/vsc";

const stack = [
	{
		text: "Frontend",
		skills: frontend,
	},
	{
		text: "Backend",
		skills: backend,
	},
	{
		text: "Development and Tools",
		skills: devTools,
	},
];

function Skills() {
	return (
		<section
			id='skills'
			className=' text-primary-black dark:text-primary-white mt-5'>
			<h2 className='text-2xl font-bold mb-6 flex items-center gap-3'>
				<VscArrowSwap />
				<span>Tech Stack</span>
			</h2>

			<section className='space-y-5'>
				{stack.map((s) => {
					return (
						<div key={s.text} className='my-5'>
							<h2 className='text-xl font-bold mb-3'>{s.text}</h2>
							<ul className='flex flex-wrap gap-3 '>
								{s.skills.map((skill) => {
									const IconComponent = skill.icon;
									return (
										<li
											key={skill.skill}
											className=' bg-primary-black dark:bg-primary  flex  items-center  gap-3  p-3  rounded-md'>
											<p className='font-bold text-primary-white text-sm'>
												{skill.skill}
											</p>
											{IconComponent && (
												<IconComponent
													// size='2rem'
													style={{ color: skill.color }}
												/>
											)}
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</section>
		</section>
	);
}

export default Skills;
