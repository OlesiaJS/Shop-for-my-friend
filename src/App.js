
import './assets/style/style.css';
// import db from './db';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import FavouritesList from "./components/FavouritesList";
// import ItemsList from "./components/ItemsList";
// import Account from "./components/Account";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <><Header /> <main>
      <div className='container'><Outlet /></div>
    </main><Footer /></>
  );
}

export default App;
