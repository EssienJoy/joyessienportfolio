"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";

import Input from "@/app/_ui/Input";
import Label from "@/app/_ui/Label";
import TextField from "@/app/_ui/TextField";

function ContactMeForm() {
	const router = useRouter();
	const [state, handleSubmit] = useForm("myzdpnng");

	if (state.succeeded) {
		router.push("/thankyou");
	}

	return (
		<form className='grid gap-6 text-left text-xl' onSubmit={handleSubmit}>
			<TextField>
				<Label text='fullName'>Full Name:</Label>
				<Input
					type='text'
					placeholder='fullname'
					name='fullName'
					id='fullName'
				/>
				<ValidationError
					prefix='Message'
					field='fullname'
					errors={state.errors}
				/>
			</TextField>

			<TextField>
				<Label text='email'>Email:</Label>
				<Input type='email' id='email' name='email' placeholder=' email' />
				<ValidationError prefix='Message' field='email' errors={state.errors} />
			</TextField>

			<TextField>
				<Label text='subject'>Subject:</Label>
				<Input type='text' placeholder='Subject' name='subject' id='subject' />
				<ValidationError
					prefix='Message'
					field='subject'
					errors={state.errors}
				/>
			</TextField>

			<TextField>
				<label className='text-md sm:text-xl font-medium mb-2' text='message'>
					Message:
				</label>
				<textarea
					required
					id='message'
					name='message'
					rows='5'
					placeholder=' message'
					className='w-full px-4 py-3 rounded-xl border-primary-black border-solid border focus:outline-none focus:ring-2 focus:ring-primary-grey'></textarea>
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
			</TextField>

			<button
				type='submit'
				className='text-sm sm:text-lg w-full cursor-pointer bg-primary-black text-primary-grey font-medium py-5  rounded-xl'
				disabled={state.submitting}>
				{state.submitting ? "Submitting..." : "Submit"}
			</button>
			<ValidationError errors={state.errors} />
		</form>
	);
}

export default ContactMeForm;
