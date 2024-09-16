import { ScrollView, StyleSheet } from 'react-native';
import PizzaItem from '@/components/pizzas/PizzaItem';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.listContainer}>
      <PizzaItem name={"Margarita"} price={9.99} image='img-margarita.jpg'/>
      <PizzaItem name={"4 Fromages"} price={9.99} image='img-4-fromages.jpg'/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // titleContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },
  listContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },
});
