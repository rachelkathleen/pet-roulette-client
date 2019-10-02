import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import ContactForm from './ContactForm'

export default class About extends Component {
    render() {
        return (
          <Container style={{marginTop: '25px', textAlign:'left'}}>
            <p>
              Pet Roulette! is the final portfolio project by <a href="www.rachel-hawa.com">Rachel Hawa</a>
              for the <a href="https://flatironschool.com">Flatiron School</a> &nbsp;software engineering immersive.
            </p>
            <p>
              It was made with a <a href="">Ruby on Rails</a> backend, and a&nbsp;  
              <a href="https://github.com/rachelkathleen/pet-roulette-client">React/Redux</a>
              &nbsp;front-end.
            </p>
            <p>
              It includes data obtained from the <a href="https://www.petfinder.com/developers/v2/docs/">Petfiner API</a>,
              is hosted on <a href="heroku.com"></a> and uses <a href="https://guides.rubyonrails.org/action_mailer_basics.html">
              Rails Action Mailer</a>.
            </p>
            <ContactForm />
          </Container>
        );
      }
}

