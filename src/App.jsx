import './App.css'

import ActionContainer from './components/ActionContainer'
import OtpVerification from './components/OtpVerificationContainer'
import SuccessVerification from './components/VerificationSuccessContainer'
import CompanyProfile from './components/CompanyProfileContainer'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/DashboardContainer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ActionContainer />} />
        <Route path="/hawker_dashboard" element={<Dashboard />} />
        <Route path="/verify_otp" element={<OtpVerification />} />
        <Route path="/company_profile" element={<CompanyProfile />} />
        <Route path="/success_otp" element={<SuccessVerification />} />

      </Routes>
    </>
  )
}

export default App
