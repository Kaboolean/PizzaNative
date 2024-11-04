import PizzaList from "@/components/PizzaList";
import { RootState } from "@/store/store";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const CartScreen = () => {
  // Récupérer le panier depuis Redux
  const panier = useSelector((state: RootState) => state.pizzaPanier.pizzas);

  return (
    <View style={{ padding: 20 }}>
      {panier.length === 0 ? (
        <Text>Aucune pizza n'est commandée...</Text>
      ) : (
        <PizzaList PizzaList={panier} /> // On passe la liste des pizzas avec les quantités
      )}
    </View>
  );
};

export default CartScreen;
