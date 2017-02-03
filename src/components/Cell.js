
import React, {Component} from 'react';
import {selectCell} from '../actions/actionCreators';

class Cell extends Component {

	handleClick(){
		selectCell(this.props.index, this.props.rowIndex, this.props.row);
	}

	selectCell(e){
		if (e.buttons === 1){
			selectCell(this.props.index, this.props.rowIndex, this.props.row);
		} 
	}
	
	render(){
		return (
			<div className={this.props.clN} 
				onMouseOver={this.selectCell.bind(this)}
				onMouseDown={this.handleClick.bind(this)}
			></div>
			);
	}
}

export default Cell;