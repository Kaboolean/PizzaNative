import React from 'react';
import { FlatList, View } from 'react-native';
import { PizzaListProps } from '@/types/pizzalist.type';
import PizzaCard from './PizzaCard';

export default function PizzaList({ PizzaList }: PizzaListProps) {
  return (
    <FlatList
      data={PizzaList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <PizzaCard pizza={item} />
        </View>
      )}
    />
  );
}
