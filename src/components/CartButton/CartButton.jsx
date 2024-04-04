import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

import './CartButton.css';

function CartButton() {
  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext);

  return (
    <div>
        <button type="button" className='cart__button' onClick={() => setIsCartVisible(!isCartVisible)}>
            <AiOutlineShoppingCart />
            {cartItems.length > 0 && <span className='cart__counter'>{cartItems.length}</span>}
        </button>
    </div>
  )
}

export default CartButton