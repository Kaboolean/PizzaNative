import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Pizza } from './api/models/pizza';

export default function ProductDetailsScreen() {
  
  const route = useRoute();
  const { pizza } = route.params as { pizza: Pizza }; // Récupération de l'objet complet item

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Détails du produit</Text>
      <Image source={{ uri: pizza.image_url }} style={{ width: 200, height: 200, marginVertical: 20 }} />
      <Text>ID: {pizza.id}</Text>
      <Text>Nom: {pizza.name}</Text>
      <Text>Prix: {pizza.price} €</Text>
    </View>
  );
}