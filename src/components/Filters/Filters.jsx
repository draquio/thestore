import { useId } from "react";
import "./Filters.scss";
import { useFilters } from "../../hooks/usefilter";
import { products } from "../../mocks/products.json";
import { getCategories } from "../../utils/Functions";
export const Filters = () => {
  const { filters, setFilters } = useFilters();
  console.log(filters);
  const minPriceId = useId();
  const categoryFilterId = useId();
  const categories = getCategories(products);
  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };
  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceId}>Min Price</label>
        <input
          className="range_price"
          id={minPriceId}
          type="range"
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>{filters.minPrice}$</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          className="select_category"
          id={categoryFilterId}
          onChange={handleChangeCategory}
          value={filters.category}
        >
          <option key={"all"} value="all">
            All
          </option>
          {categories.map((categorie, index) => (
            <option key={index} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};
