import { Pressable, StyleProp, Text, TextStyle } from 'react-native'

interface TextButtonParams {
	text : string
	onPress : ()=>void,
	style? : StyleProp<TextStyle>
}

export default function TextButton({
	text,
	onPress,
	style,
} : TextButtonParams) {
	return <Pressable onPress={onPress}>
		<Text style={style}>
			{text}
		</Text>
	</Pressable>
}