import AppContext from '../../context/AppContext';
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';

import './Cart.css';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
    const {cartItems, isCartVisible} = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
        <div className="cart-items">
            {cartItems.map((cartItem) => (
                <CartItem data={cartItem} key={cartItem.id} />
            ))}
        </div>

        <div className="cart-resume">
            {cartItems.length > 0 ? formatCurrency(totalPrice) : 'Carrinho vazio'}
        </div>
    </section>
  )
}

export default Cart