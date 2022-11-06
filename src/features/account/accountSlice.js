import { createSlice } from "@reduxjs/toolkit";


export const accountSlice = createSlice({
  name: "account",
  initialState: {
    value: {
      name: "",
      email: "",
      favourites: [],
      status: false,
    },
  },
  reducers: {
    logout: (state) => {
      state.value = {
        name: "",
        email: "",
        favourites: [],
        status: false,
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
    login: (state, action) => {
      state.value = {
        name: action.payload.name,
        favourites: action.payload.favourites,
        status: true,
      };
    },
  },
});

export const { login, logout, addFavourite, deleteFavourite } = accountSlice.actions;

export default accountSlice.reducer;
