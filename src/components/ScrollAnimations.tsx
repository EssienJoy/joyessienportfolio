"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function ScrollAnimations() {
	useEffect(() => {
		AOS.init({
			duration: 700,
			easing: "ease-out-cubic",
			once: true,
			offset: 60,
		})
		AOS.refresh()
	}, [])

	return null
}

export default ScrollAnimations