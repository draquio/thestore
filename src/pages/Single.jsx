import { useParams } from "react-router-dom";
import { SingleProduct } from "../components/SingleProduct/SingleProduct";

export const Single = () => {
  const params = useParams();
  const { id } = params;
  return <SingleProduct id={id} />;
};
