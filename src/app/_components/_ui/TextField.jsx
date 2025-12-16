"use client";
import { TextField as AriaTextField } from "react-aria-components";

function TextField({ children }) {
	return <AriaTextField className='grid gap-3'>{children}</AriaTextField>;
}

export default TextField;
