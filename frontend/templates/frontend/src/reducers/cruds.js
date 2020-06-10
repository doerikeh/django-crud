import _ from 'lodash';
import {
  GET_CRUDS,
  GET_CRUD,
  ADD_CRUD,
  DELETE_CRUD,
  EDIT_CRUD
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CRUDS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_CRUD:
    case ADD_CRUD:
    case EDIT_CRUD:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_CRUD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};