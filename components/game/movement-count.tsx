import { Text } from 'react-native'
import StatusBarItem from './status-bar-item'

export interface MovementCountParams {
	movementCount : number
}

export default function MovementCount({
	movementCount,
} : MovementCountParams) {
	return <StatusBarItem>
		<Text>
			Moves: {movementCount}
		</Text>
	</StatusBarItem>
}