import { View } from 'react-native'
import { WrapperParams } from '../types'

export interface VisibleParams extends WrapperParams {
	visible : boolean
}

export default function Visible({
	visible,
	children,
} : VisibleParams) {
	return <View>
		{
			visible ?
				children :
				null
		}
	</View>
}