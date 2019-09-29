import client from '../../petfinderConfig';

const displayPet = pet => {
    return {
      type: "RANDOM_PET_SUCCESS",
      pet
    };
  };
  
export const fetchRandomPet = () => { 
  let randomPetIndex = Math.floor(Math.random() * 100)
  return dispatch => {
    return client.animal.search({ limit: 100 })
      .then(resp => {
          const randomPet = resp.data.animals[randomPetIndex]
          return randomPet
      }).then(pet => dispatch(displayPet(pet)));
  };
};

const fetchPets = pets => {
  return {
    type: "FETCH_PETS_SUCCESS",
    pets
  };
};

export const getPets = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/pets`)
      .then(res => res.json())
      .then(pets => dispatch(fetchPets(pets)));
  };
};

export const sendEmail = petEmail => {
  const emailToSend = { email: petEmail };
  return dispatch => {
    fetch(`http://localhost:3001/pets`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailToSend)
    })
      .then(res => res.json())
      .then(pet =>
        dispatch({
          type: "SEND_PET",
          payload: pet
        })
      );
  };
};

  
