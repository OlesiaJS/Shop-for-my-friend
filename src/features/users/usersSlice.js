import { createSlice } from "@reduxjs/toolkit";
import db from "../../db";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: db.usersDb
  },
  reducers: {
    addNewUser: (state, action) => {
      const isUserExist = state.value.find((el) => el.email === action.payload.email);
      console.log(isUserExist);
      if (isUserExist) {
        console.log('занято');
      }
      else {
        state.value = [...state.value,
        {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          favourites: [],
          cart: [],
          status: false,

        }];
      }
    },
    setUserInfo: (state, action) => {
      debugger;
      state.value.find((el) => {
        console.log('setUserInfo');
        if (el.name === action.payload.name) {
          el.favourites = action.payload.favourites;
          el.cart = action.payload.cart;
        }
        return "";
      });
    },
  }
});


export const { addNewUser, setUserInfo } = usersSlice.actions;

export default usersSlice.reducer;
