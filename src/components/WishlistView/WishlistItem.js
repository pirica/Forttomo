import React, { useState } from "react";

import WantedItem from "./WantedItem";

function WishlistItem(props) {
  const [name, setName] = useState(props.name || "ITEM NAME");
  const [price, setPrice] = useState(props.price || "0");

  const itemRef = React.createRef();

  const updateItem = (name, price) => {
    const updatedItem = new WantedItem(name, price, props.id);

    setName(name);
    setPrice(price);
    props.onChange(props.position, updatedItem);
  };

  return (
    <div className="wishlist_item wishlist_columns" ref={itemRef}>
      <input
        type="text"
        className="wishlist_input item_name_input"
        defaultValue={props.name}
        onChange={e => updateItem(e.target.value, price)}
      />
      <input
        type="text"
        className="wishlist_input item_cost_input"
        value={price}
        onChange={e => updateItem(name, e.target.value)}
      />
      <div
        className="wishlist_delete"
        onClick={() => props.removeItem(props.position)}
      >
        <i className="fas fa-times"></i>
      </div>
      <div className="wishlist_handler">
        <i className="fas fa-grip-lines"></i>
      </div>
    </div>
  );
}

export default WishlistItem;
