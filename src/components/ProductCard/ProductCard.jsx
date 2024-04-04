import './ProductCard.css';

import { BsFillCartPlusFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

function ProductCard({data}) {
    const {price, title, thumbnail } = data;
    const {cartItems, setCartItems} = useContext(AppContext);

    const handleAddCart = () => {
        setCartItems([...cartItems, data]);
    }

  return (
    <section className="product-card">
        <img 
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
        alt='product' 
        className='card__image'/>

        <div className='card__info'>
            <h2 className='card__price'>{formatCurrency(price)}</h2>
            <h2 className='card__title'>{title}</h2>
        </div>

        <button className='card__button' onClick={handleAddCart}>
            <BsFillCartPlusFill />
        </button>
    </section>
  )
}

export default ProductCard

ProductCard.propTypes = {
    data: PropTypes.shape({}),
}.isRequired;