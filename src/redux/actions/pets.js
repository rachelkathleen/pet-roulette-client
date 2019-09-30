import client from '../../petfinderConfig';

const displayPet = pet => {
    return {
      type: "RANDOM_PET_SUCCESS",
      pet
    };
  };
  
export const fetchRandomPet = () => { 
  return dispatch => {
    dispatch({type: 'LOADING_PET'})
    return client.animal.search({ limit: 100 })
      .then(resp => {
          const randomPetArray = resp.data.animals.filter(pet => pet.photos.length > 0)
          let randomPetIndex = Math.floor(Math.random() * randomPetArray.length)
          return randomPetArray[randomPetIndex]
      }).then(pet => dispatch(displayPet(pet))
    );
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

  
