import React, { useState } from 'react';
import OverviewContext from '../../context/OverviewContext';

function OverviewContextProvider({ children }) {
  const [currentVbucks, setCurrentVbucks] = useState(0);
  const [wishlistTotal, setWishlistTotal] = useState(0);
  const [wishlistCompletionDate, setWishlistCompletionDate] = useState('NA');
  const [passCompletionDate, setPassCompletionDate] = useState('NA');
  const [vbucksAtEndOfSeason, setVbucksAtEndOfSeason] = useState(0);
  const [levelAtEndOfSeason, setLevelAtEndOfSeason] = useState(0);

  return (
    <OverviewContext.Provider
      value={{
        currentVbucks,
        setCurrentVbucks,
        wishlistTotal,
        setWishlistTotal,
        wishlistCompletionDate,
        setWishlistCompletionDate,
        passCompletionDate,
        setPassCompletionDate,
        vbucksAtEndOfSeason,
        setVbucksAtEndOfSeason,
        levelAtEndOfSeason,
        setLevelAtEndOfSeason,
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
}

export default OverviewContextProvider;
