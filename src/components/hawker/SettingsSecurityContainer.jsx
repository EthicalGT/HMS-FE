import { useState } from "react";
import "../../assets/css/HawkerDashboardContainer.css";

export default function SettingsSecurityContainer() {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="settings-container">
      <h2>Settings & Security</h2>

      {/* Language Selection */}
      <div className="settings-card">
        <h3>Language Preference</h3>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="settings-select"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
        </select>
        <p>Selected language: {language}</p>
      </div>

      {/* Logout */}
      <div className="settings-card">
        <h3>Logout</h3>
        <p>Click below to securely logout of your account.</p>
        <button className="btn-primary">Logout</button>
      </div>

      {/* Device Management */}
      <div className="settings-card">
        <h3>Device Management (Future)</h3>
        <p>
          Manage devices currently logged in. Feature will be available soon.
        </p>
        <button className="btn-outline" disabled>
          View Devices
        </button>
      </div>

      {/* Privacy & Terms */}
      <div className="settings-card">
        <h3>Privacy & Terms</h3>
        <p>
          Review our privacy policies and terms of service to understand how
          your data is managed.
        </p>
        <button className="btn-outline">View Privacy & Terms</button>
      </div>
    </div>
  );
}
