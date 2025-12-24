import "./App.css";

import ActionContainer from "./components/ActionContainer";
import OtpVerification from "./components/OtpVerificationContainer";
import SuccessVerificationContainer from "./components/VerificationSuccessContainer";
import CompanyProfileContainer from "./components/CompanyProfileContainer";
import { Routes, Route } from "react-router-dom";
import HawkerDashboardContainer from "./components/HawkerDashboardContainer";
import SupervisorDashboardContainer from "./components/SupervisorDashboardContainer";
import AdminPanelContainer from "./components/AdminPanelContainer";

function App() {
  return (
    <>
      <Routes>
        {/* Universal Routes*/}
        <Route path="/verify_otp" element={<OtpVerification />} />
        <Route path="/" element={<ActionContainer />} />
        <Route path="/success_otp" element={<SuccessVerificationContainer />} />

        {/* Hawker Routes*/}
        <Route
          path="/hawker/dashboard"
          element={<HawkerDashboardContainer />}
        />

        {/* Supervisor Routes*/}
        <Route
          path="/supervisor/dashboard"
          element={<SupervisorDashboardContainer />}
        />
        <Route
          path="/supervisor/company_profile"
          element={<CompanyProfileContainer />}
        />

        {/* Admin Routes*/}
        <Route path="/admin/dashboard" element={<AdminPanelContainer />} />
      </Routes>
    </>
  );
}

export default App;
