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
            debugger
            return randomPet
        })
    };
  };
  
//   randomPet.photos[0].medium

  
