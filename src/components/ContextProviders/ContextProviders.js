import React from 'react';

import InputContextProvider from './InputContextProvider';
import WishlistContextProvider from './WishlistContextProvider';
import OverviewContextProvider from './OverviewContextProvider';
import DataContextProvider from './DataContextProvider';
import AuthContextProvider from './AuthContextProvider';

function ContextProviders({ children }) {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <InputContextProvider>
          <OverviewContextProvider>
            <WishlistContextProvider>{children}</WishlistContextProvider>
          </OverviewContextProvider>
        </InputContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  );
}

export default ContextProviders;
