// import { products as initialProducts } from "./mocks/products.json";
// import { Products } from "./components/Products/Products";
// import { Header } from "./components/Header/Header";
// import { Footer } from "./components/Footer/Footer";
// import { useFilters } from "./hooks/usefilter";
// import { Cart } from "./components/Cart/Cart";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const { filterProducts } = useFilters();
  // const filteredProducts = filterProducts(initialProducts);
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer/> */}
    </>
  );
}

export default App;
