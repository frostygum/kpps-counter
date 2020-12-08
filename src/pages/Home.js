import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';

import { setLocalStorage, getLocalStorage } from '../utils/localStorage.js';
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

function Home() {
  let [count, setCount] = useState(0);
  let [male, setMale] = useState(0);
  let [female, setFemale] = useState(0);
  let [lastSet, setLast] = useState('0/0/0 0.0.0');

  useEffect(() => {
    // removeLocalStorage(KEY_DATA);
    let data = getLocalStorage(CONST.KEY_DATA);
    let lastDate = getLocalStorage(CONST.KEY_LMD);
    if(data) {
      setCount(data.total);
      setMale(data.male);
      setFemale(data.female);
    }
    if(lastDate) {
      setLast(lastDate);
    }
  }, []);

  React.useEffect(() => {
    if(count) {
      setLocalStorage(CONST.KEY_DATA, {
        total: count,
        male: male,
        female: female
      });
      
      if(lastSet) {
        setLocalStorage(CONST.KEY_LMD, lastSet)
      }
    }
  })

  function add(num, isMale) {
    if(isMale) {
      setMale(male + num);
    }
    else {
      setFemale(female + num);
    }

    setCount(count + num);
    setLast(new Date().toLocaleString('id-ID'));
  }

  return(
    <Wrapper>
      <Container>
        <Row>
          <Col className='text-center mt-4'>
            <h1 className='font-weight-bold'>KPPS-Counter</h1>
          </Col>
        </Row>
        <Row className='justify-content-center mb-4'>
          <Badge color='danger' className='py-1 px-2'>
            { 
              `Last Modified: ${lastSet ? lastSet.split(' ')[0] : '-'} at ${lastSet ? lastSet.split(' ')[1] : '-'}`
            }
          </Badge>
        </Row>
        <Row>
          <Col className='text-center my-3'>
            <Badge color='warning'>total</Badge>
            <h1 className='font-weight-bold count-num'>
              <Badge color='info'>
                { count }
              </Badge>
            </h1>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className='text-center px-4'>
            <Badge color='warning'>male</Badge>
            <h1 className='font-weight-bold'>
              <Badge color='info'>
                { male }
              </Badge>
            </h1>
          </Col>
          <Col className='text-center px-4'>
            <Badge color='warning'>female</Badge>
            <h1 className='font-weight-bold'>
              <Badge color='info'>
                { female }
              </Badge>
            </h1>
          </Col>
        </Row>
        <Row className='py-4'>
          <Col>
            <Button 
              block 
              color='success'
              onClick={() => add(1, true)}
              className='p-4'
            >
              <FontAwesomeIcon icon={ faMale } size='3x' />
            </Button>
          </Col>
          <Col>
            <Button 
              block 
              color='success'
              onClick={() => add(1, false)}
              className='p-4'
            >
              <FontAwesomeIcon icon={ faFemale } size='3x' />
            </Button>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Home;