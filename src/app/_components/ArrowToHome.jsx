import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";

function ArrowToHome() {
	return (
		<aside>
			<Link
				className='fixed bottom-5  z-50  right-2 text-[#ffffff]'
				href='#home'>
				<FaArrowCircleUp size='2rem' />
			</Link>
		</aside>
	);
}

export default ArrowToHome;
