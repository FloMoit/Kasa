import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import type { Product } from "../../types/product";
import "./carousel.scss";

function Carousel(props) {
  const [index, setIndex] = useState(1);

  const pictures = props.product.pictures;
  const numPictures = pictures.length;

  const scroll = (direction: string) =>
    direction === "right"
      ? setIndex(index === numPictures ? 1 : index + 1)
      : setIndex(index === 1 ? numPictures : index - 1);

  return (
    <div className="carousel light-bg">
      {numPictures > 1 && (
        <div className="carousel__arrows">
          <img
            src={arrowLeft}
            alt="flèche gauche"
            className="carousel__arrow carousel__arrow--left"
            onClick={() => scroll("left")}
          />
          <img
            src={arrowRight}
            alt="flèche droite"
            className="carousel__arrow carousel__arrow--right"
            onClick={() => scroll("right")}
          />
        </div>
      )}
      <p className="carousel__number white">
        {" "}
        {index}/{numPictures}
      </p>
      <img
        className="carousel__img"
        src={pictures[index - 1]}
        alt="une des photos du logement"
      />
    </div>
  );
}

export default Carousel;
