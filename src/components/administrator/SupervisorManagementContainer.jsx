import "../../assets/css/AdminPanelContainer.css";

export default function SupervisorManagement() {
  return (
    <div className="admin-module">

      <div className="module-header">
        <h2>Supervisor Management</h2>
        <p>
          Onboard supervisors, assign operational zones, map hawker groups, and
          monitor field-level performance to ensure smooth execution of daily
          sales operations.
        </p>
      </div>

      <div className="module-grid">

        <div className="module-card">
          <h4>Total Supervisors</h4>
          <span className="module-value">42</span>
          <p className="module-sub">
            Registered supervisors across all zones
          </p>
        </div>

        <div className="module-card highlight">
          <h4>Active Today</h4>
          <span className="module-value">36</span>
          <p className="module-sub">
            Supervisors currently managing hawker groups
          </p>
        </div>

        <div className="module-card warning">
          <h4>Unassigned Zones</h4>
          <span className="module-value">3</span>
          <p className="module-sub">
            Zones pending supervisor allocation
          </p>
        </div>

        <div className="module-card danger">
          <h4>Escalated Issues</h4>
          <span className="module-value">5</span>
          <p className="module-sub">
            Critical issues awaiting admin review
          </p>
        </div>

      </div>

      <div className="module-section">
        <h3>Supervisor Responsibilities</h3>
        <ul>
          <li>Onboard new supervisors with zone and area mapping</li>
          <li>Assign hawker groups to supervisors based on geography</li>
          <li>Monitor real-time sales and inventory updates from hawkers</li>
          <li>Track supervisor performance metrics and compliance</li>
          <li>Handle issue escalation and report anomalies to admin</li>
        </ul>
      </div>

      <div className="module-section">
        <h3>Administrative Actions</h3>
        <ul>
          <li>Assign or reassign hawkers to supervisors</li>
          <li>Map zones and operating areas dynamically</li>
          <li>View supervisor performance summaries</li>
          <li>Escalate operational or compliance-related issues</li>
          <li>Enable or suspend supervisor access when required</li>
        </ul>
      </div>

      <div className="module-note">
        ⚠️ This module is currently in demo mode. Live tracking, performance
        analytics, and escalation workflows will be implemented in the next
        development phase.
      </div>

    </div>
  );
}
