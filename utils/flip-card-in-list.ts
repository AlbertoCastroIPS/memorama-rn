import { Card } from './card'

interface FlipCardInListParams {
	cards : Card[]
	cardIndex : number
	isFaceDown : boolean
}

export default function flipCardInList({
	cards,
	cardIndex,
	isFaceDown,
} : FlipCardInListParams) : Card[] {
	const newCards = [...cards]

	newCards[cardIndex] = {...newCards[cardIndex], isFaceDown: isFaceDown}

	return newCards
}