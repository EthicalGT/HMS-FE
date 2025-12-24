import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function AccountingWalletManagementContainer() {
  const [activeView, setActiveView] = useState(null);

  return (
    <div className="admin-module">
      {/* Header */}
      <div className="module-header">
        <h2>Accounting & Wallet Management</h2>
        <p>
          Manage hawker wallets, vendor payments, and system-level accounting
          through a centralized ledger with complete credit/debit traceability
          and settlement visibility.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="module-grid">
        <div className="module-card">
          <h4>Total Wallet Balance</h4>
          <span className="module-value">₹14.6L</span>
          <p className="module-sub">Combined hawker wallet balance</p>
        </div>

        <div className="module-card highlight">
          <h4>Vendor Payables</h4>
          <span className="module-value">₹6.2L</span>
          <p className="module-sub">Pending vendor payments</p>
        </div>

        <div className="module-card warning">
          <h4>Outstanding Recoveries</h4>
          <span className="module-value">₹1.4L</span>
          <p className="module-sub">Recoverable from hawkers</p>
        </div>

        <div className="module-card danger">
          <h4>Ledger Flags</h4>
          <span className="module-value">9</span>
          <p className="module-sub">Transactions requiring review</p>
        </div>
      </div>

      {/* Hawker Wallets */}
      <div className="module-section">
        <h3>Hawker Wallets</h3>
        <ul>
          <li>Individual wallet balance per hawker</li>
          <li>Auto-credit from approved settlements</li>
          <li>Debit on inventory allocation or recovery</li>
          <li>Negative balance tracking</li>
        </ul>

        <button
          className="btn-primary"
          onClick={() => setActiveView("hawker-wallets")}
        >
          View Hawker Wallets
        </button>
      </div>

      {/* Vendor Payments */}
      <div className="module-section">
        <h3>Vendor Payments</h3>
        <ul>
          <li>Vendor-wise payable tracking</li>
          <li>PO-linked payment reconciliation</li>
          <li>Partial and full payment support</li>
          <li>Payment status visibility</li>
        </ul>

        <button
          className="btn-secondary"
          onClick={() => setActiveView("vendor-payments")}
        >
          View Vendor Payments
        </button>
      </div>

      {/* Admin Ledger */}
      <div className="module-section">
        <h3>Admin Ledger</h3>
        <ul>
          <li>System-wide credit and debit entries</li>
          <li>Auto-generated ledger references</li>
          <li>Immutable audit logs</li>
          <li>Settlement-linked entries</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("admin-ledger")}
        >
          View Admin Ledger
        </button>
      </div>

      {/* Dynamic Functional Views */}
      {activeView && (
        <div className="module-section">
          <h3>Detailed View</h3>

          {activeView === "hawker-wallets" && (
            <ul>
              <li>Wallet ID & hawker mapping</li>
              <li>Credit: settlements, incentives</li>
              <li>Debit: inventory, penalties, recovery</li>
              <li>Running balance calculation</li>
              <li>Wallet freeze / reset controls</li>
            </ul>
          )}

          {activeView === "vendor-payments" && (
            <ul>
              <li>Vendor invoice references</li>
              <li>PO-based payment breakdown</li>
              <li>Payment status: pending / partial / paid</li>
              <li>Manual & automated settlement support</li>
              <li>Payment confirmation logs</li>
            </ul>
          )}

          {activeView === "admin-ledger" && (
            <ul>
              <li>Transaction timestamp & actor</li>
              <li>Source module reference</li>
              <li>Debit / credit classification</li>
              <li>Linked settlement or PO ID</li>
              <li>Audit lock after approval</li>
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
        ⚠️ Accounting & Wallet Management is a financial-critical module. All
        credits, debits, settlements, and recoveries are permanently logged and
        cannot be altered once approved. This ensures full audit and regulatory
        compliance.
      </div>
    </div>
  );
}
