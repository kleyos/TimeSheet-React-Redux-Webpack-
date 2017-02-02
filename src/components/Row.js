import React, {Component} from 'react';

import Day from './Day';
import All from './All';
import Cell from './Cell';

class Row extends Component {

	render(){

		const cellRow = (this.props.row).map((item,i) => <Cell key={i}
			index={i}
			clN={ !item ? 'grid-cell' : 'grid-cell active'} 
			{...this.props}
			/>)
		return (
			<div className='grid-row' >
				<Day {...this.props}/>
				<All clsNm={this.props.st ? 'all-day checked' : 'all-day'} {...this.props} />     
				{cellRow}
				
			</div>
			);
	}
}

export default Row;