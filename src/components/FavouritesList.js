import { useSelector } from 'react-redux';
import { deleteFavourite } from "../features/account/accountSlice";
import { addFavourite } from "../features/account/accountSlice";
import { useDispatch } from "react-redux";


export default function FavouritesList() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.account.value);
    const userFavourites = useSelector((state) => state.account.value.favourites);
    const products = useSelector((state) => state.products.value);
    const listOfFavorites = userFavourites.map((idFav) => {
        const result = products.find(item => item.id === idFav);
        return result;
    });
    const checkIfFavourite = (id) => { return user.favourites.find(el => el === id); };
    console.log(listOfFavorites);
    return <section className="category" data-name="product">
        <h2 className="titleHeader">My Favourites</h2>
        <div className="category__container">   {listOfFavorites.map((item) =>
            <><div className="product">
                <button className="product__favourite" onClick={() => {
                    checkIfFavourite(item.id)
                        ? dispatch(deleteFavourite(item.id))
                        : dispatch(addFavourite(item.id));


                }}>
                    <img src={checkIfFavourite(item.id)
                        ? "images/product__favourite--true.png"
                        : "images/product__favourite.png"
                    }
                        alt="favourite" height="20" />
                </button>
                <img src={"images/products/" + item.img + ".jpg"} className="product__img" alt="imgName"
                    width={'100%'} />
                <p className="product__title">{item.title}</p>
                {item.sale && (
                    <div className="product__sale">
                        <span className="product__sale--old">${item.price}</span>
                        <span className="product__sale--percent">-{item.salePercent}%</span>
                    </div>)}
                <div className="product__info">
                    <span className="product__price">${item.price - (item.price * (item.salePercent || 0)) / 100}</span>
                </div>
            </div>
            </>
        )}
        </div>
    </section>;

};