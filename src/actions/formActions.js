import axios from 'axios';
import config from '../config';

import {
  GET_FORM_FAILURE,
  GET_FORM_SUCCESS,
  GET_FORM_REQUEST,
  CREATE_FORM_REQUEST,
  CREATE_FORM_FAILURE,
  CREATE_FORM_SUCCESS, UPDATE_FORM_FIELD
} from '../constants/formConstants';
import { history } from 'react-router-dom'

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
  form: {
    id: form.id,
    fields: []
  },
});

export const createFormFailure = error => ({
  type: CREATE_FORM_FAILURE,
  error,
});

export const createForm = (cb) => (dispatch) => {
  dispatch(createFormRequest());
  return axios.post(config.CREATE_URL, { content: "" }).then(
    res => {
      const dis = dispatch(createFormSuccess(res.data));
      cb(res.data.payload.id);
      return dis;
    },
    error => dispatch(createFormFailure(error)),
  );
};

export const updateFormField = (field) => ({
  type: UPDATE_FORM_FIELD,
  field: field
})