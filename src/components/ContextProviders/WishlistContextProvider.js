import React, { useState, useEffect, useContext } from 'react';
import WishlistContext from '../../context/WishlistContext';
import OverviewContext from '../../context/OverviewContext';

import AuthContext from '../../context/AuthContext';

import Firebase from '../../firebase';
import 'firebase/database';

function WishlistContextProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const authContext = useContext(AuthContext);
  const userID = authContext.userID;
  const isUserLoading = authContext.isLoading;
  const { setWishlistTotal } = useContext(OverviewContext);

  useEffect(() => {
    const backupWishlist = () => {
      const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
      const startingWishlist = [
        { name: 'Battle Pass', price: 950, id: 'startingitem' },
      ];

      return storedWishlist || startingWishlist;
    };

    const fetchWishlist = async () => {
      const path = 'users/' + userID + '/wishlist';

      const response = await Firebase.database().ref(path).once('value');
      const wishlist = response.val();

      const newWishlist = wishlist !== null ? wishlist : backupWishlist();
      setWishlist(newWishlist);
    };

    if (!isUserLoading) {
      if (userID) {
        fetchWishlist().then(() => {
          setIsLoading(false);
        });
      } else {
        const newWishlist = backupWishlist();
        setWishlist(newWishlist);
      }
    }
  }, [userID, isUserLoading]);

  useEffect(() => {
    if (!isLoading) {
      if (userID) {
        const path = 'users/' + userID + '/wishlist';

        Firebase.database().ref(path).set(wishlist);
      }

      const wishlistString = JSON.stringify(wishlist);
      localStorage.setItem('wishlist', wishlistString);
    }
  }, [wishlist, userID, isLoading]);

  useEffect(() => {
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
        setWishlist,
        isLoading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContextProvider;
