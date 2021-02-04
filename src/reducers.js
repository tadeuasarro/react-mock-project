import { clickReducer } from './clickReducer';
// import { otherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer,
});
