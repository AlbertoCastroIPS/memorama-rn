import { View, StyleSheet } from 'react-native'
import { WrapperParams } from '../types'
import Content from './content'
import TopBar from './top-bar'

interface MainContainerParams extends WrapperParams {
}

export default function MainContainer({
	children,
} : MainContainerParams) {
	return <View style={styles.container}>
		<TopBar />
		<Content>
			{children}
		</Content>
	</View>
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		width: '100%',
	},
})