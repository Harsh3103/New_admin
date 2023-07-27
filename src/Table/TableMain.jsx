import React from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';

const TableMain = () => {
  const [students, setStudents] = React.useState([]);
  const [filterText, setFilterText] = React.useState('');

  React.useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get('http://192.168.1.22:8000/getCourseData/');
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getStudents();
  }, []);

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    const excelBuffer = XLSX.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx',
    });
    const excelData = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const excelUrl = URL.createObjectURL(excelData);
    const link = document.createElement('a');
    link.href = excelUrl;
    link.download = 'students.xlsx';
    link.click();
    URL.revokeObjectURL(excelUrl);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.studentId.name.toLowerCase().includes(filterText.toLowerCase()) ||
      student.studentId.course.toLowerCase().includes(filterText.toLowerCase()) ||
      student.studentId.batch.toLowerCase().includes(filterText.toLowerCase())
  );

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
      <h1 style={{ textAlign: 'center' }}>Batch Report</h1>
      <div className="Search" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ padding: '10px' }}>
          <input
            type="text"
            style={{ borderRadius: '10px', width: '20rem' }}
            value={filterText}
            onChange={handleFilterChange}
            placeholder="Search by Name, Batch, or Course"
          />
        </span>
        <span style={{ padding: '10px' }}>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleDownload}
            style={{ marginRight: '1rem' }}
          >
            Download
          </button>
        </span>
      </div>
      <DataTable columns={columns} data={filteredStudents} pagination highlightOnHover striped />
    </div>
  );
};

export default TableMain;
