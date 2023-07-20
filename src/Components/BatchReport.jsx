import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './batchreport.css';
import DataTable from 'react-data-table-component';

const API = 'http://192.168.1.33:3001/getCourseData/';
const ENTRIES_PER_PAGE = 15;

const BatchReport = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data.length > 0) {
        setUsers(data);
        setFilteredUsers(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  const handleSearch = () => {
    const filteredData = users.filter(
      (user) =>
        user._id.toString().includes(searchTerm) ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.batch.includes(searchTerm) ||
        (typeof user.contact === 'number' && user.contact === +searchTerm)
    );
    setFilteredUsers(filteredData);
    setCurrentPage(1);
  };

  const totalEntries = filteredUsers.length;
  const totalPages = Math.ceil(totalEntries / ENTRIES_PER_PAGE);
  const indexOfLastEntry = currentPage * ENTRIES_PER_PAGE;
  const indexOfFirstEntry = indexOfLastEntry - ENTRIES_PER_PAGE;
  const currentEntries = filteredUsers.slice(indexOfFirstEntry, indexOfLastEntry);

  const columns = [
    {
      name: 'ID',
      selector: '_id',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'studentId.name',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Batch',
      selector: 'studentId.batch',
      sortable: true,
    },
    {
      name: 'Contact',
      selector: 'studentId.contact',
      sortable: true,
    },
  ];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="batch-report-container">
        <DataTable
          columns={columns}
          data={currentEntries}
          pagination
          paginationPerPage={ENTRIES_PER_PAGE}
          paginationTotalRows={totalEntries}
          paginationComponentOptions={{
            rowsPerPageText: 'Entries per page:',
            rangeSeparatorText: 'of',
            noRowsPerPage: false,
            selectAllRowsItem: false,
            selectAllRowsItemText: 'All',
          }}
        />
      </div>
    </>
  );
};

export default BatchReport;
