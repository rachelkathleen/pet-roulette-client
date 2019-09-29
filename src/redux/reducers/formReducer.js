function formReducer(state = {emails: []}, action) {
    switch(action.type) {
      case "SEND_PET":
        debugger

        return action.payload;
      default:
        return state;
    }
  }
  
  export default formReducer;