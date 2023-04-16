import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../../features/reduxHooks';
import OneEmployeeCard from '../UI/OneEmployeeCard';

export default function EmployeesPage(): JSX.Element {
  const employees = useAppSelector((state) => state.emplSlice.empls);

  return (
    <Container style={{ justifyContent: 'center' }}>
      <Col>
        <Row className="mt-5" style={{ justifyContent: 'center', gap: '15px' }}>
          {employees?.map((employee) => (
            <OneEmployeeCard key={employee.id} employee={employee} />
          ))}
        </Row>
      </Col>
    </Container>
  );
}
