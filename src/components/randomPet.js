import React, { Component } from 'react'
import { connect } from "react-redux";
import { getPets } from "./redux/actions/pets";

class randomPet extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect (null, { getPets })(randomPet)
