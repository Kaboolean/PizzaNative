import { Pizza } from '@/types/pizza.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = "cart-key";

// Méthode pour stocker les données du panier avec AsyncStorage
export const StoreCartDatas = async (cart: Pizza[]) => {
    try {
        const jsonValue = JSON.stringify(cart); // Convertit le panier en JSON
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue); // Enregistre dans AsyncStorage
    } 
    catch (e) {
        console.log(e); // Gère l'erreur si elle survient
    }
};

// Méthode pour charger les données du panier avec AsyncStorage
export const LoadCartData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY); // Récupère les données du panier
        let content = jsonValue != null ? JSON.parse(jsonValue) : []; // Si le panier n'est pas null, on parse le JSON
        return content; // Renvoie le contenu du panier
    } 
    catch (e) {
        console.log(e); // Gère l'erreur si elle survient
    }
};
