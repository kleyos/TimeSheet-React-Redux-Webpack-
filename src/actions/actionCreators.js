import store from '../store';

export function selectCell(index, rowIndex, row) {
  return {
    type: 'SELECT_CELL',
    index,
    rowIndex,
    row
  }
}

export function selectRow(rowIndex) {
  return {
    type: 'SELECT_ROW',
    rowIndex
  }
}

export function saveChange() {
  const prevState = store.getState();
  store.dispatch({type: 'SAVE_CHANGE', prevState })
}

export function clear() {
   store.dispatch({type: 'CLEAR'})
}