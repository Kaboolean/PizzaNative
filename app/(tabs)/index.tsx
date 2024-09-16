import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ActivityIndicator } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ApiType from '../api';

export default function HomeScreen() {
  const [pizzas, setPizzas] = useState([]);
  const api = new ApiType()

  useEffect(() => {
    
     const getPizzas = async () => {
      try {
        const response = await api.pizzas.getPizzas()
        if (!response) {
          throw new Error('Erreur récupération pizzas');
        }
        setPizzas(response)
      } catch (error: any) {
        console.log(error);
      }
    };

    getPizzas();

  }, []);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
          <View style={styles.container}>
      {pizzas.length === 0 ? (
        <Text>No pizzas available.</Text>
      ) : (
        pizzas.map((pizza, index) => (
          <Text key={index}>{pizza.name}</Text>
        ))
      )}
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});