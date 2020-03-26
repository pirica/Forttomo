import React from 'react';

function WishlistInfo({ completionDate, wishlistTotal, vbucksTotal }) {
  return (
    <div className='wishlist_data'>
      <div>Completion Date</div>
      <div>Total</div>
      <div>Needed</div>
      <div className='completion_date'>{completionDate}</div>
      <div className='wishlist_total'>{wishlistTotal}</div>
      <div className='wishlist_needed_vbucks'>
        {wishlistTotal - vbucksTotal > 0 ? wishlistTotal - vbucksTotal : 0}
      </div>
    </div>
  );
}

export default WishlistInfo;
