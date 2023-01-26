import React, { useState } from 'react';
import ApiIntegration from './Component/FakeApiIntegration/ApiIntegration';
import Navber from './Navber/Navber';
import Parent from './Component/Parent';
import StudentContext from './Context/StudentContext';
import './App.css'
import { Provider } from 'react-redux';
import { store } from './Component/React-redux/store';

function App() {

  const [UserName]=useState("imran");

 const [stname, setstaname]= useState([
    {name: 'tomboy',age: 17},
    {name: 'Ash',age: 20},
    {name: 'shari',age: 25},
    {name: 'kamran',age: 30},
    {name: 'humza',age: 28}
  ]);

  const [questions] = useState([
    {
      questionText: "What was the old name of PIA?",
      answerOptions: [
        "Orient Airways",
        "New Air Dublin",
        "Madrid AirLine",
        "Paris Line",
      ],
      answer: "Orient Airways",
    },
    {
      questionText:
        "What official name was given to Pakistan in 1956 constitution?",
      answerOptions: [
        "New Pakistan",
        "Old Pakistan",
        "Pakistan Moment",
        "Islamic Republic",
      ],
      answer: "Islamic Republic",
    },
    {
      questionText: "How many days are in September",
      answerOptions: ["28", "29", "30", "31"],
      answer: "28" 
    },
    {
      questionText: "Which are the popular rivers of Baluchistan?",
      answerOptions: ["1", "64", "742", "0"],
      answer: "742",
    },
    {
      questionText: "Which of these is not an planet?",
      answerOptions: ["Earth", "Jupitor", "Mars", "Florida"],
      answer: "Florida",
    },
    {
      questionText: "Question 6?",
      answerOptions: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      answer: "Answer 2",
    },
    {
      questionText: "Question 7?",
      answerOptions: ["Answer 11", "Answer 12", "Answer 13", "Answer 14"],
      answer: "Answer 13",
    },
    {
      questionText: "Question 8?",
      answerOptions: ["Answer 21", "Answer 22", "Answer 23", "Answer 24"],
      answer: "Answer 24",
    },
    {
      questionText: "Question 9?",
      answerOptions: ["Answer 31", "Answer 32", "Answer 33", "Answer 34"],
      answer: "Answer 31",
    },
    {
      questionText: "Question 10?",
      answerOptions: ["Answer 41", "Answer 42", "Answer 43", "Answer 44"],
      answer: "Answer 43",
    },
  ]);

  const [claessNum, setclaessNum]=useState([6,7,8,9,10]);

  const [num, setnum]=useState(1);

  const [st, setst]=useState("string is by pass contextapi");

  let students = [stname,claessNum,num,st,questions,UserName];

  return (
    <>      
    <Navber />
    <StudentContext.Provider value={{students}}>
    <Parent />
    </StudentContext.Provider>
    </>
  )
}

// CREATE A SIMPLE FUNTION TO ORDER APP


export default App;