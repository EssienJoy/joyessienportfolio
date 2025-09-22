"use client";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Button from "@/app/_ui/Button";
import { skills } from "../_data/skills";
import { useSkills } from "../hooks/useSkills";

function Skills() {
	const {
		decreaseSkillPosition,
		increaseSkillPosition,
		Icon,
		maxLength,
		skillsRef,
		fade,
		skillPosition,
	} = useSkills();

	return (
		<section
			ref={skillsRef}
			id='skills'
			className='px-[var(--spacing-padding-inline)] py-10 my-10 text-primary-black'>
			<h2 className=' text-3xl sm:text-4xl font-medium text-center  my-5'>
				Skills
			</h2>

			<div
				className={`bg-primary-black text-primary-grey flex flex-col gap-6 w-40 h-40 mx-auto py-3 my-10 border border-solid border-primary-grey items-center justify-center overflow-hidden transition-all duration-500 ${
					fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
				}`}>
				<p className='font-bold'>{skills[skillPosition].skill}</p>
				{Icon && (
					<Icon
						size='3rem'
						style={{ color: skills[skillPosition].color }}
						className='transition-transform duration-500 group-hover:scale-110'
					/>
				)}
			</div>

			<div className='flex gap-6 items-center justify-center  mx-auto '>
				<Button
					className='py-2 px-5 rounded-xl flex items-center gap-2 bg-primary-black text-primary-grey'
					onClick={decreaseSkillPosition}>
					<MdArrowBackIosNew size='1rem' className='shrink-0' />
					<span>Prev</span>
				</Button>

				<p className='text-center text-md font-medium'>
					{skillPosition + 1} of {maxLength} skills
				</p>

				<Button
					className='py-2 px-5 rounded-xl flex items-center gap-2 bg-primary-black text-primary-grey'
					onClick={increaseSkillPosition}>
					<span>Next</span>
					<MdArrowForwardIos size='1rem' className='shrink-0' />
				</Button>
			</div>
		</section>
	);
}

export default Skills;
