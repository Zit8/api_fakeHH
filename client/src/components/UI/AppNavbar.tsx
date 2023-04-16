import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../features/reduxHooks';
import {
  filterResume,
  getResumesThunk,
} from '../../features/ResumeSliceAndThunk/resumesSlice';
import Button from 'react-bootstrap/Button';

export default function AppNavbar(): JSX.Element {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (input.trim()) dispatch(filterResume(input));
    if (!input.length) {
      dispatch(getResumesThunk()).catch((err) => console.log(err));
    }
  }, [input]);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: '50px', fontWeight: 'bold' }}>
          ne-hh.ru
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            className="nav-link"
            to="/employees"
            style={{ marginLeft: '20px' }}
          >
            My company
          </NavLink>
          <Button onClick={() => dispatch(getResumesThunk())}>
            Посмотреть других кандидатов ♻
          </Button>
          {/* <NavLink className="nav-link" to="/auth/signin">signin</NavLink>
        <NavLink className="nav-link" to="/auth/signup">signup</NavLink> */}
        </Nav>
        <InputGroup style={{ width: '600px' }}>
          <Form.Control
            value={input}
            onChange={inputHandler}
            type="text"
            name="technologies"
            placeholder="Sort the candidates by technology..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          {/* <Button variant="outline-secondary" id="button-addon2">
            Find him!
          </Button> */}
        </InputGroup>
      </Container>
    </Navbar>
  );
}
