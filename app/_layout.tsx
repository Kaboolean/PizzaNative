import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PizzaListScreen from './pizzaListScreen';
import PizzaDetailsScreen from './pizzaDetailsScreen';
import { Pizza } from '../api/models/pizza';

// Définir les types des paramètres pour chaque écran
export type StackParamList = {
  pizzaListScreen: { list: Pizza[] }; // Pas de paramètres pour HomeScreen
  pizzaDetailsScreen: { pizza: Pizza };
};

// Créez le Stack Navigator avec les types définis
const Stack = createNativeStackNavigator<StackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="pizzaListScreen">
      <Stack.Screen
        name="pizzaListScreen"
        component={PizzaListScreen}
        options={{ title: 'Pizza List' }}
      />
      <Stack.Screen
        name="pizzaDetailsScreen"
        component={PizzaDetailsScreen}
        options={{ title: 'Pizza Details' }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
