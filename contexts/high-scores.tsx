import { useState, createContext } from 'react'
import { WrapperParams } from '../components/types'
import { Score } from '../utils'

interface HighScoresContext {
	highScores : Score[]
	maxHighScoresNumber : number
	pushScore : (score : Score) => void
	getScorePlace : (score : Score) => number
	isHighScore : (score : Score) => boolean
}

const defaultHighScoresContext : HighScoresContext = {
	highScores: [],
	maxHighScoresNumber: 3,
	pushScore: ()=>{},
	getScorePlace: ()=>0,
	isHighScore: ()=>false,
}

export const highScoresContext = createContext(defaultHighScoresContext)

export default function HighScoresContextComponent({
	children,
} : WrapperParams) {
	const maxHighScoresNumber = defaultHighScoresContext.maxHighScoresNumber
	const [highScores, setHighScores] = useState([] as Score[])

	function pushScore(score : Score) {
		if (!isHighScore(score)) {
			return
		}

		let newHighScores = [...highScores]
		const scorePlace = getScorePlace(score)

		newHighScores.splice(scorePlace-1, 0, {...score})
		setHighScores(newHighScores)
	}

	function getScorePlace(score : Score) : number {
		const noHighScores = highScores.length == 0

		if (noHighScores) {
			return 1
		}

		const scoreIndexPosition = highScores.findIndex((highScore) => highScore.score < score.score)
		const isNewHighScore = scoreIndexPosition != -1
		const highScorePosition = isNewHighScore ? scoreIndexPosition+1 : maxHighScoresNumber+1

		return highScorePosition
	}

	function isHighScore(score : Score) : boolean {
		const scorePlace = getScorePlace(score)
		const isHighScore = scorePlace <= maxHighScoresNumber

		return isHighScore
	}

	return <highScoresContext.Provider
		value={{
			highScores,
			maxHighScoresNumber,
			pushScore,
			getScorePlace,
			isHighScore,
		}}
	>
		{children}
	</highScoresContext.Provider>
}