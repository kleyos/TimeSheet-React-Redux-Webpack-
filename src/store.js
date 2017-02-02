import { createStore} from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

import data from './data/data.json';

// create an object for the default data

const defaultState = {
  data,
  status:Array(7).fill(false,0,5).fill(true,5,6).fill(false,6),
  arr:getArr(data)
};

const store = createStore(rootReducer, defaultState);

function getArr(obj){
	let arrData = Object.keys(obj).map((i) => obj[i]).map((item) => { 
    let newItem = Array(24).fill(false); 
    if (item.length > 0){
      item.map( (item1) => {
       let b = item1.bt/60, e = (item1.et-59)/60;
       newItem.forEach((el,index) => {
        if ( (!newItem[index]) && (index >= b) && (index <= e) ) {
         newItem[index] = true; 
       } }) 
       return true;
     } ); 
      return newItem;
    } 
    else {return newItem} }) 
	return arrData;
}


export default store;
