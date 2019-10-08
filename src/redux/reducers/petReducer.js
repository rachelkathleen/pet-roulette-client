export default (
  state = {
    all: [],
    loading: true,
    pet: { photos: [] }
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
        pets: [...state.all, action.payload]
      };
    case "FETCH_PETS_SUCCESS":
      return { ...state, all: action.pets };
    default:
      return state;
  }
};
