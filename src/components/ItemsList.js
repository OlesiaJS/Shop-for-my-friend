import { useSelector } from 'react-redux';
import { deleteFavourite, addFavourite, addItemInCart, deleteItemInCart } from "../features/account/accountSlice";
import { } from "../features/account/accountSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "./Slider";

export default function ItemsList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.value);
    const user = useSelector((state) => state.account.value);
    const checkIfFavourite = (id) => { return user.favourites.find(el => el === id); };
    const checkIfCart = (id) => { return user.cart.find(el => el.id === id); };
    return <><section className='section-Slider'><Slider /></section><section className="category" data-name="product">
        <div className="category__container">   {products.map((item) => <><div className="product">
            {user.name && (<button className="product__favourite" onClick={() => {
                checkIfFavourite(item.id)
                    ? dispatch(deleteFavourite(item.id))
                    : dispatch(addFavourite(item.id));
            }}>
                <img src={checkIfFavourite(item.id)
                    ? "images/product__favourite--true.png"
                    : "images/product__favourite.png"}
                    alt="favourite" height="20" />
            </button>)}
            <Link to={'aboutItem/' + item.id}>
                <img src={"/images/products/" + item.img + ".jpg"} className="product__img" alt="imgName"
                    width={'100%'} />
            </Link>
            <p className="product__title">{item.title}</p>
            {item.sale && (
                <div className="product__sale">
                    <span className="product__sale--old">${item.price}</span>
                    <span className="product__sale--percent">-{item.salePercent}%</span>
                </div>)}
            <div className="product__info">
                <span className="product__price">${item.price - (item.price * (item.salePercent || 0)) / 100}</span>
                {user.name && (<button className='product__cartCommon' onClick={() => {
                    checkIfCart(item.id)
                        ? dispatch(deleteItemInCart(item.id))
                        : dispatch(addItemInCart(item.id));
                }}>
                    <img src={checkIfCart(item.id)
                        ? "images/cart--true.png"
                        : "images/cart.png"}
                        alt="cart" height="20" />
                </button>)}
            </div>
        </div>
        </>
        )}
        </div>
    </section></>;
}