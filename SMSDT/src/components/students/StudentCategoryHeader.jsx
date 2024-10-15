import React from "react";
import Table from "../Table";
// rafce
const StudentCategoryHeader = ({ text }) => {
  return (
    <Table.Row>
      <Table.ColumnHeader colspan="2">{text}</Table.ColumnHeader>
    </Table.Row>
  );
};

export default StudentCategoryHeader;