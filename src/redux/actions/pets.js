import client from '../../petfinderConfig';
  
  export const getPets = () => { debugger
    return dispatch => {
      return client.animal.search({ type: "dog" })
        .then(resp => {
            console.log("something")
        })
    };
  };


  
  