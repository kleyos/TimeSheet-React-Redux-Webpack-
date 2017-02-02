function setArr(state=[], action){
	const {rowIndex, index} = action;
	
	switch(action.type){
		case 'SELECT_CELL':
			
			state[rowIndex][index]= !state[rowIndex][index]
			return [...state];
		
		case 'SELECT_ROW':
			
			state[rowIndex].every(i => i===true) ? [...state[rowIndex].fill(false)] : [...state[rowIndex].fill(true)] 
			return [...state]

		case 'CLEAR':
			return state.map(i => i.fill(false));

		default:
			return state;
		}
	}
	
	export default setArr;