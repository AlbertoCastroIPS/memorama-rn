import { StyleSheet, View } from 'react-native'
import { WrapperParams } from '../types'
import { Visible, VisibleParams } from '../utils'
import Modal from './modal'
import Title, { TitleParams } from './title'

export interface DialogParams extends WrapperParams, VisibleParams, TitleParams {
}

export default function Dialog({
	children,
	visible,
	title,
} : DialogParams) {
	return <Visible visible={visible}>
		<Modal>
			<View style={styles.container}>
				<Title title={title} />
				{children}
			</View>
		</Modal>
	</Visible>
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderRadius: 20,
		minWidth: '60%',
		minHeight: '20%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '1rem',
	},
})