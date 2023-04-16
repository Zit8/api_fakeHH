import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import type { ResumeType, RootState } from '../../types';
import { addEmployee } from '../../features/EmployeesSlice/employeesSlice';
import { useAppSelector } from '../../features/reduxHooks';

type CandidateProps = {
  candidate: ResumeType;
};

export default function OneCandidateCard({
  candidate,
}: CandidateProps): JSX.Element {
  const [disableButton, setDisableButton] = useState(false);
  const dispatch = useDispatch();

  const budget = useAppSelector((state: RootState) => state.emplSlice.budget);

  const handleClick = (): void => {
    dispatch(addEmployee(candidate));
    setDisableButton(true);
  };
  const thisIsTheWay = 'http://easyapi.mooo.com/img/';
  return (
    <Card
      style={{
        width: '35rem',
        borderRadius: '15px',
        borderColor: 'black',
        borderWidth: '4px',
        backgroundColor: 'black',
        opacity: '80%',
      }}
    >
      <Card.Img variant="top" src={`${thisIsTheWay}${candidate.img}`} />
      <Card.Body>
        <Card.Title
          style={{ color: 'white', fontSize: '50px', fontWeight: 'bold' }}
        >
          {candidate.fullName}
        </Card.Title>
        <Card.Text
          style={{
            color: 'white',
            fontSize: '17px',
            marginTop: '20px',
          }}
        >
          Стек технологий:
        </Card.Text>
        <ListGroup>
          {candidate.technologies.map((el) => (
            <ListGroup.Item
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              {el}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text
          style={{
            color: 'white',
            fontSize: '17px',
            marginTop: '40px',
          }}
        >
          Телефон для связи с кандидатом:
        </Card.Text>
        <Card.Text
          style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
        >
          {candidate.phone}
        </Card.Text>
        {/* <Card.Text>{candidate.about}</Card.Text> */}
        {candidate.salary > budget ? (
          <p style={{ color: 'red' }}>Слишком высокая зарплата</p>
        ) : (
          <Button
            disabled={disableButton}
            onClick={handleClick}
            variant="outline-dark"
            style={{ marginTop: '20px' }}
          >
            Заключить контракт
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
