import { PizzaStore } from '@/types/pizza.type';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { StoreCartDatas } from './asyncStorage';

interface PanierPizzas {
  pizzas: PizzaStore[];
}

const initialState: PanierPizzas = {
  pizzas: [],
};

const pizzaPanier = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addPizzaPanier: (state, action: PayloadAction<PizzaStore>) => {
      // Vérifier si la pizza existe déjà pour éviter les doublons
      const existingPizzaIndex = state.pizzas.findIndex((p) => p.id === action.payload.id);

      if (existingPizzaIndex >= 0) {
        // Si la pizza existe déjà, augmenter la quantité
        state.pizzas[existingPizzaIndex].quantity += action.payload.quantity;
      } else {
        // Sinon, ajouter la nouvelle pizza au panier
        state.pizzas.push(action.payload);
      }

      // Sauvegarder l'état du panier dans AsyncStorage
      StoreCartDatas(state.pizzas);
    },

    removePizzaPanier: (state, action: PayloadAction<PizzaStore>) => {
      // Retirer la pizza du panier par son ID
      state.pizzas = state.pizzas.filter(p => p.id !== action.payload.id);

      // Sauvegarder l'état mis à jour du panier dans AsyncStorage
      StoreCartDatas(state.pizzas);
    }
  }
});

// Exporter les actions pour être utilisées dans les composants
export const { addPizzaPanier, removePizzaPanier } = pizzaPanier.actions;

// Configurer le store Redux
export const store = configureStore({
  reducer: {
    pizzaPanier: pizzaPanier.reducer
  }
});

// Types pour Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
