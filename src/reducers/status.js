function setStatus(state=[], action){
	const {rowIndex, row} = action;

	switch(action.type){
		case 'SELECT_CELL':
			let newState;
			row.every(i => i===true) ? (newState=true) : (newState=false)

			return 	[
					...state.slice(0,rowIndex),
					...state[rowIndex], newState,
					...state.slice(rowIndex+1)
					]
		
		case 'SELECT_ROW':
			return 	[
					...state.slice(0,rowIndex),
					...state[rowIndex], !state[rowIndex],
					...state.slice(rowIndex+1)
					]

		case 'CLEAR':
			return [...state.fill(0)]
		
		default:
			return state;
	}
}
export default setStatus;