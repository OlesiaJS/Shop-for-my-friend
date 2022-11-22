import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/account/accountSlice";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../features/users/usersSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.account.value);
    console.log(user);
    const navigate = useNavigate();

    return <header className="header">
        <div className="container">
            <div className="header__container">
                <Link to="/">
                    <img src="/images/logo.jpg" alt="logo" height="50" />
                </Link>
                <div className="header__info">
                    Hi,   {!user.name && (
                        <Link to="/account" className="header__user">
                            Log in
                        </Link>)} {user.name}

                    <div className="header__shop">
                        <Link to={user.name
                            ? "/favourites"
                            : "/account"
                        } id="headerFavourites">
                            <img src="/images/favourite.png" alt="favourite" height="30" />
                            <span className="header__shop--count" >{user.favourites.length}</span>
                        </Link>
                        <Link to={user.name
                            ? "/cart"
                            : "/account"
                        } >
                            <img src="/images/cart.png" alt="cart" height="30" />
                            <span className="header__shop--count">{user.cart.length}</span>
                        </Link>
                    </div>
                    {user.name && (
                        <button className="header__logout" onClick={() => {
                            dispatch(setUserInfo(user));
                            dispatch(logout());
                            navigate("/");
                        }} style={{ display: 'block' }}>Log out</button>
                    )}

                </div>
            </div>
        </div>
    </header>;
}