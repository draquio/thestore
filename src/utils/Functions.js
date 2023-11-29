export const CheckProductInCart = (product, cart) => {
  return cart.some((item) => item.id === product.id);
};

export const TotalPrice = (cart) => {
  const totalprice = Array.from(cart.values()).reduce((acumulador, item) => {
    return acumulador + item.price * item.quantity;
  }, 0);
  return totalprice;
};

export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const getCategories = (products) => {
  const listcategories = products.map((product) => product.category);
  const categories = listcategories.filter((categorie, index, self) => {
    return self.indexOf(categorie) === index;
  });
  return categories;
};
