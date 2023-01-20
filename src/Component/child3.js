import React,{useContext,useState} from 'react'
import StudentContext from '../Context/StudentContext'


function Child3() {

    const num = useContext(StudentContext);

    const [number, setNumber]=useState(num.students[2])

    console.log(number)

  return (
    <div>
        <h1>Number example with Context Api</h1>
        <h1>number is now {number}</h1>
    </div>
  )
}

export default Child3