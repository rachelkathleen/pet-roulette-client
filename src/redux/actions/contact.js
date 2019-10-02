export const sendEmail = emailObject => {
    const emailToSend = { email: emailObject };
    return dispatch => { debugger
      fetch(`http://localhost:3001/contacts`, {
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
  