import React, { useEffect } from 'react';

function WishlistItem({ name, category, price }) {
    const itemRef = React.createRef();

    const setBackground = className => {
        // All contrails and music packs are rare only
        className = ['contrail', 'music'].includes(className)
            ? 'rare'
            : className;

        itemRef.current.classList = 'wishlist_item';
        itemRef.current.classList.add(className);
    };

    const updateBackground = e => {
        let rarity = e.target.value.split(' ')[0].toLowerCase();

        setBackground(rarity);
    };

    useEffect(() => {
        let rarity = category.split(' ')[0].toLowerCase();

        setBackground(rarity);
    });

    return (
        <div className='wishlist_item' ref={itemRef}>
            <input
                type='text'
                className='wishlist_input item_name_input'
                defaultValue={name}
            />
            <select onChange={updateBackground}>
                <optgroup label='Outfit'>
                    <option>Uncommon Outfit</option>
                    <option>Rare Outfit</option>
                    <option>Epic Outfit</option>
                    <option>Legendary Outfit</option>
                </optgroup>
                <optgroup label='Pickaxe'>
                    <option>Uncommon Pickaxe</option>
                    <option>Rare Pickaxe</option>
                    <option>Epic Pickaxe</option>
                </optgroup>
                <optgroup label='Glider'>
                    <option>Uncommon Glider</option>
                    <option>Rare Glider</option>
                    <option>Epic Glider</option>
                    <option>Legendary Glider</option>
                </optgroup>
                <optgroup label='Emote'>
                    <option>Uncommon Emote</option>
                    <option>Rare Emote</option>
                    <option>Epic Emote</option>
                </optgroup>
                <optgroup label='Wrap'>
                    <option>Uncommon Wrap</option>
                    <option>Rare Wrap</option>
                    <option>Epic Wrap</option>
                </optgroup>
                <optgroup label='Backbling'>
                    <option>Uncommon Backbling</option>
                    <option>Rare Backbling</option>
                    <option>Epic Backbling</option>
                </optgroup>
                <optgroup label='Other'>
                    <option>Contrail</option>
                    <option>Music</option>
                    <option>Other</option>
                </optgroup>
            </select>
            <input
                type='text'
                className='wishlist_input item_cost_input'
                defaultValue={price}
            />
            <div className='wishlist_delete'>x</div>
            <div className='wishlist_handler'>=</div>
        </div>
    );
}

export default WishlistItem;
