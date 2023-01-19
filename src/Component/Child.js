import React,{useState} from "react";
import StudentContext from "../Context/StudentContext";
import { useContext } from "react";

function Child() {
  let namme = useContext(StudentContext);

  const [students, setstudents]=useState(namme.students);
  console.log(students);



  return (
    <div>
      {students.map((student, id) => (
        <div key={id}>
          <h2>
            Name : {student.name} Age : {student.age}
          </h2>
        </div>
      ))}
    </div>

  );
}

export default Child;
