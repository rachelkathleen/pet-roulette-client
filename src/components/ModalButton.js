import React from 'react'
import ButtonToolbar from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MyModal from './MyModal'

export default function ModalButton() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    )
}
