import React from 'react';

import InputContextWrap from './InputContextWrap';
import WishlistContextWrap from './WishlistContextWrap';

function ContextWrap({ children }) {
  return (
    <InputContextWrap>
      <WishlistContextWrap>{children}</WishlistContextWrap>
    </InputContextWrap>
  );
}

export default ContextWrap;
