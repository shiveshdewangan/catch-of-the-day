import React from "react";
import PropTypes from "prop-types";

const EditFishForm = ({ index, fish, updateFish, deleteFish }) => {
  const handleChange = event => {
    const updatedFish = {
      ...fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    updateFish(index, updatedFish);
  };

  return (
    <div className="fish-edit">
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={fish.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={fish.price}
          onChange={handleChange}
        />
        <select name="status" value={fish.status} onChange={handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          placeholder="Desc"
          value={fish.desc}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={fish.image}
          onChange={handleChange}
        />
      </form>
      <button onClick={() => deleteFish(index)}>Remove Fish</button>
    </div>
  );
};

EditFishForm.propTypes = {
  index: PropTypes.string.isRequired,
  fish: PropTypes.object.isRequired,
  deleteFish: PropTypes.func.isRequired
};

export default EditFishForm;
