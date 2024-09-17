import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Detail() {
  const route = useRoute();
  const { id } = route.params; // Récupération de l'ID depuis les paramètres

  return (
    <View>
      <Text>Détails du produit ID: {id}</Text>
     
    </View>
  );
}