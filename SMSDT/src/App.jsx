import { useState } from "react";
import "./App.css";
import FilterStudentTable from "./components/FilterStudentTable";
import StudentTable from "./components/StudentTable";
import SearchBar from "./components/SearchBar";

const calculateAge = (birthdate) => {
  const birthDateObj = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
  }
  return age;
};

const studentList = [
  { LastName: "Bolivar", FirstName: "Miguel", Course: "IT", Birthdate: "1999-04-06" },
  { LastName: "Guevarra", FirstName: "Deevo", Course: "DS", Birthdate: "2001-06-18" },
  { LastName: "Ancheta", FirstName: "James", Course: "CS", Birthdate: "2003-11-26" },
  { LastName: "Litob", FirstName: "Gab", Course: "IS", Birthdate: "2002-09-21" },
].map(student => ({...student,Age: calculateAge(student.Birthdate)}));

// Last Name
// First Name
// Course
// Should only have these 4 sections (IT, IS, CS, DS)
// Birthdate (YYYY/MM/DD)
// Age (should be based on birthdate)

function App() {
  const [students, setStudents] = useState(studentList);
  const [query, setQuery] = useState("");
  const [minBirthdate, setMinBirthdate] = useState("");
  const [maxBirthdate, setMaxBirthdate] = useState("");

  const filteredStudents = students.filter((student) => {
      const queryLower = query.toLowerCase();
      const studentAge = student.Age ? student.Age.toString() : "";
      const birthdate = new Date(student.Birthdate);

      // Check if student matches query
      const matchesQuery =
          student.LastName.toLowerCase().includes(queryLower) ||
          student.FirstName.toLowerCase().includes(queryLower) ||
          student.Course.toLowerCase().includes(queryLower) ||
          studentAge.includes(queryLower);

      // Check birthdate range
      const matchesBirthdate =
          (!minBirthdate || birthdate >= new Date(minBirthdate)) &&
          (!maxBirthdate || birthdate <= new Date(maxBirthdate));

      return matchesQuery && matchesBirthdate;
  });

  return (
      <FilterStudentTable>
          <SearchBar query={query} setQuery={setQuery} />
          <div>
              <label>
                  Min Birthdate:
                  <input
                      type="date"
                      value={minBirthdate}
                      onChange={(e) => setMinBirthdate(e.target.value)}
                  />
              </label>
              <label>
                  Max Birthdate:
                  <input
                      type="date"
                      value={maxBirthdate}
                      onChange={(e) => setMaxBirthdate(e.target.value)}
                  />
              </label>
          </div>
          <StudentTable students={filteredStudents} setStudents={setStudents} />
      </FilterStudentTable>
  );
}

export default App;