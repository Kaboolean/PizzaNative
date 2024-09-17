
import axios from 'axios';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import ProductList, { Products } from '../../components/productList';
export default function HomeScreen() {
  const [data, setData] = useState<Products>([]);
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('localhost:4000');
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
  const dataexemple = [{ id: 17, name:'pizza', price:12, image:''}]
  
  return (
   
    <View>
      
      <ProductList Products={data} ></ProductList>
      <ProductList Products={dataexemple} ></ProductList>
       
        </View>
  );
}


