export default (state = 
  {
    loading: true, 
    pet: {photos: []}
    }, action) => {
  switch (action.type) { 
    case "RANDOM_PET_SUCCESS":
      return {
        ...state, 
        loading: false,
        pet: action.pet 
      }; 
    case "LOADING_PET":
      return {
        ...state,
        loading: true
      };
      case "PET_CREATE_SUCCESS":
        return {
          ...state, 
        //what to return 
      };
    default:
      return state;
  }
};

