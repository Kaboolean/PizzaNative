import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import PizzaCard from '@/components/PizzaCard';
import { Pizza } from '@/types/pizza.type';

const PizzaDetailsScreen = () => {
  const route = useRoute();
  const { pizza } = route.params as { pizza: Pizza }; // Access the pizza from route params

  return (
    <View style={{ padding: 20 }}>
      <PizzaCard pizza={pizza} />
    </View>
  );
};

export default PizzaDetailsScreen;
