import PizzaList from "@/components/PizzaList";
import { RootState } from "@/store/store";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const CartScreen = () => {
    
    //Recupérer le panier
    const panier = useSelector((state: RootState) => state.pizzaPanier.pizzas);

    return (
        <View>
            {panier.length === 0 ? (
                <Text>Aucune pizza n'est commandée...</Text>
            ) : (
                <PizzaList PizzaList={panier} />
            )}
        </View>
    );
};

export default CartScreen;