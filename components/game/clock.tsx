import { useState, useEffect } from 'react'
import { Clock as ClockIcon } from 'react-native-unicons'
import StatusBarItem from './status-bar-item'
import Time from './time'

export interface ClockParams {
	onTimeChanged: (time : number) => void
	paused : boolean
}

export default function Clock({
	onTimeChanged,
	paused,
} : ClockParams) {
	const [elapsedSeconds, setElapsedSeconds] = useState(0)

	function increaseElapsedSeconds() {
		const newSeconds = elapsedSeconds + 1
		setElapsedSeconds(newSeconds)
		onTimeChanged(newSeconds)
	}

	useEffect(() => {
		if (paused) {
			return
		}

		const timeoutId = setTimeout(increaseElapsedSeconds, 1000)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [elapsedSeconds, paused])

	return <StatusBarItem>
		<ClockIcon />
		<Time timeInSeconds={elapsedSeconds} />
	</StatusBarItem>
}