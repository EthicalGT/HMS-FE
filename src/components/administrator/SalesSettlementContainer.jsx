import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function SalesSettlementContainer() {
  const [activeView, setActiveView] = useState(null);

  return (
    <div className="admin-module">
      {/* Header */}
      <div className="module-header">
        <h2>Sales & Settlement</h2>
        <p>
          Track hawker-wise sales, verify supervisor-approved reports, compare
          expected versus actual sales, and manage settlement calculations to
          ensure financial accuracy and recovery control.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="module-grid">
        <div className="module-card">
          <h4>Total Sales Today</h4>
          <span className="module-value">₹9.42L</span>
          <p className="module-sub">Across all hawkers</p>
        </div>

        <div className="module-card highlight">
          <h4>Verified Sales</h4>
          <span className="module-value">₹8.76L</span>
          <p className="module-sub">Supervisor approved</p>
        </div>

        <div className="module-card warning">
          <h4>Mismatches</h4>
          <span className="module-value">14</span>
          <p className="module-sub">Requires admin review</p>
        </div>

        <div className="module-card danger">
          <h4>Pending Settlements</h4>
          <span className="module-value">₹2.18L</span>
          <p className="module-sub">Unsettled amounts</p>
        </div>
      </div>

      {/* Sales Tracking */}
      <div className="module-section">
        <h3>Hawker-wise Sales Tracking</h3>
        <ul>
          <li>Daily sales reported per hawker</li>
          <li>Supervisor-verified sales confirmation</li>
          <li>Expected vs actual sales comparison</li>
          <li>Auto-flag deviation beyond threshold</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("sales")}
        >
          View Sales Reports
        </button>
      </div>

      {/* Settlement Calculation */}
      <div className="module-section">
        <h3>Settlement Calculation</h3>
        <ul>
          <li>Inventory cost deduction</li>
          <li>Commission calculation per hawker</li>
          <li>Hawker payout determination</li>
          <li>SPO revenue share computation</li>
          <li>Net settlement value generation</li>
        </ul>

        <button
          className="btn-primary"
          onClick={() => setActiveView("settlement")}
        >
          Calculate Settlements
        </button>
      </div>

      {/* Supervisor Verification */}
      <div className="module-section">
        <h3>Supervisor-Verified Sales</h3>
        <ul>
          <li>Supervisor confirmation of daily sales</li>
          <li>Geo/time-based verification support</li>
          <li>Discrepancy notes attached</li>
          <li>Supervisor accountability logging</li>
        </ul>

        <button
          className="btn-secondary"
          onClick={() => setActiveView("verified")}
        >
          View Verified Sales
        </button>
      </div>

      {/* Settlement Actions */}
      <div className="module-section">
        <h3>Settlement Actions</h3>
        <ul>
          <li>Approve settlements for payout</li>
          <li>Flag mismatches for investigation</li>
          <li>Force recovery from hawker wallet</li>
          <li>Generate settlement audit trail</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("actions")}
        >
          Settlement Actions
        </button>
      </div>

      {/* Dynamic Functional Views */}
      {activeView && (
        <div className="module-section">
          <h3>Settlement Details</h3>

          {activeView === "sales" && (
            <ul>
              <li>Hawker-wise sales ledger</li>
              <li>Expected vs actual comparison table</li>
              <li>Deviation percentage calculation</li>
              <li>Auto-highlight abnormal patterns</li>
            </ul>
          )}

          {activeView === "settlement" && (
            <ul>
              <li>Total sales aggregation</li>
              <li>Inventory cost subtraction</li>
              <li>Commission deduction</li>
              <li>Hawker net payout</li>
              <li>SPO revenue share allocation</li>
            </ul>
          )}

          {activeView === "verified" && (
            <ul>
              <li>Supervisor-approved sales entries</li>
              <li>Verification timestamp</li>
              <li>Supervisor remarks</li>
              <li>Audit log reference</li>
            </ul>
          )}

          {activeView === "actions" && (
            <ul>
              <li>Approve settlement for payout</li>
              <li>Flag mismatch with reason</li>
              <li>Force recovery from wallet or future earnings</li>
              <li>Lock settlement post-approval</li>
            </ul>
          )}

          <button
            className="btn-outline"
            onClick={() => setActiveView(null)}
          >
            Close
          </button>
        </div>
      )}

      {/* Compliance Note */}
      <div className="module-note">
        ⚠️ Sales & Settlement is a financial-critical module. All approvals,
        mismatches, and forced recoveries are permanently logged with admin and
        supervisor accountability for audit and compliance.
      </div>
    </div>
  );
}
