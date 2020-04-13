import React from 'react';

import InputContextWrap from './InputContextWrap';
import WishlistContextWrap from './WishlistContextWrap';
import OverviewContextWrap from './OverviewContextWrap';
import DataContextWrap from './DataContextWrap';

function ContextWrap({ children }) {
  return (
    <DataContextWrap>
      <InputContextWrap>
        <OverviewContextWrap>
          <WishlistContextWrap>{children}</WishlistContextWrap>
        </OverviewContextWrap>
      </InputContextWrap>
    </DataContextWrap>
  );
}

export default ContextWrap;
