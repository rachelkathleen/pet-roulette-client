export const sendEmail = (emailObject, history) => {
    const emailToSend = { email: emailObject };
    return dispatch => {
      fetch(`http://localhost:3001/emails`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(emailToSend)
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
  