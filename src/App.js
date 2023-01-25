import React, { useState } from 'react';
import ApiIntegration from './Component/FakeApiIntegration/ApiIntegration';
import Navber from './Navber/Navber';
import Parent from './Component/Parent';
import StudentContext from './Context/StudentContext';
import './App.css'
import { Provider } from 'react-redux';
import { store } from './Component/React-redux/store';

function App() {

 const [stname, setstaname]= useState([
    {name: 'tomboy',age: 17},
    {name: 'Ash',age: 20},
    {name: 'shari',age: 25},
    {name: 'kamran',age: 30},
    {name: 'humza',age: 28}
  ]);

  const [claessNum, setclaessNum]=useState([6,7,8,9,10]);

  const [num, setnum]=useState(1);

  const [st, setst]=useState("string is by pass contextapi");

  let students = [stname,claessNum,num,st];

  return (
    <Provider store={store}>      
    <Navber />
    <StudentContext.Provider value={{students}}>
    <Parent />
    </StudentContext.Provider>
    </Provider>
  )
}

// CREATE A SIMPLE FUNTION TO ORDER APP


export default App;