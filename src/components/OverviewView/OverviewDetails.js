import React from 'react';
import { useSelector } from 'react-redux';
import UpdatableLabel from '../Utility/UpdatableLabel';

const OverviewDetails = () => {
  const overview = useSelector(state => state.overview);
  const wishlist = useSelector(state => state.wishlist);

  return (
    <div className='overview_details'>
      <h3>Overview</h3>
      <div className='overview_body'>
        <div className='overview_row'>
          <h5>Wishlist Total</h5>
          <UpdatableLabel className='overview_value'>
            {overview.wishlistTotal}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Vbucks Needed</h5>
          <UpdatableLabel className='overview_value'>
            {wishlist.wishlistTotal > overview.currentVbucks
              ? wishlist.total - overview.currentVbucks
              : 0}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Wishlist Completion Date</h5>
          <UpdatableLabel className='overview_value'>
            {overview.wishlistCompletionDate}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Battle Pass Completion Date</h5>
          <UpdatableLabel className='overview_value'>
            {overview.battlePassCompletionDate}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Vbucks @ End of Season</h5>
          <UpdatableLabel className='overview_value'>
            {overview.vbucksAtEndOfSeason}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Vbucks After Wishlist</h5>
          <UpdatableLabel className='overview_value'>
            {overview.vbucksAtEndOfSeason - wishlist.total}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Level @ End of Season</h5>
          <UpdatableLabel className='overview_value'>
            {overview.levelAtEndOfSeason}
          </UpdatableLabel>
        </div>
      </div>
    </div>
  );
};

export default OverviewDetails;
