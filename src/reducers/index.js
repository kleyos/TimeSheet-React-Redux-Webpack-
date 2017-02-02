import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';

import data from './data';
import status from './status';
import arr from './arr';


const rootReducer = combineReducers({arr, status, data});

export default rootReducer;
