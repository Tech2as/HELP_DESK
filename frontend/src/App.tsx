import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
//import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pública */}

        {/* Rotas protegidas (com layout de dashboard) */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
