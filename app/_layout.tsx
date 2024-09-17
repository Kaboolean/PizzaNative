import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './productList';
import ProductDetailsScreen from './productDetails';

// Définir les types des paramètres pour chaque écran
export type StackParamList = {
  productList: undefined; // Pas de paramètres pour HomeScreen
  productDetails: { id: number }; // 'details' accepte un paramètre 'id' de type number
};

// Créez le Stack Navigator avec les types définis
const Stack = createNativeStackNavigator<StackParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="productList">
      <Stack.Screen
        name="productList"
        component={HomeScreen}
        options={{ title: 'Product List' }}
      />
      <Stack.Screen
        name="productDetails"
        component={ProductDetailsScreen}
        options={{ title: 'Product Details' }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
