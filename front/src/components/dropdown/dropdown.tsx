import { useState } from "react";
import upArrow from "../../assets/arrow-up.png";
import "./dropdown.scss";

function Dropdown({ title, body, isList }) {
  // Set dropdown to be closed by default
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "dropdown light-bg " : "dropdown white-bg"}>
      <div className="dropdown__head" onClick={() => setOpen(!open)}>
        <p className="white">{title}</p>

        <img
          src={upArrow}
          alt={open ? "flèche vers le haut" : "flèche vers le bas"}
          className={
            open ? "dropdown__img" : "dropdown__img dropdown__img__rotated"
          }
        />
      </div>
      {isList ? (
        <ul
          className={
            open
              ? "dropdown__body light-bg "
              : "dropdown__body dropdown__body--closed"
          }>
          {body.map((elt) => (
            <li key={elt}>{elt}</li>
          ))}
        </ul>
      ) : (
        <p
          className={
            open
              ? "dropdown__body light-bg "
              : "dropdown__body dropdown__body--closed"
          }>
          {body}
        </p>
      )}
    </div>
  );
}

Dropdown.defaultProps = {
  title: "Description",
  body: "votre description ici...",
  isList: false,
};

export default Dropdown;
