import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PizzaCard = ({ pizza }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pizza.image_url }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{pizza.name}</Text>
        <Text style={styles.description}>{pizza.description}</Text>
        <Text style={styles.price}>{pizza.price}</Text>
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
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
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
});

export default PizzaCard;