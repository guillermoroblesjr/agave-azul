import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { default as Config } from '~/src/config'
import CounterScreen from '~/src/components/CounterScreen'
import SplashScreen from '~/src/components/SplashScreen'
import HomeScreen from '~/src/components/HomeScreen'

let config = Config.get()

// This component should only include Screens

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Counter: undefined;
}

export enum Screens {
  Splash = "Splash",
  Home = "Home",
  Counter = "Counter",
}

const Stack = createNativeStackNavigator<RootStackParamList>();

// Props
export type Props = {}

// Memo'd Component
const Navigation: React.FC<Props> = memo(function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: config.colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name={Screens.Splash} component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name={Screens.Home} component={HomeScreen} />
          <Stack.Screen name={Screens.Counter} component={CounterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
})

// Default Export
export default Navigation
