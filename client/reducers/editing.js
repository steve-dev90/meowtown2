function editing (state = [{catEdited: false}], action) {
  switch (action.type) { 
    case 'CAT_EDITED':
      return {catEdited: true}    
    default:
      return state
  }    
}

export default editing