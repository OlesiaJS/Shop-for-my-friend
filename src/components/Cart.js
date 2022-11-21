import { useSelector, useDispatch } from 'react-redux';
import { deleteItemInCart } from "../features/account/accountSlice";
import { increment, decrement } from "../features/account/accountSlice";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Cart() {

    const shoppingCarts = useSelector((state) => state.account.value.cart);
    const products = useSelector(state => state.products.value);
    const dispatch = useDispatch();

    const listOrder = shoppingCarts.map((idOrd) => {
        let RESULT = products.find(el => el.id === idOrd.id);
        return RESULT;
    });

    let listOrderCount = shoppingCarts.map((idOrd) => {
        (listOrder.find((el) => el.id === idOrd.id))['count'] = idOrd.count;
        return listOrder;
    });

    console.log(listOrderCount);

    const total = listOrder.reduce((acc, curr) => acc + curr.price * curr.count, 0);

    return <section className="category" data-name="product">

        <h2 className="titleHeader">My Order</h2>
        <div className="category__container">
            {(shoppingCarts.length < 0) && <p>"Корзина пуста"</p>}
            <div className="content-wrapper shopping-container pd-1-2">
                <ul className="shopping-list">
                    {listOrder.map((item, i) => (
                        <li className="shopping-item">
                            <span>{i + 1}</span>
                            <div className="image-wrapper item__image">
                                <img src={"/images/products/" + item.img + ".jpg"} width={'100%'} alt={item.title} />
                            </div>
                            <div className="item">
                                <p className="item__title">{item.title}</p>
                                <div className="item__details">
                                    <span className="item__price">{`${item.price} $`}</span>
                                    <div className="counter">
                                        <IconButton aria-label="increment" onClick={() => dispatch(increment({ id: item.id, count: item.count }))}>
                                            <AddIcon />
                                        </IconButton>
                                        <p>{item.count}</p>
                                        <IconButton aria-label="decrement" onClick={() => dispatch(decrement({ id: item.id, count: item.count }))}>
                                            <RemoveIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                            <span className="item__price">{`${item.count * item.price} $`}</span>
                            <IconButton aria-label="delete" onClick={() => dispatch(deleteItemInCart(item.id))}>
                                <DeleteIcon />
                            </IconButton>
                        </li>
                    ))}
                </ul>
                <div className="total">
                    <span>Total: </span>
                    <p>{total} $  </p>
                </div>
            </div>
            {/* {listOrder.map((item) =>
                <><div className="product">
                    <button className="product__favourite" onClick={() => {
                        checkIfFOrder(item.id)
                            ? dispatch(deleteItemInCart(item.id))
                            : dispatch(addItemInCart(item.id));

                    }}>
                        <img src="/images/delete.png" alt="delete" height="20" />
                    </button>
                    <img src={"/images/products/" + item.img + ".jpg"} className="product__img" alt="imgName"
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
            )} */}
        </div>
    </section>;

};