import axios from 'axios';
import { reset } from 'redux-form';
import history from '../history';
import { tokenConfig } from './auth';
import { GET_CRUDS, GET_CRUD, ADD_CRUD, DELETE_CRUD, EDIT_CRUD } from './types';

// GET TODOS
export const getCruds = () => async (dispatch, getState) => {
  const res = await axios.get('/api/auth/cruds/', tokenConfig(getState));
  dispatch({
    type: GET_CRUDS,
    payload: res.data
  });
};

// GET TODO
export const getCrud = id => async (dispatch, getState) => {
  const res = await axios.get(`/api/auth/cruds/${id}/`, tokenConfig(getState));
  dispatch({
    type: GET_CRUD,
    payload: res.data
  });
};

// ADD TODO
export const addCruds = formValues => async (dispatch, getState) => {
  const res = await axios.post(
    '/api/cruds/',
    { ...formValues },
    tokenConfig(getState)
  );
  dispatch({
    type: ADD_CRUD,
    payload: res.data
  });
  dispatch(reset('crudsForm'));
};

// DELETE TODO
export const deleteCruds = id => async (dispatch, getState) => {
  await axios.delete(`/api/auth/cruds/${id}/`, tokenConfig(getState));
  dispatch({
    type: DELETE_CRUD,
    payload: id
  });
  history.push('/');
};

// EDIT TODO
export const editCruds = (id, formValues) => async (dispatch, getState) => {
  const res = await axios.patch(
    `/api/auth/cruds/${id}/`,
    formValues,
    tokenConfig(getState)
  );
  dispatch({
    type: EDIT_CRUD,
    payload: res.data
  });
  history.push('/');
};
