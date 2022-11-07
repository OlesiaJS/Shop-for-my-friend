import { useSelector } from 'react-redux';

export default function AboutItem() {
    const products = useSelector((state) => state.products.value);
    console.log(products);
    return <section className="container">
        <div className="info"> {products.map((item) =>
            <><h2>{item.name}</h2><p className="lefting"><img src={"images/products/" + item.img + ".jpg"} alt="imgName"
                width={'100px'}></img></p><p className="text-14">{item.price}</p><p className="text-14">Products in our handmade shop.You can order a drawing according to your design.But then consider the time for the work of the master.</p></>
        )
        }
        </div>
    </section >;

}