import React, { useContext } from 'react';

import UpdatableLabel from '../Utility/UpdatableLabel';
import OverviewContext from '../../context/OverviewContext';

function OverviewDetails() {
  const {
    currentVbucks,
    wishlistTotal,
    wishlistCompletionDate,
    passCompletionDate,
    vbucksAtEndOfSeason,
    levelAtEndOfSeason,
  } = useContext(OverviewContext);

  return (
    <div className='overview_details'>
      <h3>Overview</h3>
      <div className='overview_body'>
        <div className='overview_row'>
          <h5>Wishlist Total</h5>
          <UpdatableLabel className='overview_value'>
            {wishlistTotal}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Vbucks Needed</h5>
          <UpdatableLabel className='overview_value'>
            {wishlistTotal > currentVbucks ? wishlistTotal - currentVbucks : 0}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Wishlist Completion Date</h5>
          <UpdatableLabel className='overview_value'>
            {wishlistCompletionDate}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Battle Pass Completion Date</h5>
          <UpdatableLabel className='overview_value'>
            {passCompletionDate}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Vbucks @ End of Season</h5>
          <UpdatableLabel className='overview_value'>
            {vbucksAtEndOfSeason}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Vbucks After Wishlist</h5>
          <UpdatableLabel className='overview_value'>
            {vbucksAtEndOfSeason - wishlistTotal}
          </UpdatableLabel>
        </div>
        <div className='overview_row'>
          <h5>Level @ End of Season</h5>
          <UpdatableLabel className='overview_value'>
            {levelAtEndOfSeason}
          </UpdatableLabel>
        </div>
      </div>
    </div>
  );
}

export default OverviewDetails;
