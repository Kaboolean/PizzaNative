// import React, { useEffect, useState } from 'react';
// import { Image, StyleSheet, Text, ScrollView } from 'react-native';

// import ApiType from '../api';
// import PizzaCard from '../../components/PizzaCard';
// import { RootState } from '../store/store';
// import { addPizzaPanier, removePizzaPanier } from '../store/store';
// import { useDispatch, useSelector } from 'react-redux';
// import { Pizza } from '../api/models/pizza';
// import { Provider } from 'react-redux'
// import {
//     Button

// } from 'react-native';
// import { store } from '../store/store'

// import { HomeScreen } from 

// function HomeScreen() {
//   const [pizzas, setPizzas] = useState([]);
//   const api = new ApiType()

//   const dispatch = useDispatch();
//   const panier = useSelector((state: RootState) => state.pizzaPanier.pizzas);

//   // Chaque chargement de page
//   useEffect(() => {
    
//       const getPizzas = async () => {
//       try {
//         const response = await api.pizzas.getPizzas()
//         if (!response) {
//           throw new Error('Erreur récupération pizzas');
//         }
//         setPizzas(response)
//       } catch (error: any) {
//         console.log(error);
//       }
//     };

//     getPizzas();
//   }, []);

//   useEffect(() => {
//     console.log('Panier mis à jour:', panier);
//   }, [panier]);

//   const test = () => {
//     handleAddPizza(pizzas[1])
//     console.log(panier)
//   };

//   const handleAddPizza = (pizza: Pizza) => {
//     dispatch(addPizzaPanier(pizza));
//   };

//   const handleRemovePizza = (id: number) => {
//     const pizzaToRemove = { id } as Pizza;
//     dispatch(removePizzaPanier(pizzaToRemove));
//   };

//   // Liste de pizzas
//   return (
//     <Provider store={store}>
//       <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }
//       >
//         <Button
//           onPress={test}
//           title="Learn More"
//           color="#841584"/>
//         <Button
//         onPress={() => {
//           if (pizzas.length > 1) {
//             handleRemovePizza(pizzas[1].id);
//           }
//         }}
//         title="Supprimer Pizza"
//         color="#841584"
//       />
//       <ScrollView
//       contentContainerStyle={styles.container}
//       style={styles.scrollView}
//     >
//       {pizzas.length === 0 ? (
//         <Text>No pizzas available.</Text>
//       ) : (
//         pizzas.map(pizza => (
//           <PizzaCard key={pizza.id} pizza={pizza} />
//         ))
//       )}
//     </ScrollView>
//       </ParallaxScrollView>
//     </Provider>
      
//   );
// }

// const AppProvider = () => (
//   <Provider store={store}>
//     <HomeScreen />
//   </Provider>
// );

// export default AppProvider;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
//   scrollView: {
//     backgroundColor: '#A1CEDC', // Adjust as needed
//   },
// });