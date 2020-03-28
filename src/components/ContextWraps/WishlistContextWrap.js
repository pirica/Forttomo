import React, { useState, useEffect, useContext } from 'react';
import WishlistContext from './../../context/WishlistContext';
import OverviewContext from './../../context/OverviewContext';

function WishlistContextWrap({ children }) {
  const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
  const startingWishlist = [
    { name: 'Battle Pass', price: 950, id: 'startingitem' }
  ];
  const [wishlist, setWishlist] = useState(storedWishlist || startingWishlist);
  const { setWishlistTotal } = useContext(OverviewContext);

  useEffect(() => {
    const wishlistString = JSON.stringify(wishlist);
    localStorage.setItem('wishlist', wishlistString);

    if (wishlist.length > 0) {
      const total = wishlist
        .map(el => +el.price)
        .reduce((sum, value) => sum + value);
      setWishlistTotal(total);
    }
  }, [wishlist, setWishlistTotal]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContextWrap;
