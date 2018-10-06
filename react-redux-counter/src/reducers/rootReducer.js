const initState = {
  clicked: 0
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "BTNCLICKED":
      return Object.assign({}, state, { clicked: state.clicked + 1 });
    default:
      return state;
  }
};

export default rootReducer;
