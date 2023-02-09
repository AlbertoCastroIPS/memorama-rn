import { StyleSheet, Text, View } from 'react-native'
import { Score as ScoreModel } from '../../utils'
import { MovementCount, Score, Time } from '../game'
import { highScoreStyles } from './high-score-style'

interface HighScoreParams {
	score : ScoreModel
	place : number
}

export default function HighScore({
	score,
	place,
} : HighScoreParams) {
	return <View style={highScoreStyles.container}>
		<Text>{place}. </Text>
		<Score score={score.score} />
		<Time prefix='Time ' timeInSeconds={score.timeInSeconds} />
		<MovementCount movementCount={score.moves} />
	</View>
}