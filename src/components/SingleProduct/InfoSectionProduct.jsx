import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { CheckProductInCart } from "../../utils/Functions";
import { AddCartIcon, MinusIcon, PlusIcon, RemoveCartIcon } from "../Icons";
import "../../Scss/buttons.scss";

export const InfoSectionProduct = ({ product }) => {
  const { addToCart, cart, removeFromCart } = useCart();
  const discount = Math.round(product.discountPercentage) / 100;
  const oldprice = Math.round(product.price * discount + product.price);
  const [quantity, setQuantity] = useState(1);
  const handleChangequantity = (value) => {
    setQuantity((prevState) => (prevState += value));
  };
  return (
    <div className="info_section">
      <div className="category">{product.category}</div>
      <h1 className="title">{product.title}</h1>
      <p className="description">{product.description}</p>
      <div className="price_info">
        <div className="price_discount">
          <div className="price">${product.price}</div>
          <p className="oldprice">${oldprice}</p>
        </div>
        <div className="discount">
          {Math.round(product.discountPercentage)}%
        </div>
      </div>
      <div className="action">
        <div className="addremovequantity">
          <button
            className="addlessbutton"
            disabled={quantity <= 1 || CheckProductInCart(product, cart)}
            onClick={() => handleChangequantity(-1)}
          >
            <MinusIcon />
          </button>
          <div className={`addlessbutton quantity ${CheckProductInCart(product, cart) && 'disabled'}`} >{quantity}</div>
          <button
            className="addlessbutton"
            disabled={CheckProductInCart(product, cart)}
            onClick={() => handleChangequantity(1)}
          >
            <PlusIcon />
          </button>
        </div>
        {CheckProductInCart(product, cart) ? (
          <button
            className="addcartbutton btn btn_blue_opositve"
            onClick={() => removeFromCart(product)}
          >
            <RemoveCartIcon/> Remove from Cart
          </button>
        ) : (
          <button
            className="addcartbutton btn btn_blue"
            onClick={() => addToCart(product, quantity)}
          >
            <AddCartIcon/> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
