import React from "react";
import Table from "./Table";
import Student from "./students/Students";
import StudentCategoryHeader from "./students/StudentCategoryHeader";

const StudentTable = ({students, setStudents}) => {
	const studentList = students;

	return (
		<div>
			<Table.TableContainer>
				<Table.THead>
					<Table.Row>
						<Table.ColumnHeader>Last Name</Table.ColumnHeader>
						<Table.ColumnHeader>First Name</Table.ColumnHeader>
						<Table.ColumnHeader>Course</Table.ColumnHeader>
						<Table.ColumnHeader>Birthdate</Table.ColumnHeader>
						<Table.ColumnHeader>Age</Table.ColumnHeader>
					</Table.Row>
				</Table.THead>

				<Table.TBody>
				{students.map((student) => (
					<Student key={`${student.LastName}-${student.FirstName}`} student={student} setStudents={setStudents}/>))
				}
				</Table.TBody>

			</Table.TableContainer>
		</div>
	);
};

export default StudentTable;