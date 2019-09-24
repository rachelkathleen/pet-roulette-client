import { combineReducers } from 'redux';
import petReducer from './petReducer';
import formReducer from './formReducer';

export default combineReducers({
  petsReducer: petReducer,
  formsReducers: formReducer
});