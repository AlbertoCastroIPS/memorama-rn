import { Text } from "react-native"

export interface TimeParams {
	timeInSeconds : number
	prefix? : string
}

export default function Time({
	timeInSeconds,
	prefix,
} : TimeParams) {
	function formatSeconds() : string {
		const minutes = Math.floor(timeInSeconds / 60)
		const seconds = timeInSeconds - minutes * 60

		const minutesString = minutes > 9 ? minutes : `0${minutes}`
		const secondsString = seconds > 9 ? seconds : `0${seconds}`

		return `${minutesString}:${secondsString}`
	}

	return <Text>
		{prefix}{formatSeconds()}
	</Text>
}