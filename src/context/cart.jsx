import { createContext } from "react";
import {useCartReducer} from "../hooks/useCartReducer"

export const CartContext = createContext();


export function CardProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, removeOneFromCart, totalprice } = useCartReducer();
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
        removeOneFromCart,
        totalprice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
