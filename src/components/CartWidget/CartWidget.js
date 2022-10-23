import beer from './assets/beer.png'

import './CartWidget.css'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <img src={beer} alt='beer' className='CartImg' style={{width:50}}/>
            {totalQuantity}
        </Link>
    );
}

export default CartWidget