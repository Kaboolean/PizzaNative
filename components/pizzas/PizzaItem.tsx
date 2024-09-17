import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

type Props = {
    name: string;
    price: number;
    image: string;
}

const PizzaItem = (props: Props) => {
    
    //Return an image's path placed in the assets/images/ folder 
    function getImage(image: string): string{
        return "../../assets/images/" + image;
    }

    return (
        <View style={styles.card}>
            <View>
                <Image
                    source={{uri: getImage(props.image)}}
                    style={styles.image}
                />;
            </View>
            <View>
                <Text>Pizza: {props.name}!</Text>
                <Text>Prix: {props.price}€</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,   
    
        elevation: 5,
      },
    image: {
        width: "25%",
        height: '25%',
    }
});

export default PizzaItem;