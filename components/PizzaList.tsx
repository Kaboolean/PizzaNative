import React from 'react';
import { StackParamList } from '@/app/_layout';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, FlatList, Image, Text, View } from 'react-native';
import { PizzaListProps } from '@/types/pizzalist.type';

// Typage de la navigation
type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'productList'>;

export default function PizzaList({ PizzaList }: PizzaListProps) {

  // Recup l'objet de navigation
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Typage de la navigation

  return (
    <FlatList
      data={PizzaList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
              <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100 }} />
              
          <Text>{item.name}</Text>
          <Text>{item.price} €</Text>
          <Button
            title="Détails"
            onPress={() => navigation.navigate('productDetails', { pizza: item })} // Envoi de tout l'objet item à l'écran Detail
          />
        </View>
      )}
    />
  );
}