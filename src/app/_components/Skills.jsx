"use client";

import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import { skills } from "@/app/_data/skills";
import Button from "@/app/_ui/Button";

function Skills() {
	const [skillPosition, setSkillPosition] = useState(0);

	const maxLength = skills.length;

	function decreaseSkillPosition() {
		if (skillPosition === 0) return;
		setSkillPosition((pos) => pos - 1);
	}
	function increaseSkillPosition() {
		if (skillPosition === maxLength - 1) return;
		setSkillPosition((pos) => pos + 1);
	}

	return (
		<section
			id='skills'
			className='flex flex-col justify-around  px-[var(--spacing-padding-inline)] h-[50dvh] py-5 my-10 bg-primary-black text-primary-grey'>
			<h2 className='text-3xl sm:text-4xl font-medium text-center'>
				My Skills
			</h2>

			<section className='flex justify-center gap-6  my-6 items-center'>
				<Button className='p-2' onClick={decreaseSkillPosition}>
					<MdArrowBackIosNew
						size='1rem'
						className='shrink-0 text-primary-grey'
					/>
				</Button>

				<div className=' flex flex-col w-30 h-30 p-4  border border-solid border-primary-grey items-center justify-center overflow-hidden'>
					<p>{skills[skillPosition]}</p>
				</div>

				<Button className='p-2' onClick={increaseSkillPosition}>
					<MdArrowForwardIos
						size='1rem'
						className='shrink-0 text-primary-grey'
					/>
				</Button>
			</section>

			<p className='text-center text-sm font-medium'>
				{skillPosition + 1} of {maxLength} skills
			</p>
		</section>
	);
}

export default Skills;
