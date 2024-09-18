import { Pizza } from '@/types/pizza.type'
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { StoreCartDatas } from './asyncStorage'

interface PanierPizzas {
    pizzas: Pizza[]
  }

  const initialState: PanierPizzas = {
    pizzas: [],
  }

const pizzaPanier = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addPizzaPanier: (state, action: PayloadAction<Pizza>) => {
      //Push pizza to panier
      state.pizzas.push(action.payload)
      StoreCartDatas;
    },
    removePizzaPanier: (state, action: PayloadAction<Pizza>) => {
        //Remove pizza from panier
        state.pizzas.splice(state.pizzas.findIndex(x=> x.id == action.payload.id),1)
        StoreCartDatas;
      }
  }
})

export const { addPizzaPanier, removePizzaPanier } = pizzaPanier.actions

export const store = configureStore({
  reducer: {
    pizzaPanier: pizzaPanier.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;