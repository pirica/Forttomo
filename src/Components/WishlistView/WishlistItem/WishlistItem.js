import React, { useState, useEffect } from "react";

import WantedItem from "../WantedItem";
import ItemPrices from "./../../../data/ItemPrices";
import CategorySelect from "./CategorySelect";

function WishlistItem(props) {
  const [name, setName] = useState(props.name || "ITEM NAME");
  const [category, setCategory] = useState(props.category || "Uncommon Outfit");
  const [price, setPrice] = useState(props.price || "0");

  const itemRef = React.createRef();

  const setBackground = className => {
    // All contrails and music packs are rare only
    className = ["contrail", "music"].includes(className) ? "rare" : className;

    itemRef.current.classList = "wishlist_item";
    itemRef.current.classList.add(className);
  };

  const setDefaultPrice = category => {
    let defaultPrice = 0;
    category = category.toLowerCase();

    for (const item of ItemPrices) {
      if (item.category === category) defaultPrice = item.cost;
    }

    setPrice(defaultPrice);
  };

  const updateItem = (name, category, price) => {
    const updatedItem = new WantedItem(name, category, price);

    props.onChange(props.position, updatedItem);
    setName(name);
    setCategory(category);
    setPrice(price);
  };

  useEffect(() => {
    let rarity = category.split(" ")[0].toLowerCase();

    setBackground(rarity);
    setDefaultPrice(category);
  });

  return (
    <div className="wishlist_item" ref={itemRef}>
      <input
        type="text"
        className="wishlist_input item_name_input"
        defaultValue={props.name}
        onChange={e => updateItem(e.target.value, category, price)}
      />
      <CategorySelect
        category={category}
        onChange={e => {
          setDefaultPrice(e.target.value);
          updateItem(name, e.target.value, price);
        }}
      />
      <input
        type="text"
        className="wishlist_input item_cost_input"
        value={price}
        onChange={e => updateItem(name, category, e.target.value)}
      />
      <div
        className="wishlist_delete"
        onClick={() => props.removeItem(props.position)}
      >
        x
      </div>
      <div className="wishlist_handler">=</div>
    </div>
  );
}

export default WishlistItem;
