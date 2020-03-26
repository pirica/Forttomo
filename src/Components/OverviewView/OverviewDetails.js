import React, { useContext } from 'react';

import WishlistContext from './../../context/WishlistContext';

function OverviewDetails() {
  const { wishlistTotal } = useContext(WishlistContext);

  return (
    <div className='overview_details'>
      <h3>Overview</h3>
      <div className='overview_body'>
        <div className='overview_row'>
          <h5>Wishlist Total</h5>
          <p>{wishlistTotal}</p>
        </div>
        <div className='overview_row'>
          <h5>Vbucks Needed</h5>
          <p>0000</p>
        </div>
        <div className='overview_row'>
          <h5>Wishlist Completion Date</h5>
          <p>March 1st</p>
        </div>
        <div className='overview_row'>
          <h5>Battle Pass Completion Date</h5>
          <p>0000</p>
        </div>
        <div className='overview_row'>
          <h5>Vbucks @ End of Season</h5>
          <p>0000</p>
        </div>
        <div className='overview_row'>
          <h5>Vbucks After Wishlist</h5>
          <p>0000</p>
        </div>
        <div className='overview_row'>
          <h5>Level @ End of Season</h5>
          <p>0000</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewDetails;
