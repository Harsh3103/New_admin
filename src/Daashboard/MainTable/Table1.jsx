import React from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Table1 = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get('http://192.168.0.117:3001/getCourseData');
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getStudents();
  }, []);

  const columns = [
    {
      name: 'Student ID',
      selector: (row) => row.studentId,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Apptitude',
      selector: (row) => row.Apptitude,
      sortable: true,
    },
    {
      name: 'English',
      selector: (row) => row.English,
      sortable: true,
    },
    {
      name: 'Technical',
      selector: (row) => row.Technical,
      sortable: true,
    },
    {
        name: 'Average',
        selector: (row) => row.Average,
        sortable: true,
      },
  ];

  return (
    <div className="table container">
      <h1 style={{textAlign:'center'}}>Total LOI students</h1>
      <DataTable
        columns={columns}
        data={students}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default Table1;
