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
    console.log(checkIfFavourite());
    console.log(listOfFavorites);
    return <section className="category" data-name="product">
        <h2>Favourite Items</h2>
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
    // <div className="favourites__container">
    //     <div className="table__container">
    //         <table className="order__table" id="favouriteTable">
    //             <caption>Favourite Items</caption>
    //             <thead>
    //                 <tr>
    //                     <th>Item Description</th>
    //                     <th>Price</th>
    //                     <th>Sale</th>
    //                     <th>Total</th>
    //                     <th>Action</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {listOfFavorites.map((item) =>
    //                     <tr>
    //                         <td>
    //                             <div className="item__info">
    //                                 <img src={"images/products/" + item.img + ".jpg"} alt="img" height="100" />
    //                                 <div>
    //                                     <p className="item__info--title">{item.title}</p>
    //                                 </div>
    //                             </div>
    //                         </td>
    //                         <td>${item.price}</td>
    //                         <td>
    //                             {item.sale && (<span className="item__sale">- {item.salePercent}%</span>)}

    //                         </td>
    //                         <td>${item.price - (item.price * (item.salePercent || 0)) / 100}</td>
    //                         <td>
    //                             <button className="item__favourite"><img src="images/product__favourite--true.png" alt="favourite" height="20" /></button>
    //                         </td>
    //                     </tr>
    //                 )}

    //             </tbody>
    //         </table>
    //     </div>
    // </div>;
};