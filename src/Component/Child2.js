import React, { useContext,useState } from 'react';
import StudentContext from '../Context/StudentContext';


function Child2() {
    const st = useContext(StudentContext);
    console.log()

    const [classNumber, setclaessNum]=useState(st.students[1])

  return (
    <div>
      <h1>Array with Context Api</h1>
        {classNumber.map((clas,id) => (
            <div key={id}>
                <h1>{clas}</h1>
            </div>
        ))}
    </div>
  )
}

export default Child2