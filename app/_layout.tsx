import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import ProductDetailsScreen from './productDetailsScreen';
import { Pizza } from './api/models/pizza';

// Définir les types des paramètres pour chaque écran
export type StackParamList = {
  pizzaList: { list: Pizza[] }; // Pas de paramètres pour HomeScreen
  pizzaDetails: { pizza: Pizza };
};

// Créez le Stack Navigator avec les types définis
const Stack = createNativeStackNavigator<StackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="pizzaList">
      <Stack.Screen
        name="pizzaList"
        component={HomeScreen}
        options={{ title: 'Pizza List' }}
      />
      <Stack.Screen
        name="pizzaDetails"
        component={ProductDetailsScreen}
        options={{ title: 'Pizza Details' }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
