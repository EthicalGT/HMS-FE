import { useState } from 'react'
import './App.css'

import AdminPanelContainer from './components/AdminPanelContainer'
import ActionContainer from './components/ActionContainer'
import LandingPageContainer from './components/LandingPageContainer'
import AdminSidebarContainer from './components/AdminSidebarContainer'

import { Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPageContainer />} />
        <Route path="/admin" element={<AdminSidebarContainer />} />
        <Route path="/action" element={<ActionContainer />} />
      </Routes>
    </>
  )
}

export default App
