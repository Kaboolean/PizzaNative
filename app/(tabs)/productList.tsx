import { FlatList, TouchableOpacity } from "react-native-gesture-handler"; // Ajout de TouchableOpacity
import { Image, Text, View } from "react-native-reanimated/lib/typescript/Animated";
import { Link, useNavigation } from '@react-navigation/native'; // Importation de useNavigation

import { Button } from "react-native";

export type Products = { id: number; name: string; price: number; image: string }[];

export default function ProductList({ Products }: { Products:Products }) {
;
    return (
        <FlatList
            data={Products}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                
                    <View>
                        <Image src={item.image} />
                        <Text>{item.name}</Text>
                    <Text>{item.price} €</Text>
                    <Link to={`/DetailPage ${item.id}`}>Détails</Link>
                    <Button title="Ajouter" onPress={()=> } />
                    
                      
                </View>
              
              
            )}
        />
    );
}