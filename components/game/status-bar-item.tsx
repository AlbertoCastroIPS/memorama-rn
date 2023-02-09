import { StyleSheet, View } from 'react-native'
import { WrapperParams } from '../types'

interface StatusBarItemParams extends WrapperParams {}

export default function StatusBarItem({
	children,
} : StatusBarItemParams) {
	return <View style={styles.container}>
		{children}
	</View>
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 10,
	},
})