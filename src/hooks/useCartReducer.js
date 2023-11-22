import { useReducer } from "react";
import { CartReducer, initialState } from "../reducers/cartReducer";

export const useCartReducer = () => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const addToCart = (product) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    const removeFromCart = (product) =>
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
      });

    const clearCart = () =>
      dispatch({
        type: "CLEAR_CART",
      });

    return { addToCart, removeFromCart, clearCart, state };

  // const [state, dispatch] = useReducer(CartReducer, initialState);

  // const addToCart = (product) =>
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: product,
  //   });

  // const removeFromCart = (product) =>
  //   dispatch({
  //     type: "REMOVE_FROM_CART",
  //     payload: product,
  //   });

  // const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // return { state, addToCart, removeFromCart, clearCart };
};
