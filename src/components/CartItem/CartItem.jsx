import formatCurrency from '../../utils/formatCurrency';
import { BsCartDashFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

import './CartItem.css';

function CartItem({data}) {
    const {thumbnail, title, price} = data;
    const {cartItems, setCartItems} = useContext(AppContext);
    
    const handleRemoveItem = () => {
        const newCartItems = cartItems.filter((item) => item.id !== data.id);
        setCartItems(newCartItems);
    };

  return (
    <section className='cart-item'>
        <img src={thumbnail} alt="Product" className="cart-item-image"/>
        <div className="cart-item-content">
            <h3 className="cart-item-title">{title}</h3>
            <h3 className="cart-item-price">{formatCurrency(price)}</h3>
            <button className="cart-item-remove" onClick={handleRemoveItem}>
                <BsCartDashFill />
            </button>

        </div>
    </section>
  )
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;