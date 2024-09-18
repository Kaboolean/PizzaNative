import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Pizza, PizzaProps } from '@/types/pizza.type';
import { addPizzaPanier, removePizzaPanier } from '@/store/store';
import { HomeScreenNavigationProp } from '@/types/navigation.type';

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const PizzaCard = (props: PizzaProps) => {
  const route = useRoute();
  const dispatch = useDispatch();
  
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Typing the navigation

  // Function to handle adding the pizza to the cart
  const handleAddPizzaToCart = (pizza: Pizza) => {
    dispatch(addPizzaPanier(pizza));
  };

    // Function to handle removing the pizza to the cart
    const handleRemovePizzaToCart = (pizza: Pizza) => {
      dispatch(removePizzaPanier(pizza));
    };

  // Function to handle navigating to the details page
  const handleViewDetails = (pizza: Pizza) => {
    navigation.navigate('pizzaDetailsScreen', { pizza });
  };

  // Determine button behavior based on the route name
  const handleButtonPress = () => {
    if (route.name === 'pizzaListScreen') {
      handleViewDetails(props.pizza);
    } 
    else if (route.name == 'cartScreen') {
      handleRemovePizzaToCart(props.pizza);
    }
    else {
      handleAddPizzaToCart(props.pizza);
    }
  };

  // Determine button title based on route name
  const buttonTitle = route.name === 'pizzaListScreen' ? 'Voir détails' : 'cartScreen' ? 'Ajouter au panier' : 'Retirer du panier';

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: props.pizza.image_url }}
        style={styles.image} 
      />
      <View style={styles.details}>
        <Text style={styles.name}>{props.pizza.name}</Text>
        <Text style={styles.description}>{props.pizza.description}</Text>
        <Text style={styles.price}>{props.pizza.price} €</Text>
        <Button
          title={buttonTitle}
          onPress={handleButtonPress} // Call the handler directly here
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 5,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default PizzaCard;
