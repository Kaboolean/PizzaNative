import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import ApiType from '@/api';
import { useNavigation } from 'expo-router';

import { Pizza } from '@/types/pizza.type';
import PizzaList from '@/components/PizzaList';
import { HomeScreenNavigationProp } from '@/types/navigation.type';
import { LoadCartData } from '@/store/asyncStorage';

const PizzaListScreen = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const api = new ApiType();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    //Get pizzas from api
    const getPizzas = async () => {
      try {
        const response = await api.pizzas.getPizzas();
        if (!response) {
          throw new Error('Erreur récupération pizzas');
        }
        setPizzas(response);
      } catch (error) {
        console.error(error);
      }
    };

    getPizzas();
  }, []);

  return (
    <ScrollView>
      <Button title="Panier" onPress={() => navigation.navigate("cartScreen")} />
      {pizzas.length === 0 ? (
        <Text>No pizzas available.</Text>
      ) : (
        <PizzaList PizzaList={pizzas} />
      )}
    </ScrollView>
  );
};

export default PizzaListScreen;
