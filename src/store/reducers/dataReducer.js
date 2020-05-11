import { FETCH_DATA } from '../actions/types';

const initialState = {
  startOfSeason: null,
  endOfSeason: null,
  stwSeasonType: null,
  battlePass: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
