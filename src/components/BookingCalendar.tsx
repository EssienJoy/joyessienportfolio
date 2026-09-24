"use client"

const CAL_COM_LINK =
	"https://cal.com/book-a-software-development-call?embed=true&embedType=inline&theme=light"

function BookingCalendar() {
	return (
		<iframe
			src={CAL_COM_LINK}
			title="Schedule a call"
			loading="lazy"
			className="h-[700px] w-full rounded-2xl
			 border border-border bg-surface"
		/>
	)
}

export default BookingCalendar