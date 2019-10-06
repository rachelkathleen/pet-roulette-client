export const sendEmail = (emailObject, history) => {
  return dispatch => {
    fetch(`https://pet-roulette-api.herokuapp.com/contacts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailObject)
    })
      .then(res => res.json())
      .then(email => {
        dispatch({
          type: "CONTACT_SUCCESS",
          payload: email
        });
        //something with history?
      });
  };
};
