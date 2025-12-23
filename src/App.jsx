import "./App.css";

import ActionContainer from "./components/ActionContainer";
import OtpVerification from "./components/OtpVerificationContainer";
import SuccessVerificationContainer from "./components/VerificationSuccessContainer";
import CompanyProfileContainer from "./components/CompanyProfileContainer";
import { Routes, Route } from "react-router-dom";
import HawkerDashboardContainer from "./components/HawkerDashboardContainer";
import VendorDashboardContainer from "./components/VendorDashboardContainer";
import SupervisorDashboardContainer from "./components/SupervisorDashboardContainer";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ActionContainer />} />
        <Route
          path="/hawker_dashboard"
          element={<HawkerDashboardContainer />}
        />
        <Route path="/verify_otp" element={<OtpVerification />} />
        <Route path="/company_profile" element={<CompanyProfileContainer />} />
        <Route path="/success_otp" element={<SuccessVerificationContainer />} />
        <Route path="/supervisor_dashboard" element={<SupervisorDashboardContainer />} />


      </Routes>
    </>
  );
}

export default App;
