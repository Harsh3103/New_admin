import React from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';

const Table1 = () => {
  const [students, setStudents] = React.useState([]);

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

  const columns = [
    {
      name: 'Student ID',
      selector: (row) => row.studentId.CRMID,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Apptitude',
      selector: (row) => row.Apti,
      sortable: true,
    },
    {
      name: 'ApptitudeMax',
      selector: (row) => row.AptiMax,
      sortable: true,
    },
    {
      name: 'Aptitude_Prec',
      selector: (row) => row.Apti_Prec,
      sortable: true,
    },
    {
      name: 'English',
      selector: (row) => row.English,
      sortable: true,
    },
    {
      name: 'EnglishMax',
      selector: (row) => row.EnglishMax,
      sortable: true,
    },
    {
      name: 'English_Prec',
      selector: (row) => row.English_Prec,
      sortable: true,
    },
    {
      name: 'Technical',
      selector: (row) => row.Tech,
      sortable: true,
    },
    {
      name: 'TechnicalMax',
      selector: (row) => row.TechMax,
      sortable: true,
    },
    {
      name: 'Technical_Prec',
      selector: (row) => row.Tech_Prec,
      sortable: true,
    },
    {
      name: 'Total_Marks_obt',
      selector: (row) => row.Total_Marks_obt,
      sortable: true,
    },
    {
      name: 'Total_Marks',
      selector: (row) => row.Total_Marks,
      sortable: true,
    },
    {
      name: 'Overall_Prec',
      selector: (row) => row.Overall_Prec,
      sortable: true,
    },
    {
      name: 'Average',
      selector: (row) => row.Average,
      sortable: true,
    },
    {
      name: 'ClassesAttended',
      selector: (row) => row.ClassesAttend,
      sortable: true,
    },
    {
      name: 'TotalAttendance',
      selector: (row) => row.TotalAttend,
      sortable: true,
    },
    {
      name: 'Correct',
      selector: (row) => row.TotalCorrect,
      sortable: true,
    },
    {
      name: 'Incorrect',
      selector: (row) => row.Totalincorrect,
      sortable: true,
    },
    {
      name: 'Skipped',
      selector: (row) => row.Totalskipped,
      sortable: true,
    },
    {
      name: 'Apticorrect',
      selector: (row) => row.Apticorrect,
      sortable: true,
    },
    {
      name: 'AptiSkipped',
      selector: (row) => row.AptiSkipped,
      sortable: true,
    },
    {
      name: 'PDcorrect',
      selector: (row) => row.PDcorrect,
      sortable: true,
    },
    {
      name: 'PDincorrect',
      selector: (row) => row.PDincorrect,
      sortable: true,
    },
    {
      name: 'TotalTimeTaken',
      selector: (row) => row.TotalTimeTaken,
      sortable: true,
    },
    {
      name: 'aptitime',
      selector: (row) => row.Aptitime,
      sortable: true,
    },
    {
      name: 'pdtime',
      selector: (row) => row.Pdtime,
      sortable: true,
    },
    {
      name: 'techtime',
      selector: (row) => row.Techtime,
      sortable: true,
    },
    {
      name: 'TimeDuration',
      selector: (row) => row.TimeDuration,
      sortable: true,
    },
    {
      name: 'TotalQuestion',
      selector: (row) => row.TotalQuestions,
      sortable: true,
    },
    {
      name: 'Totalaptiquestions',
      selector: (row) => row.Totalaptiquestions,
      sortable: true,
    },
    {
      name: 'Totalpdquestions',
      selector: (row) => row.Totalpdquestions,
      sortable: true,
    },
    {
      name: 'Totaltechquestions',
      selector: (row) => row.Totaltechquestions,
      sortable: true,
    },
    {
      name: 'Rank',
      selector: (row) => row.Rank,
      sortable: true,
    },
    {
      name: 'TestShare',
      selector: (row) => row.TestShare,
      sortable: true,
    },
    {
      name: 'loistudends',
      selector: (row) => row.loistudends,
      sortable: true,
    },
  ];

  const csvHeaders = columns.map((column) => ({
    label: column.name,
    key: column.selector.name,
  }));

  return (
    <div className="table container">
      <h1 style={{ textAlign: 'center' }}>Student's Report</h1>
      <DataTable columns={columns} data={students} pagination highlightOnHover striped />
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <CSVLink
          data={students}
          headers={csvHeaders}
          filename="student_report.csv"
          className="btn btn-primary"
        >
          Download
        </CSVLink>
      </div>
    </div>
  );
};

export default Table1;
