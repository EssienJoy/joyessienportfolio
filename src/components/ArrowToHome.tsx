import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

function ArrowToHome() {
	return (
		<Link href='/' className='p-1'>
			<IoIosArrowRoundBack
				size='2rem'
				className='text-primary-black dark:text-primary-white'
			/>
		</Link>
	);
}

export default ArrowToHome;
