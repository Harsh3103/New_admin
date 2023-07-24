import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Cource from './Cource';
import Reports from './Reports';
import Profile from './Profile';
import Login from '../LoginPage/login'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cource" element={<Cource/>} />
                <Route path='/report' element={<Reports/>} />
                <Route path="/profile" element={<Profile/>}/>
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter