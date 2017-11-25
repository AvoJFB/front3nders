import { combineReducers } from 'redux';
import formReducer from './formReducer'

const rootReducer = combineReducers({
  formState: formReducer,
});

export default rootReducer;