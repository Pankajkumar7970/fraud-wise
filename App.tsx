import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';
import QuizzesScreen from './src/screens/QuizzesScreen';
import QuizDetailScreen from './src/screens/QuizDetailScreen';
import ResourcesScreen from './src/screens/ResourcesScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#1a4b8c" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1a4b8c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'FraudWise' }}
          />
          <Stack.Screen 
            name="Quizzes" 
            component={QuizzesScreen} 
            options={{ title: 'Quizzes' }}
          />
          <Stack.Screen 
            name="QuizDetail" 
            component={QuizDetailScreen} 
            options={{ title: 'Quiz' }}
          />
          <Stack.Screen 
            name="Resources" 
            component={ResourcesScreen} 
            options={{ title: 'Resources' }}
          />
          <Stack.Screen 
            name="Contact" 
            component={ContactScreen} 
            options={{ title: 'Contact Us' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}