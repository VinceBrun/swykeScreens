import { NavigationContainer,  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, OnBoardingScreen } from './screens';
import { TailwindProvider } from "tailwindcss-react-native";
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './screens/Login';
import Signup from './screens/Signup';
import useAuth from './hooks/useAuth';






const Stack = createNativeStackNavigator();



export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const { user } = useAuth();  
  useEffect(() => {
  AsyncStorage.getItem("alreadyLaunched").then((value) => {
    if (value === null) {
      AsyncStorage.setItem("alreadyLaunched", "true");
      setIsFirstLaunch(true);
    } else {
      setIsFirstLaunch(false);
    }
  })

  }, [])
  if(user) {
    return (
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    );
  }else {

  
    return (
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {!isFirstLaunch && (
              <Stack.Screen
                options={{ headerShown: false }}
                name="OnBoardingScreen"
                component={OnBoardingScreen}
              />
            )}
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Signup"
              component={Signup}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    );
  }
}


