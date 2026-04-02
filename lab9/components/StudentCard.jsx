import React from "react";

function StudentCard() {

  const students = [
    {
      name: "Rahul Sharma",
      department: "CSE",
      marks: 85
    },
    {
      name: "Ananya Singh",
      department: "IT",
      marks: 90
    },
    {
      name: "Aman Verma",
      department: "ECE",
      marks: 78
    }
  ];

  return (
    <div>
      <h1>Student Cards</h1>

      {students.map((student, index) => (
        <div key={index} style={{border:"1px solid black", padding:"10px", margin:"10px", width:"200px"}}>
          <h3>{student.name}</h3>
          <p>Department: {student.department}</p>
          <p>Marks: {student.marks}</p>
        </div>
      ))}

    </div>
  );
}

export default StudentCard;