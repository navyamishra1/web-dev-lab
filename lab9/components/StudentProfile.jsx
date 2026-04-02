import React from "react";

function StudentProfile() {

  const name = "Navya Mishra";
  const department = "Computer Science";
  const year = "2nd Year";
  const section = "A";

  return (
    <div>
      <h1>Student Profile</h1>

      <p><b>Name:</b> {name}</p>
      <p><b>Department:</b> {department}</p>
      <p><b>Year:</b> {year}</p>
      <p><b>Section:</b> {section}</p>

    </div>
  );
}

export default StudentProfile;