import * as React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel/carousel";
import Error from "../../components/error/error";
import ProductBody from "../../components/productBody/productBody";
import type { Product } from "../../types/product";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = React.useState<{
    data: Product | null;
    loading: boolean;
  }>({ data: null, loading: true });

  async function findProduct(id: string) {
    const res = await fetch("http://localhost:3000/" + id);
    const data: Product = await res.json();
    setProduct({ data: data, loading: false });
  }

  React.useEffect(() => {
    findProduct(productId as string);
  }, []);

  if (product.loading) {
    return (
      <div>
        <h1>Chargement</h1>
      </div>
    );
  }

  return product.data ? (
    <>
      <Carousel product={product.data} />
      <ProductBody product={product.data} />
    </>
  ) : (
    <Error />
  );
}

export default Product;
