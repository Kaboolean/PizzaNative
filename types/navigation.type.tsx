import { Pizza } from "./pizza.type";
import { StackNavigationProp } from "@react-navigation/stack";

// Define the types for the parameters of each screen
export type StackParamList = {   
    pizzaListScreen: { list: Pizza[] };   
    pizzaDetailsScreen: { pizza: Pizza };
    cartScreen: undefined;
};

// Typage de la navigation
export type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'pizzaListScreen'>;