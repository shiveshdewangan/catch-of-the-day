import React from "react";
import { getFunName } from "../helpers";

const StorePicker = ({ history }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const storeName = event.target.store.value;
    history.push(`/store/${storeName}`);
  };

  return (
    <form className="store-selector" onSubmit={handleSubmit}>
      <h2>Please Enter a Store</h2>
      <input
        type="text"
        name="store"
        required
        placeholder="Store Name"
        defaultValue={getFunName()}
      />
      <button type="submit">Visit Store →</button>
    </form>
  );
};

export default StorePicker;
