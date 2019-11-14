import React from "react";

function CategorySelect(props) {
  const updateParent = e => {
    props.onChange(e);
  };

  return (
    <select value={props.category} onChange={updateParent}>
      <optgroup label="Outfit">
        <option>Uncommon Outfit</option>
        <option>Rare Outfit</option>
        <option>Epic Outfit</option>
        <option>Legendary Outfit</option>
      </optgroup>
      <optgroup label="Pickaxe">
        <option>Uncommon Pickaxe</option>
        <option>Rare Pickaxe</option>
        <option>Epic Pickaxe</option>
      </optgroup>
      <optgroup label="Glider">
        <option>Uncommon Glider</option>
        <option>Rare Glider</option>
        <option>Epic Glider</option>
        <option>Legendary Glider</option>
      </optgroup>
      <optgroup label="Emote">
        <option>Uncommon Emote</option>
        <option>Rare Emote</option>
        <option>Epic Emote</option>
      </optgroup>
      <optgroup label="Wrap">
        <option>Uncommon Wrap</option>
        <option>Rare Wrap</option>
        <option>Epic Wrap</option>
      </optgroup>
      <optgroup label="Backbling">
        <option>Uncommon Backbling</option>
        <option>Rare Backbling</option>
        <option>Epic Backbling</option>
      </optgroup>
      <optgroup label="Other">
        <option>Contrail</option>
        <option>Music</option>
        <option>Other</option>
      </optgroup>
    </select>
  );
}

export default CategorySelect;
