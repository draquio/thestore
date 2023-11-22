import { useId } from "react";
import "./Cart.css";
import { useCart } from "../../hooks/useCart";
import {ShopIcon} from "../Icons"

export const Cart = () => {
  const { cart, clearCart, addToCart } = useCart();
  const cartCheckId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckId}>
        <ShopIcon />
      </label>
      <input id={cartCheckId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
              quantity={product.quantity}
            />
          ))}
        </ul>
        { cart.length > 0 && <button onClick={clearCart}>Eliminar todo</button>}
      </aside>
    </>
  );
};

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - {price}$
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};
