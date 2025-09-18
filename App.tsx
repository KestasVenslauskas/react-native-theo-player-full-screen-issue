import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { ScreenA } from './src/screens/ScreenA';
import { ScreenB } from './src/screens/ScreenB';

type RootStackParamList = {
  Home: undefined;
  ScreenA: undefined;
  ScreenB: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'TheoPlayer Demo' }}
          />
          <Stack.Screen
            name="ScreenA"
            component={ScreenA}
            options={{ title: 'Screen A' }}
          />
          <Stack.Screen
            name="ScreenB"
            component={ScreenB}
            options={{ title: 'Screen B' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
