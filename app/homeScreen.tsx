import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

import ApiType from './api';
import PizzaList from '@/components/PizzaList';

const HomeScreen = () => {

  // Get pizzas using api
  const [pizzas, setPizzas] = useState([]);
  const api = new ApiType()

  // Store with Redux (Cart)
  // const dispatch = useDispatch();
  // const panier = useSelector((state: RootState) => state.pizzaPanier.pizzas);

  //Appeler à chaque chargement de page
  // Récup la liste des pizzas via l'api
  useEffect(() => {
      const getPizzas = async () => {
      try {
        const response = await api.pizzas.getPizzas()
        if (!response) {
          throw new Error('Erreur récupération pizzas');
        }
        setPizzas(response)
      } catch (error: any) {
        console.log(error);
      }
    };
    getPizzas();
  }, []);

  return (
    //Show pizzas list
    <ScrollView>
      <PizzaList PizzaList={pizzas}/>
    </ScrollView>
  );
};

export default HomeScreen;
