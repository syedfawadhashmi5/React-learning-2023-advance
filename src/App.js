import React from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Navber/Dashbord';
import Navber from './Navber/Navber';

function App() {
  return (
    <>     
    <Navber />
    <Dashboard />
    </>
  )
}

// CREATE A SIMPLE FUNTION TO ORDER APP


export default App;