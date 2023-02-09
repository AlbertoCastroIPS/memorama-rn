import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar } from '../utils'

interface ExtraPointsBarParams {
	onExtraPointsChanged : (extraPoints : number) => void
	reset : boolean
	paused : boolean
}

export default function ExtraPointsBar({
	onExtraPointsChanged,
	reset,
	paused,
} : ExtraPointsBarParams) {
	const maxPoints = 250
	const [points, setPoints] = useState(maxPoints)
	const timeForMaxPointsInSeconds = 7.5
	const decreasingPoints = 1
	const timeout = (timeForMaxPointsInSeconds * 1000) / (maxPoints / decreasingPoints)

	function decreasePoints() {
		const newPoints = points - decreasingPoints
		setPoints(newPoints)
		onExtraPointsChanged(newPoints)
	}

	let timeoutId = 0
	useEffect(() => {
		const needToSetTimeout = points > 0 && !paused
		if (needToSetTimeout) {
			timeoutId = setTimeout(decreasePoints, timeout)
		}

		return () => {
			clearTimeout(timeoutId)
		}
	}, [points, paused])

	useEffect(() => {
		if (reset) {
			clearTimeout(timeoutId)
			setPoints(maxPoints)
		}
	}, [reset])

	return <View style={styles.container}>
		<Text>Extra points: {points}</Text>
		<ProgressBar
			maxValue={maxPoints}
			value={points}
		/>
	</View>
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		rowGap: 10,
		marginVertical: '1rem',
	}
})