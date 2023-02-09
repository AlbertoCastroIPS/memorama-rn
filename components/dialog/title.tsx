import { StyleSheet, Text } from 'react-native'

export interface TitleParams {
	title? : string
}

export default function Title({
	title,
} : TitleParams) {
	return <Text style={styles.text}>
		{title}
	</Text>
}

const styles = StyleSheet.create({
	text: {
		// @ts-ignore font size can be expressed in rems too but React Native types :)
		fontSize: '1.5rem',
	}
})