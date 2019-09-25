import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchPets } from "../redux/actions/pets";

class showPet extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect (null, { fetchPets })(showPet)
