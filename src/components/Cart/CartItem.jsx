import { MinusIcon, PlusIcon } from "../Icons";

export const CartItem = ({
    thumbnail,
    price,
    title,
    quantity,
    addToCart,
    removeOneFromCart,
    removeFromCart,
    length = 14
  }) => {
    return (
      <li>
        <img src={thumbnail} alt={title} />
        <div className="info">
          <div className="price_title">
            <p>{title.length >= length ? `${title.slice(0,12)} ..` : title}</p>
            <p><b>${price*quantity}</b></p>
          </div>
          <div className="quantity">
            <button className="btn btn_blue_opositve" onClick={quantity >1 ? removeOneFromCart : removeFromCart}><MinusIcon /></button>
            <div className="quantity_value">{quantity}</div>
            <button className="btn btn_blue_opositve" onClick={addToCart}><PlusIcon /></button>
          </div>
        </div>
      </li>
    );
  };