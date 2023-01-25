import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, StudentArray } from './React-redux/action';

function Counter() {
    const [value, setValue] = useState(0);
    const [studentName, setStudentName] = useState([]); // changed to string
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const students = useSelector((state) => state.students);
    
    console.log(students)
    
    const addstudent = () => {
        students.push(studentName)
    }
    
    return (
        <div >
            <div>Counter: {counter}</div>
            <ul>
                {students.map((student, index) => <li key={index}>{student} <button onClick={() => students.pop()}>Delete</button></li>)}
            </ul>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <br/>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <br />
                <input type="text" onChange={(e) => setValue(e.target.value)} />
                <br/>
                <button onClick={() => dispatch(incrementByAmount(Number(value)))}>Increment By Value</button>
                <br/>
                <input type="text" placeholder="Enter student name"  onChange={(e) => setStudentName(e.target.value)} />
                <br/>
                <button onClick={() => dispatch(StudentArray((addstudent())))}>Add student</button> {/* added spread operator to copy current array and add new student */}
            </div>
        </div>
    );
    }
    
    export default Counter;
    