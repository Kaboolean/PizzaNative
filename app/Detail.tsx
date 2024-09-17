import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';

// Définir le type de l'item
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};


export default function Detail() {
  const route = useRoute();
  const { item } = route.params as { item: Product }; // Récupération de l'objet complet item

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Détails du produit</Text>
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200, marginVertical: 20 }} />
      <Text>ID: {item.id}</Text>
      <Text>Nom: {item.name}</Text>
      <Text>Prix: {item.price} €</Text>
    </View>
  );
}
