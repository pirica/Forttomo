import React, { useState, useEffect, useContext } from 'react';
import WishlistContext from '../../context/WishlistContext';
import OverviewContext from '../../context/OverviewContext';

import AuthContext from '../../context/AuthContext';

import Firebase from '../../firebase';
import 'firebase/database';

function WishlistContextProvider({ children }) {
  const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
  const startingWishlist = [
    { name: 'Battle Pass', price: 950, id: 'startingitem' },
  ];
  const [wishlist, setWishlist] = useState(storedWishlist || startingWishlist);
  const { userID } = useContext(AuthContext);
  const { setWishlistTotal } = useContext(OverviewContext);

  useEffect(() => {
    const wishlistString = JSON.stringify(wishlist);

    if (userID) {
      const path = 'users/' + userID + '/wishlist';

      Firebase.database().ref(path).set(wishlist);
    }

    localStorage.setItem('wishlist', wishlistString);

    if (wishlist.length > 0) {
      const total = wishlist
        .map(el => +el.price)
        .reduce((sum, value) => sum + value);
      setWishlistTotal(total);
    }
  }, [wishlist, setWishlistTotal, userID]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContextProvider;
