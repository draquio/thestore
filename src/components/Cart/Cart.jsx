import "./Cart.scss";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "./CartItem";
import { ArrowIcon, TrashIcon } from "../Icons";
import { TotalPrice, formatNumber } from "../../utils/Functions";
import { Link } from "react-router-dom";

export const Cart = ({ isActiveMenu, closeMenu }) => {
  const { cart, clearCart, addToCart, removeOneFromCart, removeFromCart } =
    useCart();
  const totalprice = formatNumber(TotalPrice(cart));
  return (
    <>
      <div
        className={`close_black_block ${isActiveMenu ? "menu_active" : ""}`}
        onClick={closeMenu}
      ></div>
      <aside className={`cart ${isActiveMenu ? "menu_active" : ""}`}>
        <div className="info_cart">
          <p>CART ({cart.length})</p>
          <p>${totalprice.toLocaleString()}</p>
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
            />
          ))}
        </ul>
        {cart.length > 0 && (
          <>
            <Link className="btn btn_blue pay_now" onClick={closeMenu} to={"/checkout"}>
              <ArrowIcon /> Pay now
            </Link>
            <button className="btn btn_blue clean_items" onClick={clearCart}>
              <TrashIcon /> Clean cart
            </button>
          </>
        )}
      </aside>
    </>
  );
};
