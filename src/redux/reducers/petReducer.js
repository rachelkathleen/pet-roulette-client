export default (state = [], action) => {
  switch (action.type) { 
    case "RANDOM_PET_SUCCESS":
      return action.pet; 
    default:
      return state;
  }
};