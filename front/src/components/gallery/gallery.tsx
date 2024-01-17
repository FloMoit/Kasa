import * as React from "react";
import { Link } from "react-router-dom";
import Card from "../card/card";
import "./gallery.scss";
import type { Product } from "../../types/product";

function Gallery() {
  const [products, setProducts] = React.useState<Product[]>([]);

  async function getData() {
    const res = await fetch("http://localhost:3000/");
    const data: Product[] = await res.json();
    setProducts(data);
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    // Create one card per houses data entry
    <div className="gallery">
      {products.map((product) => (
        <Link
          className="gallery__link"
          key={`${product.id}`}
          to={`/product/${product.id}`}>
          <Card title={`${product.title}`} image={`${product.cover}`} />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
