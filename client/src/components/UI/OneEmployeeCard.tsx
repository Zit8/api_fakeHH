import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import type { ResumeType } from '../../types';
import { deleteEmployee } from '../../features/EmployeesSlice/employeesSlice';

type EmplProps = {
  employee: ResumeType;
};
const thisIsTheWay = 'http://easyapi.mooo.com/img/';

export default function OneEmployeeCard({ employee }: EmplProps): JSX.Element {
  const dispatch = useDispatch();
  return (
    <Card
      style={{
        width: '18rem',
        borderRadius: '15px',
        borderColor: 'black',
        borderWidth: '4px',
        backgroundColor: 'black',
        opacity: '80%',
      }}
    >
      <Card.Img variant="top" src={`${thisIsTheWay}${employee.img}`} />
      <Card.Body>
        <Card.Title
          style={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }}
        >
          {employee.fullName}
        </Card.Title>
        <Card.Text style={{ color: 'white' }}>
          Telegram {employee.telegram}
        </Card.Text>
        <Card.Text style={{ color: 'white' }}>Email {employee.email}</Card.Text>
        <Card.Text style={{ color: 'white' }}>Email {employee.git}</Card.Text>
        <Button
          variant="outline-light"
          onClick={() => dispatch(deleteEmployee(employee))}
        >
          Уволить
        </Button>
      </Card.Body>
    </Card>
  );
}
