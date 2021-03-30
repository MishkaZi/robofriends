import { createStore, combineReducers, applyMiddleware } from 'redux';
import { searchRobots, requestRobots } from '../redux/reducers';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger({});

const allReducers = combineReducers({
  searchRobots: searchRobots,
  requestRobots: requestRobots,
});

export const store = createStore(
  allReducers,
  applyMiddleware(thunkMiddleware, logger)
);
