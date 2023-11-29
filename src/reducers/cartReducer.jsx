export const initialState = JSON.parse(window.localStorage.getItem("cart")) || [];

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const CartReducer = (state, action) => {
  const { type: actionType, payload: ActionPayload } = action;
  switch (actionType) {
    case "ADD_TO_CART": {
      const { id, quantity } = ActionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }
      const newState = [...state, { ...ActionPayload, quantity: quantity }];
      updateLocalStorage(newState);
      return newState;
    }
    case "REMOVE_ONE_FROM_CART": {
      const { id } = ActionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity -= 1;
        updateLocalStorage(newState);
        return newState;
      }
      return ""
    }
    case "REMOVE_FROM_CART": {
      const { id } = ActionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case "CLEAR_CART": {
      updateLocalStorage([]);
      return [];
    }
  }
};
