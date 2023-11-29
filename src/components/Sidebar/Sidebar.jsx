import "./Sidebar.scss"
import { useCart } from "../../hooks/useCart";
import { TotalPrice, formatNumber } from "../../utils/Functions";
import {CartItem} from "../Cart/CartItem"
import { ArrowIcon } from "../Icons";
export const Sidebar = ({HandleCheckout}) => {
  const { cart, addToCart, removeOneFromCart, removeFromCart } = useCart();
  const totalprice = formatNumber(TotalPrice(cart));
  return (
    <aside className="sidebar">
      <div className="info_cart">
          <p>CART ({cart.length})</p>
          <p>TOTAL: ${totalprice.toLocaleString()}</p>
        </div>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
              removeOneFromCart={() => removeOneFromCart(product)}
              removeFromCart={() => removeFromCart(product)}
              quantity={product.quantity}
              length={100}
            />
          ))}
        </ul>
        {cart.length > 0 && (
            <button type="submit" className="btn btn_blue btn_pay" onClick={HandleCheckout}><ArrowIcon/>Buy now</button>
            )}
    </aside>
  )
}
