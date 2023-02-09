import { useState, useContext, useEffect } from 'react'
import { MainContainer } from '../layout'
import { Game as GameBoard } from '../game'
import ScreenParams from './screen-params'
import { Score } from '../../utils'
import { highScoresContext } from '../../contexts'
import { useToast } from '../../hooks'

export default function Game({
	navigation,
} : ScreenParams) {
	const [gameBoardKey, setGameBoardKey] = useState(0)
	const {pushScore, isHighScore} = useContext(highScoresContext)
	const [toast, showToast] = useToast({message: 'Congrats! New high score'})

	function resetGameBoard() {
		setGameBoardKey(gameBoardKey + 1)
	}

	function onGoHome() {
		navigation.navigate('home')
	}

	function onGameFinished(score : Score) {
		if (!isHighScore(score)) {
			return
		}

		showToast()
		pushScore(score)
	}

	return <MainContainer>
		<GameBoard
			key={gameBoardKey}
			onReset={resetGameBoard}
			onGoHome={onGoHome}
			onGameFinished={onGameFinished}
		/>
		{toast}
	</MainContainer>
}