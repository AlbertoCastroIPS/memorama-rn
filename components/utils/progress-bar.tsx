import { StyleSheet, View } from 'react-native'

interface ProgressBarParams {
	maxValue : number
	value : number
}

export default function ProgressBar({
	maxValue,
	value,
} : ProgressBarParams) {
	const barStyle = {
		...styles.bar,
		width: `${calculateBarPercentage()}%`,
	}

	function calculateBarPercentage() : number {
		const percentage = value / maxValue * 100
		return percentage
	}

	return <View style={styles.container}>
		<View style={styles.background}></View>
		<View style={barStyle}></View>
	</View>
}

const baseStyles = StyleSheet.create({
	bar: {
		width: '100%',
		height: 10,
		borderRadius: 5,
	},
})

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	background: {
		...baseStyles.bar,
		backgroundColor: '#efefee',
	},
	bar: {
		...baseStyles.bar,
		backgroundColor: '#4e4e52',
		position: 'absolute',
		top: 0,
		left: 0,
	},
})