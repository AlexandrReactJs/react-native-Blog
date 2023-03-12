import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullpostScreen from "./Fullpost/FullpostScreen";
import MainScreen from "./Main/Main";
import { NavigationContainer } from "@react-navigation/native";



const Stack = createNativeStackNavigator()


export const Navigation = () => {
    return <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Main" component={MainScreen} options={{title: 'Все записи',}} />
            <Stack.Screen name="Fullpost" component={FullpostScreen} options={{ title: 'Статья',}} />

        </Stack.Navigator>
    </NavigationContainer>
}