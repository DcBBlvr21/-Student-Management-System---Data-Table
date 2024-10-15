import Table from "../Table";

const Student = ({student}) => {

	return (
		<Table.Row>
            {/* LASTNAME */}
			<Table.Column>{student.LastName}</Table.Column>
            {/* FIRSTNAME */}
			<Table.Column>{student.FirstName}</Table.Column>
            {/* COURSE */}
			<Table.Column>{student.Course}</Table.Column>
			{/* BIRTHDATE */}
			<Table.Column>{student.Birthdate}</Table.Column>
			{/* AGE */}
			<Table.Column>{student.Age}</Table.Column>            
		</Table.Row>
	);
};

export default Student;