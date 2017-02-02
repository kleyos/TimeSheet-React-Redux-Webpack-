
import React, {Component} from 'react';


class Cell extends Component {

	handleClick(){
		this.props.clickCell(this.props.index, this.props.rowIndex, this.props.row);
	}

	selectCell(e){
		if (e.buttons === 1){
			this.props.clickCell(this.props.index, this.props.rowIndex, this.props.row);
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