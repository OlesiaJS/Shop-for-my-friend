// import { useSelector } from 'react-redux';
export default function FavouritesList() {

    // const userFavourites = useSelector((state) => state.account.value.favourites);
    // const products = useSelector((state) => state.products.value);
    // console.log(userFavourites);
    // const listOfFavorites = userFavourites.map((idFav) => {
    //     const result = products.find(item => item.id === idFav);
    //     return result;
    // });
    // console.log(listOfFavorites);
    return <div className="favourites__container">
        <div className="table__container">
            <table className="order__table" id="favouriteTable">
                <caption>Favourite Items</caption>
                <thead>
                    <tr>
                        <th>Item Description</th>
                        <th>Price</th>
                        <th>Sale</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {listOfFavorites.map((item) =>
                        <tr>
                            <td>
                                <div className="item__info">
                                    <img src={"images/products/" + item.img + ".png"} alt="Cabriolet" height="100" />
                                    <div>
                                        <p className="item__info--title">{item.title}</p>
                                    </div>
                                </div>
                            </td>
                            <td>${item.price}</td>
                            <td>
                                {item.sale && (<span className="item__sale">- {item.salePercent}%</span>)}

                            </td>
                            <td>${item.price - (item.price * (item.salePercent || 0)) / 100}</td>
                            <td>
                                <button className="item__favourite"><img src="images/product__favourite--true.png" alt="favourite" height="20" /></button>
                            </td>
                        </tr>
                    )}

                </tbody> */}
            </table>
        </div>
    </div>;
};