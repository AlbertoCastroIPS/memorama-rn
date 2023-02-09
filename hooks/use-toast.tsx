import { ReactNode, useEffect} from 'react'
import { Toast } from '../components/utils'
import useVisible from './use-visible'

type UseToastReturnType = [ReactNode, ()=>void]

interface UseToastParams {
	message : string
}

export default function useToast({
	message,
} : UseToastParams) : UseToastReturnType {
	const [isToastVisible, showToast, hideToast] = useVisible(false)

	useEffect(() => {
		if (!isToastVisible) {
			return
		}

		const timeoutId = setTimeout(hideToast, 4000)
		return () => clearTimeout(timeoutId)
	}, [isToastVisible])

	const toast = <Toast
		message={message}
		visible={isToastVisible}
	/>

	return [toast, showToast]
}