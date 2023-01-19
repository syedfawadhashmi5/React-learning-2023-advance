import React, { useState } from 'react';
import Parent from './Component/Parent';
import StudentContext from './Context/StudentContext';

function App() {

 const [stname, setstaname]= useState([
    {name: 'tomboy',age: 17,},
    {name: 'Ash',age: 20,},
    {name: 'shari',age: 25,},
    {name: 'kamran',age: 30,}
  ]);


  let students = stname;

  return (
    <StudentContext.Provider value={{students}}>
    <Parent />
    </StudentContext.Provider>
  )
}

// CREATE A SIMPLE FUNTION TO ORDER APP


export default App;