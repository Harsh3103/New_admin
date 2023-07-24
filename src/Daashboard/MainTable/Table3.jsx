import React from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Table3 = () => {
  const [students, setStudents] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState('');

  React.useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get('http://192.168.1.9:6000/getCourseData/');
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
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  // Function to handle the date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Filter the data based on the selected date
  const filteredStudents = students.filter((student) => {
    return student.date === selectedDate;
  });

  return (
    <div className="table container">
      <h1 style={{ textAlign: 'center' }}>Total Test</h1>

      {/* Dropdown to select the date */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label htmlFor="dateDropdown">Select Date: </label>
        <select
          id="dateDropdown"
          value={selectedDate}
          onChange={handleDateChange}
        >
          <option value="">All Dates</option>
          <option value="">20-Jul</option>
          <option value="">21-Jul</option>
          <option value="">22-jul</option>  
          {/* Assuming 'students' data has a 'date' property */}
          {students.map((student) => (
            <option key={student.date} value={student.date}>
              {student.date}
            </option>
          ))}
        </select>
      </div>

      {/* Use the filtered data for the DataTable */}
      <DataTable
        columns={columns}
        data={selectedDate ? filteredStudents : students}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default Table3;
