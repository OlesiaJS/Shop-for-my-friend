import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
export default function AboutItem() {
    let { itemId } = useParams();
    const item = useSelector((state) => state.products.value.find((el) => el.id === parseInt(itemId)));
    return <section>
        <div className="info">
            <h2>{item.title} only  <span className="product__price">${item.price - (item.price * (item.salePercent || 0)) / 100}</span></h2>
            <p className="lefting"><img className='picture-about' src={"/images/products/" + item.img + ".jpg"} alt="imgName"
                width={'200px'}></img></p>
            <p className="text-14">Products in our handmade shop. You can order a drawing according to your design. But then consider the time for the work of the master. Phone:123-456-789 :) </p>
            <Link to="/"><p className='text-14 righting'>Back to the main</p></Link>
        </div>

    </section>;
}