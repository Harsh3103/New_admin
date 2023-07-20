import React from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const TableMain = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get('http://192.168.1.44:3001/getCourseData/');
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getStudents();
  }, []);

  const columns = [
    {
      name: 'CRM ID',
      selector: (row) => row.studentId.CRMID,
      sortable: true,
    },
    {
      name: 'Student Name',
      selector: (row) => row.studentId.name,
      sortable: true,
    },
    {
      name: 'Contact',
      selector: (row) => row.studentId.contact,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
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

  ];

  return (
    <div className="table table-borderless container">
      <h1 style={{textAlign:'center'}}>Batch Report</h1>
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

export default TableMain;
