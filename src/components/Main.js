import React, {Component} from 'react';
import Header from './Header';
import Row from './Row';

import data from '../data/data.json';
import {saveChange, clear} from '../actions/actionCreators';

class Main extends Component {

  render(){
    return (
      
      <div className='grid'  >
        <Header />
        {Object.keys(data).map((day, i) =>  
            <Row  key={i} 
                  day={day} 
                  row={this.props.arr[i]}
                  st={this.props.status[i]}
                  rowIndex={i}
            />)}

      <p className='btn'>
        <button className='clear' type='button' onClick={clear}> Clear </button>
        <button className='save' type='button'  onClick={saveChange} > Save Changes </button>
      </p>
      </div>
      );
  }
}
export default Main;
