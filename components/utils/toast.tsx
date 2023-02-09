import { useRef, useEffect } from 'react'
import { Animated, Dimensions, Modal, StyleSheet, Text, View } from 'react-native'
import { useVisible } from '../../hooks'
import Visible, { VisibleParams } from './visible'

interface ToastParams extends VisibleParams {
	message : string
}

export default function Toast({
	message,
	visible,
} : ToastParams) {
	const windowHeight = Dimensions.get('window').height
	const normalTop = windowHeight * .9
	const startingTop = windowHeight * 1.05
	const top = useRef(new Animated.Value(startingTop)).current
	const [isToastVisible, showToast, hideToast] = useVisible(visible)

	useEffect(() => {
		if (!visible) {
			Animated.spring(top, {
				toValue: startingTop,
				useNativeDriver: true,

			}).start(hideToast)
		} else {
			showToast()
			Animated.spring(top, {
				toValue: normalTop,
				useNativeDriver: true,
			}).start()
		}
	}, [visible])

	return <Visible
		visible={isToastVisible}
	>
		<Modal
			transparent={true}
		>
			<Animated.Text
				style={{
					...styles.toast,
					top: top,
				}}
			>
				{message}
			</Animated.Text>
		</Modal>
	</Visible>
}

const styles = StyleSheet.create({
	toast: {
		position: 'absolute',
		top: '90%',
		left: '5%',
		width: '90%',
		padding: '1.5rem',
		backgroundColor: 'white',
		borderRadius: 20,
	},
})