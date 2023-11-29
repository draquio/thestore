import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Cart } from "../Cart/Cart";
import { ShopIcon } from "../Icons";
import "./Nav.scss";
import { Link } from "react-router-dom";
export const Nav = () => {
    const [isActiveMenu, setisActiveMenu] = useState(false)
  const { cart } = useCart();
  const handleShowMenu = () => {
    setisActiveMenu(prevState => !prevState)
  }
  return (
    <>
    <nav className="nav">
      <div className="nav_container">
        <div className="nav_logo"><Link to={'/'}>TheStore</Link></div>
        <div className="nav_shop" onClick={handleShowMenu}>
          <ShopIcon className="icon_shop" />
          <div className="shop_item_number" >{cart.length}</div>
        </div>
      </div>
    </nav>
    <Cart isActiveMenu={isActiveMenu} closeMenu={handleShowMenu} />
    </>
  );
};
