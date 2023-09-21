import { NavigationContainer,  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, OnBoardingScreen } from './screens';
import { TailwindProvider } from "tailwindcss-react-native";



const Stack = createNativeStackNavigator();



export default function App() {
  
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="OnBoardingScreen"
            component={OnBoardingScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


