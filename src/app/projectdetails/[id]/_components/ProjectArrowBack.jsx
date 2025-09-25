"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

import Button from "@/app/_ui/Button";

function ProjectArrowBack({ id }) {
	const router = useRouter();
	return (
		<Button
			className='p-1'
			onClick={() => {
				if (id === 1) {
					router.back();
				} else {
					router.push("/#projects");
				}
			}}>
			<IoIosArrowRoundBack size='2rem' />
		</Button>
	);
}

export default ProjectArrowBack;
