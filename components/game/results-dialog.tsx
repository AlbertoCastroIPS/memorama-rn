import { StyleSheet, View } from 'react-native'
import { Dialog, DialogParams } from '../dialog'
import { IconButton } from '../utils'
import MovementCount, { MovementCountParams } from './movement-count'
import Score, { ScoreParams } from './score'
import { Redo, Estate } from 'react-native-unicons'
import Time, { TimeParams } from './time'

interface ResultsDialogParams extends
	DialogParams,
	ScoreParams,
	MovementCountParams,
	TimeParams
{
	onReset : ()=>void
	onHome : ()=>void
}

export default function ResultsDialog(params : ResultsDialogParams) {
	const {
		visible,
		onReset,
		onHome,
	} = params

	return <Dialog
		visible={visible}
		title='You win!'
	>
		<View style={styles.container}>
			<MovementCount {...params} />
			<Time {...params} prefix='Time: ' />
			<Score {...params} />
			<View style={styles.buttons}>
				<IconButton
					icon={<Redo />}
					onPress={onReset}
				/>
				<IconButton
					icon={<Estate />}
					onPress={onHome}
				/>
			</View>
		</View>
	</Dialog>
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: '1rem',
		rowGap: 12,
		alignItems: 'center',
		width: '100%',
	},
	buttons: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})