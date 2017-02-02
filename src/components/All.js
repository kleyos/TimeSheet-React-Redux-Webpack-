
import React, {Component} from 'react';


class All extends Component {

	selectRow(){
		this.props.clickSelectRow(this.props.rowIndex);
	}
	
	render(){
		return (
			<div className={this.props.clsNm}   onClick={this.selectRow.bind(this)}> 
			{ this.props.clsNm ==='all-day checked' ? <span className='check'>&nbsp;&#10003;</span> : ' '}
			</div>
			);
	}
}
export default All;