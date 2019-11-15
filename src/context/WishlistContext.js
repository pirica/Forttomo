import React from 'react';

export default React.createContext({
  wishlist: null,
  wishlistTotal: null,
  completionDate: null,
  setWishlist: wishlist => {},
  setWishlistTotal: total => {},
  setCompletionDate: date => {}
});
