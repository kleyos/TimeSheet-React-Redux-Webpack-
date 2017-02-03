import React, {Component} from 'react';
import {selectRow} from '../actions/actionCreators';

class All extends Component {

	selectR(){
		selectRow(this.props.rowIndex);
	}
	
	render(){
		return (
			<div className={this.props.clsNm}   onClick={this.selectR.bind(this)}> 
			{ this.props.clsNm ==='all-day checked' ? <span className='check'>&nbsp;&#10003;</span> : ' '}
			</div>
			);
	}
}
export default All;