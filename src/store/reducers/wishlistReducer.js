import {
  NEW_WISHLIST,
  SET_WISHLIST,
  ADD_WISHLIST_ITEM,
  REMOVE_WISHLIST_ITEM,
  UPDATE_WISHLIST_ITEM,
  MOVE_WISHLIST_ITEM,
} from './../actions/types';

const initialState = {
  items: [{ name: 'Battle Pass', price: 950, id: 'startingitem' }],
  total: 950,
  shouldSave: false,
};

const countTotal = items =>
  items.map(el => +el.price).reduce((sum, value) => sum + value);

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_WISHLIST:
      return {
        ...state,
        items: action.payload,
        total: countTotal(action.payload),
        shouldSave: false,
      };

    case SET_WISHLIST:
      return {
        ...state,
        items: action.payload,
        total: countTotal(action.payload),
        shouldSave: false,
      };

    case ADD_WISHLIST_ITEM:
      state.items = [...state.items, action.payload];

      return {
        ...state,
        total: countTotal(state.items),
        shouldSave: true,
      };

    case REMOVE_WISHLIST_ITEM:
      state.items = state.items.filter(item => item.id !== action.payload);

      return {
        ...state,
        total: countTotal(state.items),
        shouldSave: true,
      };

    case UPDATE_WISHLIST_ITEM:
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }

        return item;
      });
      return {
        ...state,
        total: countTotal(state.items),
        shouldSave: true,
      };

    case MOVE_WISHLIST_ITEM:
      const newOrder = [...state.items];
      const [removed] = newOrder.splice(action.payload.start, 1);
      newOrder.splice(action.payload.end, 0, removed);

      return {
        ...state,
        items: newOrder,
        total: countTotal(state.items),
        shouldSave: true,
      };
    default:
      return state;
  }
};
