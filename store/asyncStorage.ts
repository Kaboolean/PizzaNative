import { Pizza } from '@/types/pizza.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = "cart-key";

// Method to store data with AsyncStorage
export const StoreCartDatas = async (cart: Pizza[]) => {
    try {
        const jsonValue = JSON.stringify(cart);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } 
    catch (e) {
        console.log(e);
    }
};

// Method to load cart data using AsyncStorage 
export const LoadCartData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        let content = jsonValue != null ? JSON.parse(jsonValue) : null;
        console.log(content);
    } catch (e) {
        console.log(e);
    }
};