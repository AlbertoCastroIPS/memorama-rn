import { Card, CardDefaults } from './card'
import {
	Anchor,
	AndroidAlt,
	Ankh,
	Apple,
	Award,
	BabyCarriage,
	Backpack,
	Bag,
	Basketball,
	Bell,
	Bolt,
	BookAlt,
	Box,
	BracketsCurly,
	Brightness,
	BrushAlt,
	Bug,
	Camera,
	Cloud,
	FootballAmerican,
	Heart,
} from 'react-native-unicons'

export default function generateShuffledCards() : Card[] {
	const unshuffledCards = generateCards()

	return shuffleCards(unshuffledCards)
}

function generateCards() : Card[] {
	const cardFaces = [
		Anchor,
		AndroidAlt,
		Ankh,
		Apple,
		Award,
		BabyCarriage,
		Backpack,
		Bag,
		Basketball,
		Bell,
		Bolt,
		BookAlt,
		Box,
		BracketsCurly,
		Brightness,
		BrushAlt,
		Bug,
		Camera,
		Cloud,
		FootballAmerican,
		Heart,
	]

	let cards = cardFaces.slice(0, 2).map((cardFace, index) : Card => {
		return {
			...CardDefaults,
			face: `${index}`,
			faceComponent: cardFace,
		}
	})

	cards = [...cards, ...cards]

	return cards
}

function generateRandomPositions(numberOfElements : number) : number[] {
	const positions : number[] = []

	for (let index = numberOfElements - 1; index > 0; index--) {
		const randomPosition = Math.floor(Math.random() * index)
		positions[index] = randomPosition
	}

	console.log(positions)
	return positions
}

function shuffleCards(unshufledCards : Card[]) : Card[] {
	const cards = [...unshufledCards]

	for (let index = cards.length - 1; index > 0; index--) {
		const randomPosition = Math.floor(Math.random() * index)

		const temporalCard = cards[randomPosition]
		cards[randomPosition] = cards[index]
		cards[index] = temporalCard
	}

	return cards
}