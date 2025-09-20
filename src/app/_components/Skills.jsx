"use client";

import { useEffect, useRef, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import { skills } from "@/app/_data/skills";
import Button from "@/app/_ui/Button";

function Skills() {
	const [skillPosition, setSkillPosition] = useState(0);
	const [fade, setFade] = useState(true);
	const [autoSlide, setAutoSlide] = useState(true);
	const skillsRef = useRef(null);

	const maxLength = skills.length;

	function decreaseSkillPosition() {
		if (skillPosition === 0) return;
		setAutoSlide(false);
		setFade(false);
		setTimeout(() => {
			setSkillPosition((pos) => pos - 1);
			setFade(true);
		}, 200);
	}

	function increaseSkillPosition() {
		if (skillPosition === maxLength - 1) {
			setSkillPosition(0);
			return;
		}
		setAutoSlide(false);
		setFade(false);
		setTimeout(() => {
			setSkillPosition((pos) => pos + 1);
			setFade(true);
		}, 200);
	}

	useEffect(() => {
		if (!autoSlide) return;
		const timer = setTimeout(() => {
			if (skillPosition < maxLength - 1) {
				setFade(false);
				setTimeout(() => {
					setSkillPosition((pos) => pos + 1);
					setFade(true);
				}, 200);
			}
		}, 3000);
		return () => clearTimeout(timer);
	}, [skillPosition, maxLength]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					setAutoSlide(true);
				} else {
					setAutoSlide(false);
				}
			},
			{ threshold: 0.4 }
		);

		if (skillsRef.current) observer.observe(skillsRef.current);

		return () => {
			if (skillsRef.current) observer.unobserve(skillsRef.current);
		};
	}, []);

	const Icon = skills[skillPosition].icon;

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
