function cats (state = [{catEdited: false}], action) {
  switch (action.type) {
    case 'RECEIVE_CATS':
      return [...action.cats]
    case 'RECEIVE_CAT':
      return action.cat 
    case 'CAT_EDITED':
      return {catEdited: true}     
    default:
      return state
  }
}

export default cats