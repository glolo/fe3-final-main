export const initialState = {
    favorites: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return { ...state, favorites: [...state.favorites, action.payload] };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter((fav) => fav.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  