import { StyleSheet, View } from 'react-native'
import { WrapperParams } from '../types'

interface ContentParams extends WrapperParams {}

export default function Content({
	children,
} : ContentParams) {
	return <View style={styles.container}>
		{children}
	</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 30,
		paddingHorizontal: '1.5rem',
	},
})