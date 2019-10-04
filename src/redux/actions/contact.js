export const sendEmail = emailObject => {
  return dispatch => {
    fetch(`http://localhost:3001/contacts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailObject)
    })
      .then(res => res.json())
      .then(email =>
        dispatch({
          type: "CONTACT_SUCCESS",
          payload: email
        })
      );
  };
};
