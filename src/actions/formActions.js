import axios from 'axios';
import config from '../config';

import {
  GET_FORM_FAILURE,
  GET_FORM_SUCCESS,
  GET_FORM_REQUEST,
  CREATE_FORM_REQUEST,
  CREATE_FORM_FAILURE,
  CREATE_FORM_SUCCESS
} from '../constants/formConstants';

export const getFormRequest = () => ({
  type: GET_FORM_REQUEST,
});

export const getFormSuccess = form => ({
  type: GET_FORM_SUCCESS,
  form,
});

export const getFormFailure = error => ({
  type: GET_FORM_FAILURE,
  error,
});

export const getForm = (id) => (dispatch) => {
  dispatch(getFormRequest());
  return axios.get(`${config.GET_URL}/${id}`).then(
    res => dispatch(getFormSuccess(res.data)),
    error => dispatch(getFormFailure(error)),
  );
};

export const createFormRequest = () => ({
  type: CREATE_FORM_REQUEST,
});

export const createFormSuccess = form => ({
  type: CREATE_FORM_SUCCESS,
  form,
});

export const createFormFailure = error => ({
  type: CREATE_FORM_FAILURE,
  error,
});

export const createForm = () => (dispatch) => {
  dispatch(createFormRequest());
  return axios.post(config.CREATE_URL, { content: "" }).then(
    res => dispatch(createFormSuccess(JSON.parse(res.data.payload))),
    error => dispatch(createFormFailure(error)),
  );
};