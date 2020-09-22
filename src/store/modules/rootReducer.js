import { combineReducers } from 'redux';

import appReducer from './app/reducer';
import todoReducer from './todo/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  todos: todoReducer,
});

export default rootReducer;
