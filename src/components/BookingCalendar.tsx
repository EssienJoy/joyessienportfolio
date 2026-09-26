"use client"

import Cal from "@calcom/embed-react"

function BookingCalendar() {
	return (
		<Cal
			calLink="essien-joy-rba5dj/book-a-web-development-call"
			style={{ width: "100%", height: "100%", overflow: "scroll" }}
			config={{ layout: "month_view" }}
		/>
	)
}

export default BookingCalendar
