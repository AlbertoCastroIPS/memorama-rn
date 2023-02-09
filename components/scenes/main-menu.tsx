import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { highScoresContext } from '../../contexts'
import { HighScores } from '../high-scores'
import { TextButton } from '../utils'
import ScreenParams from './screen-params'

export default function MainMenu({
	navigation,
} : ScreenParams) {
	const {highScores, maxHighScoresNumber} = useContext(highScoresContext)

	function play() {
		navigation.push('game')
	}

	return <View style={styles.container}>
		<TextButton
			text='Play'
			onPress={play}
			style={styles.textButton}
		/>
		<HighScores
			highScores={highScores}
			maxHighScores={maxHighScoresNumber}
		/>
	</View>
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 20,
	},
	textButton: {
		// @ts-ignore
		fontSize: '2.25rem',
	}
})