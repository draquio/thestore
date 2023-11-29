import { useEffect, useState } from "react";
import { products } from "../../mocks/products.json";
import { ImageSectionProduct } from "./ImageSectionProduct";
import { InfoSectionProduct } from "./InfoSectionProduct";
import "./SingleProduct";


export const SingleProduct = ({ id }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    try {
      const response = products.filter((item) => item.id == id);
      setProduct(response[0]);
    } catch (error) {
      console.error(error);
    }
  }, [id]);
  if (!product) return "";
  return (
    <>
      <div className="single_article">
        <ImageSectionProduct images={product.images} title={product.title} />
        <InfoSectionProduct product={product} />
      </div>
    </>
  );
};
