const category = (state = {type: ''}, action) => {
  console.log(action.category);
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