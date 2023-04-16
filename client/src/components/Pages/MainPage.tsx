import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../../features/reduxHooks';
import { getResumesThunk } from '../../features/ResumeSliceAndThunk/resumesSlice';
import OneCandidateCard from '../UI/OneCandidateCard';

export default function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const candidates = useAppSelector((store) => store.resumes);

  useEffect(() => {
    dispatch(getResumesThunk()).catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-5" style={{ justifyContent: 'center' }}>
      <Col>
        <Row style={{ justifyContent: 'center', gap: '15px' }}>
          {candidates.resumes?.map((candidate) => (
            <OneCandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </Row>
      </Col>
    </Container>
  );
}
