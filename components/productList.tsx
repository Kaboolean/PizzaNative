import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, FlatList, Image, Text, View } from 'react-native';

// Typage du Stack Navigator
export type StackParamList = {
    ProductList: undefined; // Pas de paramètres pour ProductList
    Detail: { item: { id: number; name: string; price: number; image_url: string } }; // 'Detail' accepte un paramètre 'item'
  };
  

// Typage de la navigation pour ProductList
type NavigationProp = StackNavigationProp<StackParamList, 'ProductList'>;

export type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

export type ProductsProps = {
  Products: Product[];
};

export default function ProductList({ Products }: ProductsProps) {
  const navigation = useNavigation<NavigationProp>(); // Typage de la navigation

  return (
    <FlatList
      data={Products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
              <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100 }} />
              
          <Text>{item.name}</Text>
          <Text>{item.price} €</Text>
          <Button
            title="Détails"
            onPress={() => navigation.navigate('Detail', { item })} // Envoi de tout l'objet item à l'écran Detail
          />
        </View>
      )}
    />
  );
}
