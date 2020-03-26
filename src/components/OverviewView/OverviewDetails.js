import React, { useContext } from "react";

import OverviewContext from "../../context/OverviewContext";

function OverviewDetails() {
  const {
    currentVbucks,
    wishlistTotal,
    wishlistCompletionDate,
    passCompletionDate,
    vbucksAtEndOfSeason,
    levelAtEndOfSeason
  } = useContext(OverviewContext);

  return (
    <div className="overview_details">
      <h3>Overview</h3>
      <div className="overview_body">
        <div className="overview_row">
          <h5>Wishlist Total</h5>
          <p>{wishlistTotal}</p>
        </div>
        <div className="overview_row">
          <h5>Vbucks Needed</h5>
          <p>
            {wishlistTotal > currentVbucks ? wishlistTotal - currentVbucks : 0}
          </p>
        </div>
        <div className="overview_row">
          <h5>Wishlist Completion Date</h5>
          <p>{wishlistCompletionDate}</p>
        </div>
        <div className="overview_row">
          <h5>Battle Pass Completion Date</h5>
          <p>{passCompletionDate}</p>
        </div>
        <div className="overview_row">
          <h5>Vbucks @ End of Season</h5>
          <p>{vbucksAtEndOfSeason}</p>
        </div>
        <div className="overview_row">
          <h5>Vbucks After Wishlist</h5>
          <p>{vbucksAtEndOfSeason - wishlistTotal}</p>
        </div>
        <div className="overview_row">
          <h5>Level @ End of Season</h5>
          <p>{levelAtEndOfSeason}</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewDetails;
