import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router';
import EmployeesPage from './components/Pages/EmployeesPage';
import MainPage from './components/Pages/MainPage';
import AppNavbar from './components/UI/AppNavbar';

function App(): JSX.Element {
  return (
    <Container>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
      </Routes>
    </Container>
  );
}

export default App;
