import { createSlice } from "@reduxjs/toolkit";
import db from "../../db";
console.log('333');

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: db.usersDb
  },
  reducers: {
    addNewUser: (state, action) => {
      const isUserExist = state.value.find((el) => el.email === action.payload.email);

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
          status: false,
        }];
      }
    }
  }
});


export const { addNewUser } = usersSlice.actions;

export default usersSlice.reducer;