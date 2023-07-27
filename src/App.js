import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './Components/Sidebar';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import Reports from './Components/Reports';
import Cource from './Components/Cource';
import MainContaint from './Daashboard/MainContent';



const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
        <div id="content">       
          <NavBar />
          <login/>
          <Routes>
            {/* <Route path="/" element={<Login/>} /> */}
            <Route path="/" element={<MainContaint/>} />
            <Route path="/Cource" element={<Cource />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Profile" element={<Profile />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
