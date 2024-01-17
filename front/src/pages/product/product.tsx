import * as React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel/carousel";
import Error from "../../components/error/error";
import ProductBody from "../../components/productBody/productBody";
import type { Product } from "../../types/product";

function Product() {
  const productParam: string = useParams();
  const productId: string = productParam.productId;
  const [product, setProduct] = React.useState<Product>();

  async function findProduct(id: string) {
    const res = await fetch("http://localhost:3000/");
    const data: Product[] = await res.json();
    setProduct(data.find((product) => product.id === id));
  }

  React.useEffect(() => {
    findProduct(productId);
  }, []);

  return product ? (
    <div>
      <Carousel product={product} />
      <ProductBody product={product} />
    </div>
  ) : (
    <Error />
  );
}

export default Product;
