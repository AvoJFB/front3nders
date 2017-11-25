import {
  GET_FORM_REQUEST,
  GET_FORM_FAILURE,
  GET_FORM_SUCCESS,
  CREATE_FORM_FAILURE,
  CREATE_FORM_SUCCESS,
  CREATE_FORM_REQUEST,
  UPDATE_FORM_FIELD,
  CREATE_FORM_FIELD,
  UPDATE_FORM_DESCRIPTION,
  UPDATE_FORM_TITLE, UPDATE_FORM_REQUEST, UPDATE_FORM_SUCCESS, UPDATE_FORM_FAILURE
} from '../constants/formConstants';

const formReducer = (state = {
  form: null,
  isFetching: false,
  error: null,
}, action) => {
  switch (action.type) {
    case GET_FORM_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_FORM_SUCCESS:
      return {
        ...state,
        form: action.form.payload,
        isFetching: false,
      };
    case GET_FORM_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    case CREATE_FORM_SUCCESS:
      console.log(action);
      return {
        ...state,
        form: action.form,
        isFetching: false,
      };
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          fields: state.form.fields.map(field => field.id === action.field.id ?
            {...field, value: field.value} : field
          )
        }
      };
    case CREATE_FORM_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          fields: [
            ...state.form.fields,
            {
              ...action.field
            }
          ]
        }
      };
    case UPDATE_FORM_TITLE:
      return {
        ...state,
        form: {
          ...state.form,
          title: action.title,
        }
      };
    case UPDATE_FORM_DESCRIPTION:
      return {
        ...state,
        form: {
          ...state.form,
          description: action.description,
        }
      };
    case UPDATE_FORM_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_FORM_SUCCESS:
      return {
        ...state,
        form: action.form.payload,
        isFetching: false,
      };
    case UPDATE_FORM_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default formReducer;