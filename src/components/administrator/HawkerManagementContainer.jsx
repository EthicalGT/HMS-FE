import { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function HawkerManagementContainer() {
  const [selectedHawker, setSelectedHawker] = useState(null);

  const hawkers = [
    {
      id: "HWK-101",
      name: "Ganesh Telore",
      phone: "9876543210",
      kyc: "Verified",
      status: "Active",
      supervisor: "Rahul Sharma",
      wallet: 7000,
      inventoryValue: 12400,
      violations: 1,
    },
    {
      id: "HWK-102",
      name: "Ramesh Patil",
      phone: "9123456780",
      kyc: "Pending",
      status: "Blocked",
      supervisor: "Amit Verma",
      wallet: 1200,
      inventoryValue: 4800,
      violations: 3,
    },
  ];

  const insights = {
    inventoryValue: 12400,
    todaysSales: 3850,
    walletBalance: 7000,
    pendingSettlement: 2847,
    kycStatus: "Verified",
    violations: 1,
  };

  const handleAction = (action) => {
    alert(`${action} executed for ${selectedHawker.name}`);
  };

  return (
    <div className="admin-module">
      {/* Module Header */}
      <div className="module-header">
        <h2>Hawker Management</h2>
        <p>
          Onboard and manage hawkers, verify KYC status, assign supervisors,
          monitor inventory and wallet balances, track violations, and take
          administrative actions to ensure compliance and smooth daily
          operations.
        </p>
      </div>

      {/* Insights Grid (Supervisor-style cards) */}
      <div className="module-grid">
        <div className="module-card">
          <h4>Assigned Inventory Value</h4>
          <span className="module-value">₹{insights.inventoryValue}</span>
          <p className="module-sub">Total stock value assigned</p>
        </div>

        <div className="module-card highlight">
          <h4>Today’s Sales</h4>
          <span className="module-value">₹{insights.todaysSales}</span>
          <p className="module-sub">Sales reported today</p>
        </div>

        <div className="module-card">
          <h4>Wallet Balance</h4>
          <span className="module-value">₹{insights.walletBalance}</span>
          <p className="module-sub">Available balance</p>
        </div>

        <div className="module-card warning">
          <h4>Pending Settlement</h4>
          <span className="module-value">₹{insights.pendingSettlement}</span>
          <p className="module-sub">Payable to SPO</p>
        </div>

        <div className="module-card">
          <h4>KYC Status</h4>
          <span className="module-value">{insights.kycStatus}</span>
          <p className="module-sub">Verification state</p>
        </div>

        <div className="module-card danger">
          <h4>Active Violations</h4>
          <span className="module-value">{insights.violations}</span>
          <p className="module-sub">
            {insights.violations > 0
              ? "Supervisor attention required"
              : "No violations"}
          </p>
        </div>
      </div>

      {/* Hawker List */}
      <div className="module-section">
        <h3>Registered Hawkers</h3>

        <div className="hawker-table-wrapper">
          <table className="hawker-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Hawker ID</th>
                <th>KYC</th>
                <th>Status</th>
                <th>Supervisor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hawkers.map((h) => (
                <tr key={h.id}>
                  <td>{h.name}</td>
                  <td>{h.id}</td>
                  <td>{h.kyc}</td>
                  <td>{h.status}</td>
                  <td>{h.supervisor}</td>
                  <td>
                    <button
                      className="btn-outline"
                      onClick={() => setSelectedHawker(h)}
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hawker Profile */}
      {selectedHawker && (
        <div className="module-section">
          <h3>Hawker Profile</h3>

          <div className="profile-grid">
            <div><b>Name:</b> {selectedHawker.name}</div>
            <div><b>Phone:</b> {selectedHawker.phone}</div>
            <div><b>KYC Status:</b> {selectedHawker.kyc}</div>
            <div><b>Supervisor:</b> {selectedHawker.supervisor}</div>
            <div><b>Inventory Value:</b> ₹{selectedHawker.inventoryValue}</div>
            <div><b>Wallet Balance:</b> ₹{selectedHawker.wallet}</div>
            <div><b>Violation History:</b> {selectedHawker.violations}</div>
            <div><b>Account Status:</b> {selectedHawker.status}</div>
          </div>

          <div className="profile-actions">
            <button className="btn-primary" onClick={() => handleAction("Approve Hawker")}>
              Approve
            </button>
            <button className="btn-outline" onClick={() => handleAction("Block Hawker")}>
              Block
            </button>
            <button className="btn-outline" onClick={() => handleAction("Reset Wallet")}>
              Reset Wallet
            </button>
            <button className="btn-outline" onClick={() => handleAction("Force Settlement")}>
              Force Settlement
            </button>
            <button className="btn-outline" onClick={() => handleAction("Reassign Supervisor")}>
              Reassign Supervisor
            </button>
            <button className="btn-outline" onClick={() => setSelectedHawker(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="module-note">
        ⚠️ This module is currently in demo mode. Live onboarding workflows,
        compliance enforcement, and financial controls will be enabled in the
        next development phase.
      </div>
    </div>
  );
}
