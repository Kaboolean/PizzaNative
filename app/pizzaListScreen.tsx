import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Pizza } from '@/api/models/pizza';
import PizzaList, { HomeScreenNavigationProp } from '@/components/PizzaList';
import ApiType from '@/api';
import { useNavigation } from 'expo-router';

const PizzaListScreen = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const api = new ApiType();

  // Access Redux state (cart/panier)
  const panier = useSelector((state: RootState) => state.pizzaPanier.pizzas);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
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
