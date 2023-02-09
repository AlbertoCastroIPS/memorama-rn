import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Card as CardEntity } from '../../utils'

interface CardParams {
	card : CardEntity
	onPress : ()=>void
}

function FaceDownCard({
	onPress: onpress,
} : CardParams) {
	return <Pressable onPress={onpress}>
		<View style={styles.faceDownCard}></View>
	</Pressable>
}

function FaceUpCard({
	card,
} : CardParams) {
	return <View style={styles.faceUpCard}>
		{card.faceComponent(undefined)}
	</View>
}

export default function Card(params : CardParams) {
	const {card} = params

	const isCardFaceDown = card.isFaceDown

	return isCardFaceDown ?
		<FaceDownCard {...params} /> :
		<FaceUpCard {...params} />
}

const baseStyles = StyleSheet.create({
	card: {
		width: '3rem',
		height: '4rem',
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#efefee',
	},
})

const styles = StyleSheet.create({
	faceDownCard: {
		...baseStyles.card,
	},
	faceUpCard: {
		...baseStyles.card,
	},
})