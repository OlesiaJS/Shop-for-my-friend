import { createSlice } from "@reduxjs/toolkit";


export const accountSlice = createSlice({
  name: "account",
  initialState: {
    value: {
      name: "",
      email: "",
      favourites: [],
      status: false,
      cart: [],
    },
  },
  reducers: {
    logout: (state) => {
      state.value = {
        name: "",
        email: "",
        favourites: [],
        status: false,
        cart: [],
      };
    },
    addFavourite: (state, action) => {
      state.value.favourites = [...state.value.favourites, action.payload];
    },
    deleteFavourite: (state, action) => {
      const { id } = action.payload;
      state.value.favourites.splice(id, 1);
      // state.value.favourites = state.value.favourites.filter(item => item.id !== id);
    },

    addItemInCart: (state, action) => {
      console.log('action');
      // const { id } = action.payload;
      state.value.cart.push({ id: action.payload, count: 1 });
      console.log('state', state);
    },

    deleteItemInCart: (state, action) => {
      state.value.cart = [...state.value.cart.filter(item => item.id !== action.payload)];
    },

    increment: (state, action) => {
      console.log('increment');
      // let cart = state.value.cart.find(item => item.id === action.payload.id);
      // cart.count = 1 + cart.count;
      // state.value.cart = [...state.value.cart.filter(item => item.id !== action.payload.id), newCart];
    },

    decrement: (state, action) => {
      // let cart = state.value.cart.find(item => item.id === action.payload.id);
      // if (cart.count > 1) {
      //   cart.count = cart.count - 1;
      // }
      // else {
      console.log('decrement');
      // }

    },

    login: (state, action) => {
      state.value = {
        name: action.payload.name,
        favourites: action.payload.favourites,
        cart: action.payload.cart,
        status: true,
      };
    },
  },
});

export const { login, logout, addFavourite, deleteFavourite, addItemInCart, increment, decrement, deleteItemInCart } = accountSlice.actions;

export default accountSlice.reducer;
