const initialState = {
  activeUser: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTIVE_USER':
      return { ...state, activeUser: action.payload };
      default:
          return  {...state}
  }
}
export default reducer