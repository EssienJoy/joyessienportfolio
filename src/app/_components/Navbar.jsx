import Link from "next/link";
import { navLink } from "../_constants/data";

function Navbar() {
	return (
		<ul className=' items-center justify-center font-medium   gap-6 mx-auto hidden sm:flex text-lg text-white'>
			{navLink.map((link) => (
				<li className='' key={link.text}>
					<Link
						href={link.href}
						target={link.text.startsWith("Cv") ? "_blank" : ""}
						rel={link.text.startsWith("Cv") ? `$noopener noreferrer` : ``}>
						{link.text}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Navbar;
