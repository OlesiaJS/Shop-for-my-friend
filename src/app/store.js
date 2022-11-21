import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import productsSlice from "../features/products/productsSlice";
import accountSlice from "../features/account/accountSlice";
import usersSlice from "../features/users/usersSlice";

const persistConfig = {
    key: 'root',
    storage,
};


const rootReducer = combineReducers({
    products: productsSlice,
    account: accountSlice,
    users: usersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);



