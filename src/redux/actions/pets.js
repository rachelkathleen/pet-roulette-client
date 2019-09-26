import client from '../../petfinderConfig';


const displayPet = pet => {
    return {
      type: "RANDOM_PET_SUCCESS",
      pet
    };
  };
  
export const fetchPets = () => { 
    let randomPetIndex = Math.floor(Math.random() * 100)
    return dispatch => {
      return client.animal.search({ limit: 100 })
        .then(resp => { debugger
            const randomPet = resp.data.animals[randomPetIndex]
            return randomPet
            let totalCount = resp.data.pagination.total_count
            let firstID = resp.data.animals[0].id

        })
    };
  };

// shuffle pet
// send pet
// validate pet


  
