import { skills } from "../_data/skills";

function Skills() {
	return (
		<section
			id='skills'
			className='px-[var(--spacing-padding-inline)]  my-5 text-primary-black dark:text-primary-white'>
			<h2 className=' text-3xl sm:text-4xl font-medium text-center  mb-10'>
				Skills
			</h2>

			<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 '>
				{skills.map((skill, index) => {
					const IconComponent = skill.icon;
					return (
						<li
							key={index}
							className='bg-primary-black dark:bg-primary-white text-primary-grey dark:text-primary-black flex flex-col items-center w-full gap-6 h-40 mx-auto py-3  justify-center shadow-lg rounded-lg'>
							<p className='font-bold'>{skill.skill}</p>
							{IconComponent && (
								<IconComponent
									size='3rem'
									style={{ color: skill.color }}
									className='transition-transform duration-500 group-hover:scale-110'
								/>
							)}
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default Skills;
