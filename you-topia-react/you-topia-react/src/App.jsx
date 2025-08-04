import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Journal from './components/Journal/Journal';
import Personality from './components/Personality/Personality';
import Values from './components/Values/Values';
import Identity from './components/Identity/Identity';
import Reflection from './components/Reflection/Reflection';
import Timeline from './components/Timeline/Timeline';
import Admin from './components/Admin/Admin';
import Status from './components/Status/Status';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Status />} />
        <Route path="/status" element={<Status />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/personality" element={<Personality />} />
        <Route path="/values" element={<Values />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;