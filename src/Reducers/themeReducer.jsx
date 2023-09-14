const initialState = {
    darkMode: false,
  };
  
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export { initialState, themeReducer };