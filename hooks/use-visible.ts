import { useState } from 'react'

type UseVisibleReturnType = [boolean, ()=>void, ()=>void]

export default function useVisible(visible : boolean) : UseVisibleReturnType {
	const [isVisible, setIsVisible] = useState(visible)

	function show() {
		setIsVisible(true)
	}

	function hide() {
		setIsVisible(false)
	}

	return [isVisible, show, hide]
}