import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../card/card.tsx";
import "./gallery.scss";

function Gallery() {
  const [houses, setHouses] = useState([]);

  async function getData() {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    setHouses(data);
  }
  getData();

  return (
    // Create one card per houses data entry
    <div className="gallery">
      {houses.map((house) => (
        <Link
          className="gallery__link"
          key={`${house.id}`}
          to={`/house/${house.id}`}>
          <Card title={`${house.title}`} image={`${house.cover}`} />
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
