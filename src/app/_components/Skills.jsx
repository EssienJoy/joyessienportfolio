import { skills } from "../_constants/data";
import Container from "./Container";

function Skills() {
	return (
		<Container
			id='skills'
			className=' my-25 text-primary-black dark:text-primary-white'>
			<h2 className='text-3xl sm:text-5xl font-bold mb-6'>Skills</h2>

			<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-10'>
				{skills.map((skill) => {
					const IconComponent = skill.icon;
					return (
						<li
							key={skill.skill}
							className='hover:scale-105 cursor-pointer border-primary-black dark:border-primary border border-solid text-primary-black dark:text-primary-white flex  items-center w-full gap-3  px-6 py-3  rounded-2xl'>
							<p className='font-bold'>{skill.skill}</p>
							{IconComponent && (
								<IconComponent
									size='2rem'
									style={{ color: skill.color }}
									className='transition-transform duration-500 group-hover:scale-110 shrink-0'
								/>
							)}
						</li>
					);
				})}
			</ul>
		</Container>
	);
}

export default Skills;
