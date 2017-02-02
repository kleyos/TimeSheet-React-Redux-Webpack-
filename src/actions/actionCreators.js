
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

export function saveChange(arr) {
  return {
    type: 'SAVE_CHANGE',
    arr
  }
}
export function clear() {
  return {
    type: 'CLEAR'
  }
}