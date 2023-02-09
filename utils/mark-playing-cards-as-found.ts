import { Card } from './card'
import { PlayingCard } from './playing-card'

interface MarkPlayingCardsAsFoundParams {
	cards : Card[]
	playingCards : PlayingCard[]
}

export default function markPlayingCardsAsFound({
	cards,
	playingCards,
} : MarkPlayingCardsAsFoundParams) : Card[] {
	const newCards = [...cards]

	playingCards.forEach((playingCard) => {
		newCards[playingCard.index] = {
			...playingCard.card,
			isPairFound: true,
		}
	})

	return newCards
}