import React from 'react';
import PropTypes from 'prop-types';

const BattlePassView = ({ items }) => {
  return (
    <div className='battlepass_unlocks'>
      <h5>Battle Pass Unlocks</h5>
      <div className='item_wrapper'>
        {items.map(item => {
          const key = `${item.name}+${item.level}`;
          return (
            <div className={`${item.rarity} battlepass_item`} key={key}>
              <div className='item_level'>{item.level}</div>
              <div className='item_details'>
                <div className='item_name'>{item.name}</div>
                <div className='item_type'>({item.type})</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

BattlePassView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      level: PropTypes.number,
      rarity: PropTypes.string,
      type: PropTypes.string,
    })
  ).isRequired,
};

export default BattlePassView;
