import { ReactNode, ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Score } from '../../utils'
import EmptyHighScore from './empty-high-score'
import HighScore from './high-score'

interface HighScoresParams {
	highScores : Score[]
	maxHighScores : number
}

export default function HighScores({
	highScores,
	maxHighScores,
} : HighScoresParams) {
	function renderHighScores() {
		const highScoresComponents = highScores.map((highScore, index) => {
			return <HighScore
				score={highScore}
				place={index+1}
				key={index}
			/>
		})

		highScoresComponents.push(...renderEmptyHighScores(highScoresComponents.length+1))

		return highScoresComponents
	}

	function renderEmptyHighScores(startingPlace : number) {
		const emptyHighScores : ReactElement[] = []

		for (let place = startingPlace; place <= maxHighScores; ++place) {
			emptyHighScores.push(<EmptyHighScore
				place={place}
				key={place}
			/>)
		}

		return emptyHighScores
	}

	return <View style={styles.container}>
		<Text style={styles.title}>High scores:</Text>
		{renderHighScores()}
	</View>
}

const styles = StyleSheet.create({
	container: {
		padding: '1rem',
	},
	title: {
		marginBottom: '1rem',
	},
})