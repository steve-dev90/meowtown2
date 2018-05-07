
const waiting = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_CAT':
      return true
    case 'RECEIVE_CAT':
      return false
    default:
      return state
  }
}

export default waiting