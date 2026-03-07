import { FaCartShopping } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetRI = ()=> {
    const {cart, cartQty}= useContext(CartContext)
   
    return(
        <div>
            <FaCartShopping fontSize={'1.5rem'} />
           {cart.length > 0 &&  <Badge bg='danger'>{cartQty()}</Badge>}
        </div>
    )
}

export default CartWidgetRI