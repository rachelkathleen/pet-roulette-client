import client from "../../petfinderConfig";

const displayPet = pet => {
  return {
    type: "RANDOM_PET_SUCCESS",
    pet
  };
};

export const fetchRandomPet = () => {
  return dispatch => {
    dispatch({ type: "LOADING_PET" });
    return client.animal
      .search({ limit: 100 })
      .then(resp => {
        const randomPetArray = resp.data.animals.filter(
          pet => pet.photos.length > 0
        );
        let randomPetIndex = Math.floor(Math.random() * randomPetArray.length);
        return randomPetArray[randomPetIndex];
      })
      .then(pet => dispatch(displayPet(pet)));
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

export const createPet = (petObject, closeModal) => {
  const petToCreate = { pet: petObject };
  return dispatch => {
    fetch(`https://pet-roulette-api.herokuapp.com/pets`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(petToCreate)
    })
      .then(res => res.json())
      .then(pet => {
        dispatch({
          type: "PET_CREATE_SUCCESS",
          payload: pet
        });
        closeModal();
      });
  };
};
