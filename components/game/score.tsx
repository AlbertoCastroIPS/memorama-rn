import { Text, } from 'react-native'
import StatusBarItem from './status-bar-item'

export interface ScoreParams {
	score : number
}

export default function Score({
	score
} : ScoreParams) {
	return <StatusBarItem>
		<Text>
			Score: {score}
		</Text>
	</StatusBarItem>
}