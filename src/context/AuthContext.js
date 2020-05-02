import React from 'react';

export default React.createContext({
  logout: () => {},
  userID: null,
  displayName: null,
  isLoading: null,
});
