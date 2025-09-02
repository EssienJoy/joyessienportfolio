"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import Button from "@/app/_ui/Button";

const aboutMeFaq = [
	{
		id: 1,
		question: "Who am I?",
		answer:
			"Hi, I’m Essien Joy  a self-taught, entry-level frontend web developer.",
	},
	{
		id: 2,
		question: "How long have I been in tech?",
		answer:
			"I’ve been on my tech journey for about a year, and I’ve been documenting it online for 340 days.",
	},
	{
		id: 3,
		question: "What do I do?",
		answer:
			"I design and develop responsive, modern web interfaces using HTML, CSS, JavaScript, Tailwind CSS, Sass, Supabase, Git, GitHub, React, and Next.js.",
	},
	{
		id: 4,
		question: "What inspires me?",
		answer:
			"I’m inspired by solving problems with code and creating sleek, interactive designs that people enjoy using.",
	},
	{
		id: 5,
		question: "What am I learning?",
		answer:
			"I’m currently diving deeper into React and exploring Next.js for full-stack development.",
	},
	{
		id: 6,
		question: "What’s my goal?",
		answer:
			"My goal is to grow into a well-rounded frontend engineer and contribute to impactful projects that make a difference.",
	},
	{
		id: 7,
		question: "What’s my personality outside tech?",
		answer:
			"Outside of tech, I enjoy creating content — which is what inspired me to share my journey online. I also have a passion for fashion and makeup.",
	},
];

function AboutMeFaq() {
	const [openId, setOpenId] = useState(null);

	function handleOpen(faqId) {
		setOpenId((prevId) => (prevId === faqId ? null : faqId));
	}

	return (
		<section className='grid gap-10 mt-5 bg-primary-black text-primary-grey  py-6 px-4'>
			{aboutMeFaq.map((faq) => (
				<div
					className='border-b-primary-grey border-b rounded-2xl pl-4'
					key={faq.id}>
					<h2 className='text-lg sm:text-2xl font-medium pb-3 flex gap-3 items-center'>
						<Button className='p-3' onClick={() => handleOpen(faq.id)}>
							{openId === faq.id ? (
								<FaTimes size='1.5rem' />
							) : (
								<FaPlus size='1.5rem' />
							)}
						</Button>
						<span>{faq.question}</span>
					</h2>

					{openId === faq.id && (
						<p className='text-sm sm:text-lg pb-4'>{faq.answer}</p>
					)}
				</div>
			))}
		</section>
	);
}

export default AboutMeFaq;
