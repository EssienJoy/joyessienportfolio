"use client";

import { IoIosArrowDown } from "react-icons/io";
import Button from "../_ui/Button";

function ToggleOtherProjects({ setExpanded, expanded }) {
	function toggleProjects() {
		setExpanded((prev) => !prev);
	}
	return (
		<div className='flex items-center justify-between w-full mb-10'>
			<h2 className='text-xl sm:text-4xl font-semibold  '>Other Projects</h2>

			<Button
				className='flex items-center gap-2 border text-md sm:text-lg border-primary-black py-2 px-3 rounded-xl bg-black text-primary-grey '
				onClick={toggleProjects}>
				<IoIosArrowDown
					className={`transition-transform ${expanded ? "rotate-180" : ""}`}
				/>
				<span>{expanded ? "Show Less" : "Show More"}</span>
			</Button>
		</div>
	);
}

export default ToggleOtherProjects;
