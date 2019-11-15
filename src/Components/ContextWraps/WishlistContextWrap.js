import React, { useState, useEffect } from 'react';
import WishlistContext from './../../context/WishlistContext';

function WishlistContextWrap({ children }) {
  const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
  const [wishlist, setWishlist] = useState(storedWishlist || []);
  const [wishlistTotal, setWishlistTotal] = useState(0);
  const [completionDate, setCompletionDate] = useState('NA');

  useEffect(() => {
    const wishlistString = JSON.stringify(wishlist);
    localStorage.setItem('wishlist', wishlistString);

    if (wishlist.length > 0) {
      const total = wishlist
        .map(el => +el.price)
        .reduce((sum, value) => sum + value);
      setWishlistTotal(total);
    }
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistTotal,
        completionDate,
        setWishlist,
        setWishlistTotal,
        setCompletionDate
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContextWrap;
