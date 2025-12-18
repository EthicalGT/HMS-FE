import './App.css'

import AdminSidebarContainer from './components/AdminSidebarContainer'
import ActionContainer from './components/ActionContainer'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ActionContainer />} />
        <Route path="/admin" element={<AdminSidebarContainer />} />
      </Routes>
    </>
  )
}

export default App
