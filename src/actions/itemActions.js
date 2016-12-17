import * as types from './actionTypes';
import itemApi from '../api/firebaseItemApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items };
}

export function createItemSuccess(item) {
  return { type: types.CREATE_ITEM_SUCCESS, item };
}

export function updateItemSuccess(item) {
  return { type: types.UPDATE_ITEM_SUCCESS, item };
}

export function deleteItemSuccess(itemId) {
  return { type: types.DELETE_ITEM_SUCCESS, itemId };
}

export function doneItemSuccess(item) {
  return { type: types.DONE_ITEM_SUCCESS, item };
}

export function markAllDoneSuccess() {
  return { type: types.MARK_ALL_DONE_SUCCESS };
}

export function loadItems() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return itemApi.getAllItems().then((items) => {
      dispatch(loadItemsSuccess(items));
    }).catch((error) => {
      throw error;
    });
  };
}

export function saveItem(item) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return itemApi.saveItem(item).then((it) => {
      it.id ? dispatch(updateItemSuccess(it)) :
                dispatch(createItemSuccess(it));
    }).catch((error) => {
      dispatch(ajaxCallError(error));
      throw error;
    });
  };
}

export function deleteItem(itemId) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return itemApi.deleteItem(itemId).then(() => {
      dispatch(deleteItemSuccess(itemId));
    }).catch((error) => {
      throw error;
    });
  };
}

export function doneItem(itemId) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return itemApi.doneItem(itemId).then((item) => {
      dispatch(doneItemSuccess(item));
    }).catch((error) => {
      throw error;
    });
  };
}

export function markAllDone() {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return itemApi.markAllDone().then(() =>
      dispatch(markAllDoneSuccess())
    ).catch((error) => {
      throw error;
    });
  };
}
