import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { Pizza } from '../api/models/pizza'

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
      state.pizzas.push(action.payload)
    },
    removePizzaPanier: (state, action: PayloadAction<Pizza>) => {
        state.pizzas.splice(state.pizzas.findIndex(x=> x.id == action.payload.id),1)
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