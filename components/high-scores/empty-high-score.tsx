import { Text, View } from 'react-native'
import { highScoreStyles } from './high-score-style'

interface EmptyHighScoreParams {
	place : number
}

export default function EmptyHighScore({
	place,
} : EmptyHighScoreParams) {
	return <View style={highScoreStyles.container}>
		<Text>
			{place}.
		</Text>
		<Text>
			Score: --
		</Text>
		<Text>
			Time: --:--
		</Text>
		<Text>
			Moves: --
		</Text>
	</View>
}