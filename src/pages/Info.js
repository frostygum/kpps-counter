import { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { removeLocalStorage } from '../utils/localStorage.js';
import { CONST } from '../config/constans.js';

const Wrapper = styled.div`
  height: 100%;
  background-color: var(--gray);
  color: var(--light);

  .container {
    height: calc(100vh - 112px) !important;
  }

  .count-num {
    font-size: 8rem;
  }

  .badge.badge-info{
    border: 0.2rem solid var(--light);
  }

  .btn {
    border: 0.2rem solid var(--light);
  }
`

function CustomModal({isOpen, toggle, positive, negative}) {
  return (
    <Modal isOpen={isOpen} toggle={() => toggle()}>
      <ModalHeader toggle={() => toggle()}>Oopss !!</ModalHeader>
      <ModalBody>
        Are you sure want to delete all data ?
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={() => positive()}>Yes</Button>{' '}
        <Button color="secondary" onClick={() => negative()}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

function Info() {
  const history = useHistory();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function clear() {
    removeLocalStorage(CONST.KEY_DATA);
    removeLocalStorage(CONST.KEY_LMD);
    toggle();
    history.push('/')
  }

  return(
    <Wrapper>
      <Container>
        <Row>
          <Col className='text-center my-4'>
            <h1 className='font-weight-bold'>
              Settings
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              block
              color='danger'
              onClick={() => {toggle()}}
              className='font-weight-bold'
            >
              Clear Data
            </Button>
          </Col>
        </Row>
      </Container>
      <CustomModal isOpen={modal} toggle={toggle} positive={clear} negative={toggle} />
    </Wrapper>
  )
}

export default Info;