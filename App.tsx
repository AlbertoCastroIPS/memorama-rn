import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Game, MainMenu } from './components/scenes'
import { HighScoresContextComponent } from './contexts'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<HighScoresContextComponent>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{headerShown: false}}
				>
					<Stack.Screen
						name="home"
						component={MainMenu}
					/>
					<Stack.Screen
						name="game"
						component={Game}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</HighScoresContextComponent>
	)
}
