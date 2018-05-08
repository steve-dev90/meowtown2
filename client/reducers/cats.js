function cats (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_CATS':
      return [...action.cats]
    case 'RECEIVE_CAT':
      return action.cat    
    default:
      return state
  }
}

export default cats