import { Card } from './card'

export default function foundPairs(cards : Card[]) : number {
	const cardsWithFoundPair = cards.filter((card) => card.isPairFound).length

	return cardsWithFoundPair / 2
}