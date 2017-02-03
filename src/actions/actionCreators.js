import store from '../store';

export function selectCell(index, rowIndex, row) {
  store.dispatch( {type: 'SELECT_CELL', index, rowIndex, row} )
}

export function selectRow(rowIndex) {
  store.dispatch( {type: 'SELECT_ROW', rowIndex} )
}

export function saveChange() {
  const prevState = store.getState();
  store.dispatch({type: 'SAVE_CHANGE', prevState })
}

export function clear() {
   store.dispatch({type: 'CLEAR'})
}