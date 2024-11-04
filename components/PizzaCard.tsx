import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Pizza, PizzaProps } from '@/types/pizza.type';  // Typage des pizzas et props
import { addPizzaPanier, removePizzaPanier } from '@/store/store';  // Actions Redux
import { HomeScreenNavigationProp } from '@/types/navigation.type';  // Typage pour la navigation
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootState } from '@/store/store';  // Pour accéder au state global

const PizzaCard = (props: PizzaProps) => {
  const { pizza } = props;
  const route = useRoute();  // Obtenir la route actuelle
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();  // Navigation typée

  // Récupérer le panier depuis Redux pour vérifier la quantité déjà ajoutée
  const panier = useSelector((state: RootState) => state.pizzaPanier.pizzas);
  
  // Trouver la pizza dans le panier pour récupérer sa quantité
  const existingPizza = panier.find((p) => p.id === pizza.id);
  const initialQuantity = existingPizza ? existingPizza.quantity : 1;

  // Gestion de la quantité
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  // Synchroniser la quantité avec le panier lorsqu'on est sur l'écran du panier
  useEffect(() => {
    if (route.name.startsWith('cartScreen') && existingPizza) {
      setQuantity(existingPizza.quantity);  // Précharger la quantité si la pizza est déjà dans le panier
    }
  }, [existingPizza, route.name]);

  // Ajouter une pizza au panier avec la quantité actuelle
  const handleAddPizzaToCart = () => {
    const pizzaWithQuantity = { ...pizza, quantity };  // Associer la quantité avec la pizza
    dispatch(addPizzaPanier(pizzaWithQuantity));  // Dispatch avec la pizza et la quantité
    navigation.navigate('cartScreen');  // Rediriger vers l'écran du panier après l'ajout
  };

  // Retirer une pizza du panier
  const handleRemovePizzaFromCart = () => {
    dispatch(removePizzaPanier({...pizza, quantity: 1}));
  };

  // Incrémenter la quantité
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Décrémenter la quantité mais pas en dessous de 1
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  // Déterminer l'action du bouton en fonction de l'écran actuel
  const handleButtonPress = () => {
    if (route.name.startsWith('pizzaListScreen')) {
      handleAddPizzaToCart();  // Utilise la quantité actuelle lors de l'ajout au panier
    } else if (route.name.startsWith('cartScreen')) {
      handleRemovePizzaFromCart();
    }
  };

  // Titre du bouton selon l'écran
  const ButtonTitle = () => {
    if (route.name.startsWith('pizzaListScreen')) {
      return "Ajouter au panier";
    } else if (route.name.startsWith('cartScreen')) {
      return "Retirer du panier";
    }
    return "Action";
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: pizza.image_url }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{pizza.name}</Text>
        <Text style={styles.description}>{pizza.description}</Text>
        <Text style={styles.price}>{pizza.price} €</Text>
        
        {/* Section pour ajuster la quantité */}
        <View style={styles.quantityControl}>
          <Button title="-" onPress={decrementQuantity} />
          <Text style={styles.quantityText}>{quantity}</Text>
          <Button title="+" onPress={incrementQuantity} />
        </View>

        {/* Bouton pour ajouter ou retirer du panier */}
        <Button
          title={ButtonTitle()}
          onPress={handleButtonPress}
          color="#007BFF"
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
  quantityControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});

export default PizzaCard;
