"use client";
import { Input as AriaInput } from "react-aria-components";

function Input({ type, name, placeholder, id }) {
	return (
		<AriaInput
			className='w-full px-4 py-3 text-lg rounded-xl border-primary-black border-solid border focus:outline-none focus:ring-2 focus:ring-primary-grey'
			type={type}
			name={name}
			placeholder={placeholder}
			id={id}
			required
		/>
	);
}

export default Input;
