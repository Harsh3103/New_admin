import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Table1 = ({ setTotalLoiStudents, setTotalAfrontStudents, setTotalTestShare }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get('http://192.168.1.9:6000/getCourseData/');
        setStudents(response.data);
        const loiStudentsData = response.data.filter(student => student.loistudends === 'yes');
        const afrontStudentsData = response.data.filter(student => student.loistudends === 'no');
        const testShareData = response.data.length > 0 ? response.data[0].testShare : 0;
        setTotalLoiStudents(loiStudentsData.length);
        setTotalAfrontStudents(afrontStudentsData.length);
        setTotalTestShare(testShareData);
      } catch (error) {
        console.log(error);
      }
    };

    getStudents();
  }, [setTotalLoiStudents, setTotalAfrontStudents, setTotalTestShare]);

  const columns = [
    {
      name: 'CRM ID',
      selector: (row) => row.studentId.CRMID,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row) => row.studentId.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Contact',
      selector: (row) => row.studentId.contact,
      sortable: true,
    },
    {
      name: 'Batch',
      selector: (row) => row.studentId.batch,
      sortable: true,
    },
    {
      name: 'Course',
      selector: (row) => row.studentId.course,
      sortable: true,
    },
    {
      name: 'Startdate',
      selector: (row) => row.studentId.startdate,
      sortable: true,
    },
    {
      name: 'LOI',
      selector: (row) => row.loistudends,
      sortable: true,
    },
  ];

  return (
    <div className="table container">
      <h1 style={{ textAlign: 'center' }}>Total LOI students</h1>
      <DataTable columns={columns} data={students} pagination highlightOnHover striped />
    </div>
  );
};

export default Table1;
