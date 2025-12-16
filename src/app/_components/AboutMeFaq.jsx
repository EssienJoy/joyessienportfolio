"use client";

import { useState } from "react";

import Button from "@/app/_components/_ui/Button";
import { FaTimes } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { aboutMeFaq } from "../_constants/data";

function AboutMeFaq() {
	const [openId, setOpenId] = useState(null);

	function handleOpen(faqId) {
		setOpenId((prevId) => (prevId === faqId ? null : faqId));
	}

	return (
		<section className='grid gap-10 mt-5   py-6 '>
			{aboutMeFaq.map((faq) => (
				<div
					className='border-b-primary-black dark:border-b-primary border-b rounded-2xl pl-4'
					key={faq.id}>
					<div
						className='flex justify-between  items-center cursor-pointer'
						role='button'
						onClick={() => handleOpen(faq.id)}>
						<h2 className='text-lg sm:text-2xl font-medium pb-3 '>
							{faq.question}
						</h2>

						<Button
							className='p-3 text-primary '
							onClick={() => handleOpen(faq.id)}>
							{openId === faq.id ? (
								<FaTimes size='1.5rem' className='shrink-0' />
							) : (
								<TiPlus size='1.5rem' className='shrink-0' />
							)}
						</Button>
					</div>

					{openId === faq.id && (
						<p className='text-sm sm:text-lg pb-4'>{faq.answer}</p>
					)}
				</div>
			))}
		</section>
	);
}

export default AboutMeFaq;
