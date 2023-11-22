import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products/Products";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useFilters } from "./hooks/usefilter";
import {Cart} from "./components/Cart/Cart"

function App() {
  const {filterProducts} = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer/>
    </>
  );
}

export default App;
