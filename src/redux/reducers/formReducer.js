export default (state = 
  { 
    email: {}
    }, action) => {
  switch(action.type) {
    case "CONTACT_SUCCESS":
      return state;
    default:
      return state;
    }
  }
