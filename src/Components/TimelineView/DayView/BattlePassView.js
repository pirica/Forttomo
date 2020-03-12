import React from 'react';

import uuidv4 from 'uuidv4';

function BattlePassView({ items }) {
  return (
    <div className='battlepass_unlocks'>
      <h5>Unlocked Items</h5>
      <div className='item_wrapper'>
        {items.map(item => {
          const key = uuidv4();
          return (
            <div className={`${item.rarity} battlepass_item`} key={key}>
              <div className='item_level'>{item.level}</div>
              <div className='item_name'>{item.name}</div>
              <div className='item_type'>({item.type})</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BattlePassView;
