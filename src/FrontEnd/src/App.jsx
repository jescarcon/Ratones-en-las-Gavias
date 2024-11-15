//#region Imports
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate,Outlet } from 'react-router-dom';
import './App.css';

import NotFound from './Components/Error/NotFound';
import HomePage from './Components/Main/HomePage/HomePage';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import Navbar from './Components/Main/Navbar/Navbar';
import NewPlayer from './Components/NewPlayers/NewPlayer';
import Larp from './Components/NewPlayers/Larp/Larp';
import Npcs from './Components/NewPlayers/Npcs/Npcs';
import Dictionary from './Components/NewPlayers/Dictionary/Dictionary';

//#endregion

//#region Logica
function Logout(){
  localStorage.clear()
  return <Navigate to="/"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>
}

const ProtectedLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet /> {/* Rutas que incluyen Navbar */}
    </div>
  );
};
//#endregion

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Basic Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/logout" element={<ProtectedRoute><Logout /></ProtectedRoute>} />

        {/* Protected with Login Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/newplayer" element={<NewPlayer/>} />
          <Route path="/newplayer/larp" element={<Larp/>} />
          <Route path="/newplayer/npcs" element={<Npcs/>} />
          <Route path="/newplayer/dictionary" element={<Dictionary/>} />

        </Route>


        {/* Other Routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;