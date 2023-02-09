import { Text } from 'react-native'
import StatusBarItem from './status-bar-item'

export interface FoundPairsParams {
	totalPairs : number
	foundPairs : number
}

export default function FoundPairs({
	totalPairs,
	foundPairs,
} : FoundPairsParams) {
	return <StatusBarItem>
		<Text>
			{foundPairs} / {totalPairs}
		</Text>
	</StatusBarItem>
}