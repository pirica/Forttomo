import React from "react";

import InputContextWrap from "./InputContextWrap";
import WishlistContextWrap from "./WishlistContextWrap";
import OverviewContextWrap from "./OverviewContextWrap";

function ContextWrap({ children }) {
  return (
    <InputContextWrap>
      <OverviewContextWrap>
        <WishlistContextWrap>{children}</WishlistContextWrap>
      </OverviewContextWrap>
    </InputContextWrap>
  );
}

export default ContextWrap;
