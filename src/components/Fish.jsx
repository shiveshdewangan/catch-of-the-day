import React from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

const Fish = ({ details, addToOrder, index }) => {
  const { name, image, price, desc, status } = details;
  const isAvailable = status === "available";

  const handleClick = () => {
    addToOrder(index);
  };

  return (
    <li className="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button disabled={!isAvailable} onClick={handleClick}>
        {isAvailable ? "Add to Order" : "Sold Out!"}
      </button>
    </li>
  );
};

Fish.propTypes = {
  details: PropTypes.object.isRequired,
  addToOrder: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired
};

export default Fish;
