function setData(state={}, action){
	const {prevState}=action;
	
	switch(action.type){
		case 'SAVE_CHANGE':
			return Object.assign({}, state, getData(state, prevState.arr))

		default:
			return state;
	}
}

function getData(state, mas){
	let obj = {};
	let copyData = JSON.parse(JSON.stringify(mas));

	const a = copyData.map((it,i) => {   let newItem=[], b,e;
		while (copyData[i].some(item => item ===true)){
			b=copyData[i].indexOf(true);

			for (let j=b; j<copyData[i].length; j++){
				if (copyData[i][j]) { 
					e = j;
					copyData[i][j] = false;
				}
				else{break}
			}

		newItem.push({bt:b*60, et:e*60+59})
	}      
	return newItem; })           
	Object.keys(state).map((el, index) => obj[el]=a[index]);
	
	console.log('obj', obj);
	
	return obj;
}

export default setData;