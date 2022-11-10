import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/account/accountSlice";
import { useDispatch } from "react-redux";


export default function Header() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.account.value);
    const store = useSelector((state) => state);
    console.log(store);
    return <header className="header">
        <div className="container">
            <div className="header__container">
                <Link to="/">
                    <img src="/images/logo.jpg" alt="logo" height="50" />
                </Link>
                <div className="header__info">
                    Hi,   {!user.name && (
                        <Link to="/account" className="header__user" id="headerUser">
                            Log in
                        </Link>)} {user.name}

                    <div className="header__shop">
                        <Link to={user.name
                            ? "/favourites"
                            : "/account"
                        } id="headerFavourites">
                            <img src="/images/favourite.png" alt="favourite" height="30" />
                            <span className="header__shop--count" id="headerFavouritesCount">{user.favourites.length}</span>
                        </Link>
                    </div>
                    {user.name && (
                        <button className="header__logout" onClick={() =>
                            dispatch(logout())
                        } style={{ display: 'block' }} id="headerLogout">Log out</button>
                    )}

                </div>
            </div>
        </div>
    </header>;
}