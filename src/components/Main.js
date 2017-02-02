import React, {Component} from 'react';
import Header from './Header';
import Row from './Row';

import data from '../data/data.json';

class Main extends Component {

  save(){
    const arrData=this.props.arr;
    
    this.props.saveChange(arrData);
  }

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
                  clickCell={this.props.selectCell}
                  clickSelectRow={this.props.selectRow} 
            />)}

      <p className='btn'>
        <button className='clear' type='button' onClick={this.props.clear}> Clear </button>
        <button className='save' type='button'  onClick={this.save.bind(this)} > Save Changes </button>
      </p>
      </div>
      );
  }
}
export default Main;
