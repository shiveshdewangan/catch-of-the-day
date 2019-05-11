import React from "react";
import PropTypes from "prop-types";

const AddFishForm = props => {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  const createFish = event => {
    event.preventDefault();

    const fish = {
      nameRef: nameRef.current.value,
      priceRef: parseFloat(priceRef.current.value),
      statusRef: statusRef.current.value,
      descRef: descRef.current.value,
      imageRef: imageRef.current.value
    };

    props.addFish(fish);
    event.currentTarget.reset();
  };

  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input name="name" ref={nameRef} type="text" placeholder="Name" />
      <input name="price" ref={priceRef} type="text" placeholder="Price" />
      <select name="status" ref={statusRef}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea name="desc" ref={descRef} placeholder="Desc" />
      <input name="image" ref={imageRef} type="text" placeholder="Image" />
      <button type="submit">ADD FISH</button>
    </form>
  );
};

AddFishForm.propTypes = {
  addFish: PropTypes.func
};

export default AddFishForm;
