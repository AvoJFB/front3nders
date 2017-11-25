import axios from 'axios';
import config from '../config';

import {
  GET_FORM_FAILURE,
  GET_FORM_SUCCESS,
  GET_FORM_REQUEST,
  CREATE_FORM_REQUEST,
  CREATE_FORM_FAILURE,
  CREATE_FORM_SUCCESS, UPDATE_FORM_FIELD, CREATE_FORM_FIELD, UPDATE_FORM_TITLE, UPDATE_FORM_DESCRIPTION,
  UPDATE_FORM_REQUEST, UPDATE_FORM_SUCCESS, UPDATE_FORM_FAILURE, UPDATE_FORM_COLOR
} from '../constants/formConstants';
import {history} from 'react-router-dom'

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

export const createFormSuccess = data => ({
  type: CREATE_FORM_SUCCESS,
  form: {
    id: data.payload.id,
    fields: []
  },
});

export const createFormFailure = error => ({
  type: CREATE_FORM_FAILURE,
  error,
});

export const createForm = (cb) => (dispatch) => {
  dispatch(createFormRequest());
  return axios.post(config.CREATE_URL, {content: {fields: []}}).then(
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
});

export const createFormField = (field) => ({
  type: CREATE_FORM_FIELD,
  field: field,
});

export const updateFormTitle = (title) => ({
  type: UPDATE_FORM_TITLE,
  title: title,
});

export const updateFormDescription = (description) => ({
  type: UPDATE_FORM_DESCRIPTION,
  description: description,
});

export const updateFormRequest = () => ({
  type: UPDATE_FORM_REQUEST,
});

export const updateFormSuccess = form => ({
  type: UPDATE_FORM_SUCCESS,
  form,
});

export const updateFormFailure = error => ({
  type: UPDATE_FORM_FAILURE,
  error,
});

export const updateForm = (form) => (dispatch) => {
  dispatch(updateFormRequest());
  return axios.put(`${config.GET_URL}/${form.id}`, form).then(
    res => dispatch(updateFormSuccess(res.data)),
    error => dispatch(updateFormFailure(error)),
  );
};

export const updateFormColor = color => ({
  type: UPDATE_FORM_COLOR,
  color,
});
