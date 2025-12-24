import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function SystemSettingsContainer() {
  const [language, setLanguage] = useState("English");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [apiKey, setApiKey] = useState("");
  const [kycProvider, setKycProvider] = useState("Default Provider");
  const [auditLogs, setAuditLogs] = useState([
    { id: 1, action: "Hawker KYC approved", date: "2025-12-21" },
    { id: 2, action: "Vendor PO approved", date: "2025-12-22" },
    { id: 3, action: "Inventory allocated to hawker", date: "2025-12-23" },
  ]);

  return (
    <div className="admin-module">

      {/* Header */}
      <div className="module-header">
        <h2>System Settings</h2>
        <p>
          Configure system-wide options including language, notifications, API connections,
          KYC providers, and audit logs for administrative oversight and compliance.
        </p>
      </div>

      {/* Settings Grid */}
      <div className="module-grid">

        {/* Language Setting */}
        <div className="module-card">
          <h4>Language</h4>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
          </select>
          <p className="module-sub">Select platform language for all users</p>
        </div>

        {/* Notification Rules */}
        <div className="module-card highlight">
          <h4>Notifications</h4>
          <label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
            />
            Enable system alerts
          </label>
          <p className="module-sub">Control global alert rules and notifications</p>
        </div>

        {/* API Configuration */}
        <div className="module-card warning">
          <h4>API Configuration</h4>
          <input
            type="text"
            placeholder="Enter API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <p className="module-sub">Configure API integrations for third-party services</p>
        </div>

        {/* KYC Provider Setup */}
        <div className="module-card danger">
          <h4>KYC Provider</h4>
          <select
            value={kycProvider}
            onChange={(e) => setKycProvider(e.target.value)}
          >
            <option value="Default Provider">Default Provider</option>
            <option value="Provider A">Provider A</option>
            <option value="Provider B">Provider B</option>
          </select>
          <p className="module-sub">Select KYC verification provider for users</p>
        </div>

      </div>

      {/* Audit Logs */}
      <div className="module-section">
        <h3>Audit Logs</h3>
        <div className="table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Action</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.action}</td>
                  <td>{log.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="module-note">
        ⚠️ System settings changes are logged and may require re-authentication for effect.
      </div>

    </div>
  );
}
