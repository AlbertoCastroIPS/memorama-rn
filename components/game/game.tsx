import { useState, useEffect } from 'react'
import { View } from 'react-native'
import Board from './board'
import StatusBar from './status-bar'
import {
	flipCardInList,
	foundPairs,
	generateShuffledCards,
	markPlayingCardsAsFound,
	PlayingCard,
	Score,
} from '../../utils'
import ResultsDialog from './results-dialog'
import { useVisible } from '../../hooks'
import ExtraPointsBar from './extra-points-bar'

interface GameParams {
	onReset : () => void
	onGoHome : () => void
	onGameFinished : (score : Score) => void
}

export default function Game({
	onReset,
	onGoHome,
	onGameFinished,
} : GameParams) {
	const [score, setScore] = useState(0)
	const [cards, setCards] = useState(generateShuffledCards())
	const [playingCards, setPlayingCards] = useState([] as PlayingCard[])
	const [canFlipCards, setCanFlipCards] = useState(true)
	const [movementCount, setMovementCount] = useState(0)
	const [extraPoints, setExtraPoints] = useState(0)
	const [resetExtraPointsBar, setResetExtraPointsBar] = useState(false)
	const [gameTime, setGameTime] = useState(0)
	const [elapsedTime, setElapsedTime] = useState(0)
	const [isResultsDialogVisible, showResultsDialog] = useVisible(false)
	const [hasGameFinished, setHasGameFinished] = useState(false)
	const totalPairs = cards.length / 2
	const pointsPerPairFound = 500

	function flipUpCard(cardIndex : number) {
		if (!canFlipCards) {
			return
		}

		const newCards = flipCardInList({
			cards,
			cardIndex,
			isFaceDown: false,
		})

		setCards(newCards)

		const playingCard : PlayingCard = {
			card: newCards[cardIndex],
			index: cardIndex,
		}
		addPlayingCard(playingCard)
	}

	function addPlayingCard(playingCard : PlayingCard) {
		const newPlayingCards = [...playingCards, playingCard]
		setPlayingCards(newPlayingCards)
	}

	function flipPlayingCards() {
		let newCards = [...cards]
		playingCards.forEach((playingCard) => {
			newCards = flipCardInList({
				cards: newCards,
				cardIndex: playingCard.index,
				isFaceDown: true,
			})
		})

		setCards(newCards)
		setPlayingCards([])
	}

	function onPairFound() {
		const newCards = markPlayingCardsAsFound({
			cards,
			playingCards,
		})
		setCards(newCards)
		setPlayingCards([])
		setScore(score + pointsPerPairFound + extraPoints)
		setResetExtraPointsBar(true)
	}

	function increaseMovementCount() {
		setMovementCount(movementCount + 1)
	}

	useEffect(() => {
		const needToVerifyPlayingCards = playingCards.length == 2

		if (!needToVerifyPlayingCards) {
			return
		}

		increaseMovementCount()
		const arePlayingCardsPair = playingCards[0].card.face == playingCards[1].card.face

		if (arePlayingCardsPair) {
			onPairFound()
		} else {
			setCanFlipCards(false)
			setTimeout(() => {
				flipPlayingCards()
				setCanFlipCards(true)
			}, 500)
		}
	}, [playingCards])

	useEffect(() => {
		if (resetExtraPointsBar) {
			setResetExtraPointsBar(false)
		}
	}, [resetExtraPointsBar])

	useEffect(() => {
		const hasGameFinished = totalPairs == foundPairs(cards)
		setHasGameFinished(hasGameFinished)

		if (hasGameFinished) {
			showResultsDialog()
			setGameTime(elapsedTime)
		}
	}, [cards])

	useEffect(() => {
		if (hasGameFinished) {
			const finalScore : Score = {
				score: score,
				timeInSeconds: gameTime,
				moves: movementCount,
			}
			onGameFinished(finalScore)
		}
	}, [hasGameFinished])

	return <View>
		<StatusBar
			score={score}
			totalPairs={totalPairs}
			foundPairs={foundPairs(cards)}
			movementCount={movementCount}
			onTimeChanged={setElapsedTime}
			paused={hasGameFinished}
		/>
		<Board
			cards={cards}
			flipCard={flipUpCard}
		/>
		<ResultsDialog
			visible={isResultsDialogVisible}
			score={score}
			timeInSeconds={gameTime}
			movementCount={movementCount}
			onReset={onReset}
			onHome={onGoHome}
		/>
		<ExtraPointsBar
			onExtraPointsChanged={setExtraPoints}
			reset={resetExtraPointsBar}
			paused={hasGameFinished}
		/>
	</View>
}