import { combineReducers } from 'redux';
import mealsReducer from './catalogue';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export default rootReducer;
