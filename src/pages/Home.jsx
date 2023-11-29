import { products as initialProducts } from "../mocks/products.json";
import { Products } from "../components/Products/Products";
import { useFilters } from "../hooks/usefilter";

export const Home = () => {
    const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  return (
    <Products products={filteredProducts} />
  )
}
