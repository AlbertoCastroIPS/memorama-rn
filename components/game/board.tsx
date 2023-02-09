import { StyleSheet, View } from 'react-native'
import { Card } from '../../utils'
import CardComponent from './card'

interface BoardParams {
	cards : Card[]
	flipCard : (cardIndex:number)=>void
}

export default function Board({
	cards,
	flipCard,
} : BoardParams) {

	function renderCards() {
		return cards.map((card, index) => {
			return <CardComponent
				key={index}
				card={card}
				onPress={() => flipCard(index)}
			/>
		})
	}

	return <View style={styles.container}>
		{renderCards()}
	</View>
}

const styles = StyleSheet.create({
	container: {
		marginTop: '2rem',
		width: '100%',
		height: '100',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		rowGap: 10,
		columnGap: 10,
	}
})