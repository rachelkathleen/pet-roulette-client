export default (
  state = {
    all: [],
    loading: true,
    pet: { photos: [], likes: 0 }
  },
  action
) => {
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
        all: [...state.all, action.payload]
      };
    case "FETCH_PETS_SUCCESS":
      return { ...state, all: action.pets };
    case "ADD_LIKE_SUCCESS":
      debugger;
      return {
        ...state,
        all: state.map(pet => {
          if (pet.id === action.payload.id) {
            return action.payload;
          } else {
            return pet;
          }
        })
      };
    default:
      return state;
  }
};
