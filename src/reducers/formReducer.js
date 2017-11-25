import {
  GET_FORM_REQUEST,
  GET_FORM_FAILURE,
  GET_FORM_SUCCESS
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
        form: action.form,
        isFetching: false,
      };
    case GET_FORM_FAILURE:
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