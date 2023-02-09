import { ReactElement, ReactNode } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

export interface IconButtonParams {
	icon : ReactElement,
	onPress : ()=>void,
}

export default function IconButton({
	icon,
	onPress,
} : IconButtonParams) {
	return <Pressable onPress={onPress}>
		<View style={styles.container}>
			{icon}
		</View>
	</Pressable>
}

const styles = StyleSheet.create({
	container: {
		width: 48,
		height: 48,
		color: 'black',
		// @ts-ignore
		borderRadius: '50%',
		backgroundColor: '#efefee',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
})