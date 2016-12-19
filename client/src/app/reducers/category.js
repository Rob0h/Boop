const category = (state = {type: ''}, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return {
        type: action.category
      }
    default:
      return state
  }
}

export default category