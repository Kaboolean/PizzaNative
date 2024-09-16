import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ProductList from './productList';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Products } from './productList';
export default function HomeScreen() {
  const [data, setData] = useState<Products>([]);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('url_api');
          // parse data wirh Products type
          
          const data = response.data
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);
  
  return (
   
    <View>
      
        <ProductList Products={data} ></ProductList>
       
        </View>
  );
}


