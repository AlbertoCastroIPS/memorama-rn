import { View, StyleSheet } from 'react-native'
import { ArrowLeft, Info } from 'react-native-unicons'

export default function TopBar({}) {
	return <View style={styles.container}>
		<ArrowLeft />
		<Info />
	</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		padding: '1.5rem',
	}
})