import Link from "next/link";
import { navLink } from "../_constants/data";

function Navbar() {
	return (
		<ul className=' items-center justify-center font-medium   gap-5 mx-auto text-lg hidden sm:flex'>
			{navLink.map((link) => (
				<li key={link.text}>
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
