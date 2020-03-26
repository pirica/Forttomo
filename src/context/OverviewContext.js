import React from "react";

export default React.createContext({
  currentVbucks: null,
  setCurrentVbucks: vbucks => {},
  wishlistTotal: null,
  setWishlistTotal: total => {},
  wishlistCompletionDate: null,
  setWishlistCompletionDate: date => {},
  passCompletiondate: null,
  setPassCompletionDate: date => {},
  vbucksAtEndOfSeason: null,
  setVbucksAtEndOfSeason: vbucks => {},
  levelAtEnfOfSeason: null,
  setLevelAtEndOfSeason: level => {}
});
