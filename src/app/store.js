import { configureStore } from '@reduxjs/toolkit';
import productsSlice from "../features/products/productsSlice";

export default configureStore({
    reducer: { products: productsSlice }
});


// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import productsSlice from "../features/products/productsSlice";
// import accountSlice from "../features/account/accountSlice";

// const persistConfig = {
//     key: 'root',
//     storage,
// };


// const rootReducer = combineReducers({
//     products: productsSlice,
//     account: accountSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer
// });

// export const persistor = persistStore(store);



