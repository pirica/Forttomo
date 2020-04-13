import React from 'react';

import InputContextProvider from './InputContextProvider';
import WishlistContextProvider from './WishlistContextProvider';
import OverviewContextProvider from './OverviewContextProvider';
import DataContextProvider from './DataContextProvider';

function ContextProviders({ children }) {
  return (
    <DataContextProvider>
      <InputContextProvider>
        <OverviewContextProvider>
          <WishlistContextProvider>{children}</WishlistContextProvider>
        </OverviewContextProvider>
      </InputContextProvider>
    </DataContextProvider>
  );
}

export default ContextProviders;
