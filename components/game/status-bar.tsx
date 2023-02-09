import { StyleSheet, View } from 'react-native'
import Clock, { ClockParams } from './clock'
import FoundPairs, { FoundPairsParams } from './found-pairs'
import MovementCount, { MovementCountParams } from './movement-count'
import Score, { ScoreParams } from './score'

interface StatusBarParams extends
	ScoreParams,
	FoundPairsParams,
	MovementCountParams,
	ClockParams
{
}

export default function StatusBar(params : StatusBarParams) {
	return <View style={styles.container}>
		<MovementCount {...params} />
		<FoundPairs {...params} />
		<Score {...params} />
		<Clock {...params} />
	</View>
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: '1rem',
		width: '100%',
	},
})