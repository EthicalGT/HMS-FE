import React from "react";
import "../../assets/css/AdminPanelContainer.css"; 

export default function UserManagementContainer() {
  return (
    <div className="admin-module">

      {/* Header */}
      <div className="module-header">
        <h2>User Management</h2>
        <p>
          Manage administrative users, assign roles, and control system access
          using role-based permissions.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="module-grid">

        <div className="module-card">
          <h4>Admin Users</h4>
          <span className="module-value">12</span>
          <p className="module-sub">
            Total registered admin-level users
          </p>
        </div>

        <div className="module-card highlight">
          <h4>Supervisors</h4>
          <span className="module-value">38</span>
          <p className="module-sub">
            Active supervisors managing hawkers
          </p>
        </div>

        <div className="module-card warning">
          <h4>Disabled Accounts</h4>
          <span className="module-value">3</span>
          <p className="module-sub">
            Access temporarily revoked
          </p>
        </div>

      </div>

      {/* Actions Section */}
      <div className="module-section">
        <h3>Available Actions</h3>
        <ul>
          <li>Create and register new admin or supervisor users</li>
          <li>Edit user profile and contact details</li>
          <li>Assign roles (Admin / Supervisor)</li>
          <li>Enable or disable system access</li>
          <li>Apply role-based access control (RBAC)</li>
        </ul>
      </div>

      {/* Demo Note */}
      <div className="module-note">
        ⚠️ This module is currently in demo mode. Functional implementation will
        be completed in the next development phase.
      </div>

    </div>
  );
}

