import './App.css'

import ActionContainer from './components/ActionContainer'

import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/DashboardContainer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ActionContainer />} />
        <Route path="/hawker_dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
