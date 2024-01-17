import { Fragment } from "react";
import Dropdown from "../dropdown/dropdown";
import Host from "../host/host";
import Rating from "../rating/rating";
import Tag from "../tag/tag";
import type { Product } from "../../types/product";
import "./productBody.scss";

function ProductBody(props: { product: Product }) {
  // Get house data from context
  const { product } = props;

  return (
    // Display this data on House page
    <>
      <section className="product">
        <div className="product__head">
          <h1 className="product__title">{product.title}</h1>
          <h2 className="product__location">{product.location}</h2>
          <div className="product__tags">
            {product.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        </div>
        <div className="product__host">
          <Host host={product.host} />
          <Rating rating={product.rating} />
        </div>
      </section>

      <div className="product__desc">
        <Dropdown title="Description" body={product.description} />
        <Dropdown title="Équipements" body={product.equipments} />
      </div>
    </>
  );
}

export default ProductBody;
