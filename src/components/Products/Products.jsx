import "./Product.scss";
import { Link } from "react-router-dom";
import { Filters } from "../Filters/Filters";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AddCartIcon } from "../Icons";

export const Products = ({ products }) => {
  return (
    <main className="products">
      <Filters />
      <ul>
        {products.map((product) => {
          return (
            <Link
              className="item_product"
              key={product.id}
              to={`/article/${product.id}`}
            >
              <li>
                <LazyLoadImage
                  height="100%"
                  width="100%"
                  effect="blur"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <p className="info_price">
                  <strong>{product.title}</strong>
                </p>
                <p>${product.price} / Unidad</p>
                <p className="btn btn_blue base_price"><AddCartIcon /> Comprar</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};
