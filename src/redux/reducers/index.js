import { combineReducers } from 'redux';
import petReducer from './petReducer';
import formReducer from './formReducer';

export default combineReducers({
  petReducer: petReducer,
  formsReducers: formReducer
});