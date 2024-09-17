
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ProductList, { Product } from '../../components/productList';
export default function HomeScreen() {
  const [data, setData] = useState<Product[]>([]);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4000/pizzas');
          // parse data wirh Products type
         
          
          const data = response.data
          console.log(data)
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);
  const dataexemple = [{ id: 17, name:'pizza', price:12, image_url:'', description:''},{ id: 18, name:'pizza fromage', price:22, image_url:'', description:''}]
  
  return (
   
    <ScrollView>
      
      <ProductList Products={data} ></ProductList>
      <ProductList Products={dataexemple} ></ProductList>
       
        </ScrollView>
  );
}


