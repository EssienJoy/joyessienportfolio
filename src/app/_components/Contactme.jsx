import ContactMeForm from "@/app/_components/ContactMeForm";

function ContactMe() {
	return (
		<section id='contactme' className='py-10 px-3 '>
			<h2 className='text-3xl sm:text-4xl text-center font-medium mb-4'>
				Contact Me
			</h2>
			<p className='text-lg sm:text-2xl text-center  mb-10'>
				Have a project in mind? Let’s collaborate and bring your ideas to life.
			</p>
			<ContactMeForm />
		</section>
	);
}

export default ContactMe;
