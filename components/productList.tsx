import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Text, View, Button } from "react-native";

export type Products = { id: number; name: string; price: number; image: string }[];

export default function ProductList({ Products }: { Products: Products }) {
    const navigation = useNavigation();

    return (
        <FlatList
            data={Products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Image source={{ uri: item.image }} />
                    <Text>{item.name}</Text>
                    <Text>{item.price} €</Text>
                    <Button 
                        title="Détails" 
                        onPress={() => navigation.navigate('Detail', { id: item.id })} // Navigation vers la page de détails
                    />
                </View>
            )}
        />
    );
}