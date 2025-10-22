"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

import Button from "@/app/_ui/Button";

function ProjectArrowBack() {
	const router = useRouter();
	return (
		<Button className='p-1' onClick={() => router.back()}>
			<IoIosArrowRoundBack size='2rem' />
		</Button>
	);
}

export default ProjectArrowBack;
