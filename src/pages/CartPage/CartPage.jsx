import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './CartPage.css';
import { ProductSepratorContext } from '../../context/StoreContext';
import { productData } from '../../assets';

function CartPage() {
    const { count ,removeItem,updateRealCount,discountHandler,subTotal} = useContext(ProductSepratorContext);
    const [coupon, setCoupon] = useState("");

    const [cloneCount,setCloneCount]=useState(count);

    const increment = (id) => {
        setCloneCount((prev) => ({
            ...prev,
            [id]: prev[id] + 1
        }));
    };

    const decrement = (id) => {
        setCloneCount((prev) => ({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0
        }));
    };

    useEffect(()=>{
        setCloneCount(count);
    },[count]);


    const applyCoupon = (e) => {
        e.preventDefault(); // stop page reload
        discountHandler(coupon);
    };

    return <section id='cart_section_area'>
        {/* {Object.keys(count).length===0?(<p>Cart Is Empty</p>):( */}
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8'>
                    <table className='table cart__table'>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>Product</th>
                                <th className='th_price'>Price</th>
                                <th>Quantity</th>
                                <th className='th_subtotal'>Subtotal</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(count).map((id) => {
                                const product = productData.find(
                                    (item) => item.id === Number(id)
                                );
                                if (!product) return null;

                                return <tr>
                                    <td className='td_thumb'>
                                        <Link to="/cart">
                                            <img src={product.productImage} alt="td_thumb_image" />
                                        </Link>
                                    </td>
                                    <td className='td_name'>
                                        <Link to="/cart">{product.title}</Link>
                                    </td>
                                    <td className='td_price'>{product.price}</td>
                                    <td className='td_quantity'>
                                        <div className="sdd-wrap-inc">
                                            <div className="dec qtybutton" onClick={()=>decrement(id)}>-</div>
                                            <div className="number_display_div">{cloneCount[id]}</div>
                                            <div className="inc qtybutton" onClick={()=>increment(id)}>+</div>
                                        </div>
                                    </td>
                                    <td className='td_subtotal'>
                                        Tk {( count[id] * parseFloat(product.price.replace("Tk", ""))).toFixed(2)}
                                    </td>
                                    <td className='td_remove'>
                                        <a href="#" onClick={(e) => { e.preventDefault(); removeItem(product.id) }}>
                                            ×
                                        </a>
                                    </td>
                                </tr>;
                            })}

                            <tr>
                                <td colSpan="6">
                                    <div className="cart__actions-form">
                                        <input
                                            type="text"
                                            name="discount"
                                            placeholder="Coupon code"
                                            value={coupon}
                                            onChange={(e) => setCoupon(e.target.value)}
                                        />

                                        <button
                                            type="button"
                                            className="cart_submit_button"
                                            onClick={applyCoupon}
                                        >
                                            Apply coupon
                                        </button>
                                    </div>

                                    <div className="update__cart-btn text-end">
                                        <button type="submit" className="cart_submit_button" onClick={()=>updateRealCount(cloneCount)}>Update cart</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-lg-4'>
                    <div className='cart__collaterals-wrap'>
                        <h2 className="title">Cart totals</h2>
                        <ul>
                            <li>
                                Subtotal <span>Tk {subTotal}</span>
                            </li>
                            <li>
                                Total <span className='span_amount'>Tk {subTotal}</span>
                            </li>
                        </ul>
                        <button className='cart_submit_button'>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
        {/* )
        } */}
    </section>;
}

export default CartPage;