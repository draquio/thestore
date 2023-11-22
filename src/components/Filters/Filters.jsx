import { useId } from "react";
import "./Filters.scss";
import { useFilters } from "../../hooks/usefilter";
export const Filters = () => {
  const {filters, setFilters} = useFilters();
  const minPriceId = useId();
  const categoryFilterId = useId();

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
        <label htmlFor={minPriceId}>Precio</label>
        <input
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
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};
