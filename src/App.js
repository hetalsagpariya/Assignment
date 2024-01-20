

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainScreen from "./components/MainScreen/MainScreen";
import LoginForm from './components/LoginForm/LoginForm';
import ItemTable from './components/Api_Integration/ItemTable';



function App() {
  return (
  
    <Router>
    <Routes>
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/mainscreen" element={<MainScreen/>} />
      <Route path="/itemtable" element={<ItemTable/>} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
  );
}

export default App;
