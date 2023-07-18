import React, { useState } from 'react';
import './MainContaint.css';
import Table1 from './MainTable/Table1';
import Table2 from './MainTable/Table2';
import Table3 from './MainTable/Table3';
import Table4 from './MainTable/Table4';


const MainContaint = () => {
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
  const handleButton4Click = () => {
    // Logic to fetch or generate data for table 3
    const newData = [/* Data for table 3 */];
    setTableData(newData);
    setSelectedOption(4);
  };
  return (
    <div className="row container4 container">
      <table>
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
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div
          className={`card card-stats ${selectedOption === 1 ? 'selected' : ''}`}
          onClick={handleButton1Click} style={{ cursor: 'pointer' }}
        >
          <div className="card-header" >
            <h3 className="card-title" style={{padding:'20px',fontSize:"25px"}}>Total LOI Students</h3>
          </div>
          <div className="card-content" style={{marginTop:'27px',tabSize:'40px'}}>
            <div className="icon icon-warning">
              <span className="material-icons">visibility</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div
          className={`card card-stats ${selectedOption === 2 ? 'selected' : ''}`}
          onClick={handleButton2Click} style={{ cursor: 'pointer' }}
        >
          <div className="card-header">
            <h3 className="card-title" style={{padding:'20px',fontSize:"25px"}}>Afront Students</h3>
          </div>
          <div className="card-content"style={{marginTop:'27px',tabSize:'40px'}}>
            <div className="icon icon-success">
              <span className="material-icons">visibility</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div
          className={`card card-stats ${selectedOption === 3 ? 'selected' : ''}`}
          onClick={handleButton3Click} style={{ cursor: 'pointer' }}
        >
          <div className="card-header">
            <h3 className="card-title" style={{padding:'20px',fontSize:"25px"}}>Total Test</h3>
          </div>
          <div className="card-content"style={{marginTop:'27px',tabSize:'40px'}}>
            <div className="icon icon-info">
              <span className="material-icons">visibility</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div
          className={`card card-stats ${selectedOption === 4 ? 'selected' : ''}`}
          onClick={handleButton4Click} style={{ cursor: 'pointer' }}
        >
          <div className="card-header">
            <h3 className="card-title" style={{padding:'20px',fontSize:"25px"}}>Batch Done</h3>

          </div>
          <div className="card-content"style={{marginTop:'27px',tabSize:'40px'}}>
            <div className="icon icon-info">
              <span className="material-icons">visibility</span>
            </div>
          </div>
        </div>
      </div>
      {selectedOption === 1 && <Table1 />}
      {selectedOption === 2 && <Table2 />}
      {selectedOption === 3 && <Table3 />}
      {selectedOption === 4 && <Table4 />}
    </div>
  );
};

export default MainContaint;
