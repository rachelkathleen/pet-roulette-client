import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchRandomPet } from "../redux/actions/pets";

class showPet extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect (null, { fetchRandomPet })(showPet)
