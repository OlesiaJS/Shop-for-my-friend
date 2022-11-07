import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavouritesList from "./components/FavouritesList";
import ItemsList from "./components/ItemsList";
import Account from "./components/Account";
import AboutProducts from "./components/AboutProducts";

import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
  // Route, Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ItemsList />,
      }, {
        path: "favourites",
        element: <FavouritesList />,
      },

      {
        path: "account",
        element: <Account />,
      },
      {
        path: "about",
        element: <AboutProducts />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
