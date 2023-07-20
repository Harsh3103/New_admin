import React, { useState } from 'react';
import './Report.css';
import TableMain from '../Table/TableMain';
import Table1 from '../Table/Table1';
import Table2 from '../Table/Table2';

const Report = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButton1Click = () => {
    // Logic to fetch or generate data for table 1
    const newData = [/* Data for table 1 */];
    setTableData(newData);
    setSelectedOption(1);
  };

  const handleButton2Click = () => {
    // Logic to fetch or generate data for table 2
    const newData = [/* Data for table 2 */];
    setTableData(newData);
    setSelectedOption(2);
  };

  const handleButton3Click = () => {
    // Logic to fetch or generate data for table 3
    const newData = [/* Data for table 3 */];
    setTableData(newData);
    setSelectedOption(3);
  };

  return (
    <div className="row container4 container">
      <table className="table table-bordered">
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="col-lg-4 col-md-6 col-sm-6">
        <div
          className={`card card-stats ${selectedOption === 1 ? 'selected' : ''}`}
          onClick={handleButton1Click}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-header">
            <h3 className="card-title" style={{ padding: '15px' }}>Batch Report</h3>
          </div>
          <div className="card-content">
            <div className="icon icon-warning">
              <span className="material-icons" style={{ paddingTop: '15px' }}>visibility</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
        <div
          className={`card card-stats ${selectedOption === 2 ? 'selected' : ''}`}
          onClick={handleButton2Click}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-header">
            <h3 className="card-title" style={{ paddingTop: '15px' }}>Student's Report</h3>
          </div>
          <div className="card-content">
            <div className="icon icon-success" style={{ paddingTop: '15px' }}>
              <span className="material-icons">visibility</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
        <div
          className={`card card-stats ${selectedOption === 3 ? 'selected' : ''}`}
          onClick={handleButton3Click}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-header">
            <h3 className="card-title" style={{ paddingTop: '15px' }}>Test Report</h3>
          </div>
          <div className="card-content">
            <div className="icon icon-info" style={{ paddingTop: '15px' }}>
              <span className="material-icons">visibility</span>
            </div>
          </div>
        </div>
      </div>

      {selectedOption === 1 && <TableMain />}
      {selectedOption === 2 && <Table1 />}
      {selectedOption === 3 && <Table2 />}
    </div>
  );
};

export default Report;
