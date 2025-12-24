import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function ComplianceAlertsContainer() {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = [
    {
      id: "ALT-001",
      type: "Underpricing",
      hawker: "Ganesh Telore",
      severity: "High",
      status: "Open",
      description: "Reported sales value is lower than expected market value.",
    },
    {
      id: "ALT-002",
      type: "Missing Settlement",
      hawker: "Ramesh Patil",
      severity: "Medium",
      status: "Escalated",
      description: "Settlement not completed for last 3 days.",
    },
    {
      id: "ALT-003",
      type: "Repeated Violations",
      hawker: "Suresh Kale",
      severity: "High",
      status: "Open",
      description: "Multiple compliance violations detected in the last 7 days.",
    },
    {
      id: "ALT-004",
      type: "KYC Pending",
      hawker: "Amit Pawar",
      severity: "Low",
      status: "Open",
      description: "KYC documents pending beyond allowed time.",
    },
  ];

  const handleAction = (action) => {
    alert(`${action} executed for ${selectedAlert.hawker}`);
  };

  return (
    <div className="admin-module">

      {/* Header */}
      <div className="module-header">
        <h2>Compliance & Alerts</h2>
        <p>
          Monitor system-wide compliance, detect operational anomalies, and take
          corrective or enforcement actions to ensure policy adherence.
        </p>
      </div>

      {/* Overview */}
      <div className="module-grid">
        <div className="module-card danger">
          <h4>High Severity Alerts</h4>
          <span className="module-value">2</span>
          <p className="module-sub">Immediate action required</p>
        </div>

        <div className="module-card warning">
          <h4>Pending Escalations</h4>
          <span className="module-value">3</span>
          <p className="module-sub">Awaiting supervisor review</p>
        </div>

        <div className="module-card">
          <h4>Auto Alerts Triggered</h4>
          <span className="module-value">18</span>
          <p className="module-sub">System-detected issues today</p>
        </div>

        <div className="module-card highlight">
          <h4>Accounts Locked</h4>
          <span className="module-value">1</span>
          <p className="module-sub">Due to repeated violations</p>
        </div>
      </div>

      {/* Alert Table */}
      <div className="module-section">
        <h3>Active Compliance Alerts</h3>

        <div className="table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Alert ID</th>
                <th>Type</th>
                <th>Hawker</th>
                <th>Severity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {alerts.map((a) => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.type}</td>
                  <td>{a.hawker}</td>
                  <td className={`status-${a.severity.toLowerCase()}`}>
                    {a.severity}
                  </td>
                  <td>{a.status}</td>
                  <td>
                    <button
                      className="btn-outline"
                      onClick={() => setSelectedAlert(a)}
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alert Details */}
      {selectedAlert && (
        <div className="module-section">
          <h3>Alert Review</h3>

          <div className="profile-grid">
            <div><b>Alert Type:</b> {selectedAlert.type}</div>
            <div><b>Hawker:</b> {selectedAlert.hawker}</div>
            <div><b>Severity:</b> {selectedAlert.severity}</div>
            <div><b>Status:</b> {selectedAlert.status}</div>
            <div><b>Description:</b> {selectedAlert.description}</div>
          </div>

          {/* Actions */}
          <div className="action-buttons">
            <button
              className="btn-primary"
              onClick={() => handleAction("Escalated to Supervisor")}
            >
              Escalate to Supervisor
            </button>

            <button
              className="btn-secondary"
              onClick={() => handleAction("Account Locked")}
            >
              Lock Hawker Account
            </button>

            <button
              className="btn-outline"
              onClick={() => handleAction("Marked as Resolved")}
            >
              Mark as Resolved
            </button>

            <button
              className="btn-outline"
              onClick={() => setSelectedAlert(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Notes */}
      <div className="module-note">
        ⚠️ Compliance alerts are generated automatically based on predefined
        rules including pricing deviations, settlement delays, violation
        thresholds, and KYC timelines. Enforcement actions are logged for audit
        and review.
      </div>

    </div>
  );
}
