import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;

    case types.CREATE_ITEM_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.item)
      ];

    case types.UPDATE_ITEM_SUCCESS:
      return [
        ...state.filter((item) => item.id !== action.item.id),
        Object.assign({}, action.item)
      ];

    case types.DELETE_ITEM_SUCCESS:
      return [
        ...state.filter((item) => item.id !== action.itemId)
      ];

    case types.DONE_ITEM_SUCCESS:
      const index = state.findIndex((a) => a.id === action.item.id);
      return state.slice(0, index)
                  .concat(action.item)
                  .concat(state.slice(index + 1));

    case types.MARK_ALL_DONE_SUCCESS:
      let newState = [];
      for (let item of state) {
        let newItem = Object.assign({}, item);
        newItem.done = true;
        newState.push(newItem);
      }
      return [ ...newState ];

    default:
      return state;
  }
}
