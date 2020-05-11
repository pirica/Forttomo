import { SET_OVERVIEW } from '../actions/types';

const initialState = {
  currentVbucks: 0,
  wishlistTotal: 0,
  wishlistCompletionDate: null,
  battlePassCompletionDate: null,
  vbucksAtEndOfSeason: null,
  levelAtEndOfSeason: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_OVERVIEW:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
