import { Modal as CoreModal, StyleSheet, View } from 'react-native'
import { WrapperParams } from '../types'

interface ModalParams extends WrapperParams {
}

export default function Modal({
	children,
} : ModalParams) {
	return <CoreModal
		transparent={true}
	>
		<View style={styles.container}>
			{children}
		</View>
	</CoreModal>
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#4e4e5244',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
})