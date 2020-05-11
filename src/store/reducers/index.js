import { combineReducers } from 'redux';

import inputReducer from './inputReducer';
import authReducer from './authReducer';
import dataReducer from './dataReducer';
import wishlistReducer from './wishlistReducer';
import overviewReducer from './overviewReducer';

export default combineReducers({
  input: inputReducer,
  auth: authReducer,
  data: dataReducer,
  wishlist: wishlistReducer,
  overview: overviewReducer,
});
