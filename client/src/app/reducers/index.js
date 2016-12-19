import { combineReducers } from 'redux';
import markers from './markers.js';
import users from './users.js'; 
import category from './category.js'; 

const boopApp = combineReducers({
  markers,
  users,
  category
});

export default boopApp;
