import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function InventoryAssetManagementContainer() {
  const [activeView, setActiveView] = useState(null);

  return (
    <div className="admin-module">
      {/* Header */}
      <div className="module-header">
        <h2>Inventory & Asset Management</h2>
        <p>
          Maintain complete visibility of products, assets, stock distribution,
          and asset lifecycle across the hawker network to ensure accountability,
          traceability, and operational control.
        </p>
      </div>

      {/* Overview */}
      <div className="module-grid">
        <div className="module-card">
          <h4>Total Products</h4>
          <span className="module-value">312</span>
          <p className="module-sub">Active SKUs in product master</p>
        </div>

        <div className="module-card highlight">
          <h4>Total Assets</h4>
          <span className="module-value">1,148</span>
          <p className="module-sub">Carts, umbrellas, QR stands, etc.</p>
        </div>

        <div className="module-card warning">
          <h4>Low Stock Alerts</h4>
          <span className="module-value">18</span>
          <p className="module-sub">Items nearing reorder threshold</p>
        </div>

        <div className="module-card danger">
          <h4>Assets Under Maintenance</h4>
          <span className="module-value">7</span>
          <p className="module-sub">Reported damage or servicing required</p>
        </div>
      </div>

      {/* Product Master */}
      <div className="module-section">
        <h3>Product Master</h3>
        <ul>
          <li>Create and manage all sellable products and SKUs</li>
          <li>Define category, unit type, pricing, and vendor mapping</li>
          <li>Track procurement cost and market selling price</li>
          <li>Enable or disable products for distribution</li>
          <li>Maintain historical pricing and SKU versioning</li>
        </ul>

        <button
          className="btn-primary"
          onClick={() => setActiveView("product")}
        >
          View Product Master
        </button>
      </div>

      {/* Asset Master */}
      <div className="module-section">
        <h3>Asset Master</h3>
        <ul>
          <li>Register all physical assets (cart, umbrella, QR stand, etc.)</li>
          <li>Assign unique asset IDs and asset categories</li>
          <li>Track ownership and allocation history</li>
          <li>Define asset expected lifespan and depreciation</li>
          <li>Enable asset reusability and reassignment</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("asset")}
        >
          View Asset Master
        </button>
      </div>

      {/* Stock Levels */}
      <div className="module-section">
        <h3>Stock Levels & Distribution</h3>
        <ul>
          <li>Track warehouse-level stock availability</li>
          <li>Monitor stock assigned to each hawker</li>
          <li>View remaining vs sold inventory</li>
          <li>Detect stock mismatches and leakage</li>
          <li>Trigger replenishment or recall workflows</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("stock")}
        >
          View Stock Levels
        </button>
      </div>

      {/* Asset Lifecycle */}
      <div className="module-section">
        <h3>Asset Lifecycle & Maintenance</h3>
        <ul>
          <li>Track asset assignment to hawkers</li>
          <li>Log asset condition (Good / Damaged / Unusable)</li>
          <li>Record maintenance and repair history</li>
          <li>Identify frequently damaged assets</li>
          <li>Retire assets reaching end-of-life</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("lifecycle")}
        >
          View Asset Lifecycle
        </button>
      </div>

      {/* Dynamic Panels */}
      {activeView && (
        <div className="module-section">
          <h3>Detailed View</h3>

          {activeView === "product" && (
            <ul>
              <li>Product ID, name, category, and vendor mapping</li>
              <li>Purchase cost vs market selling price</li>
              <li>Assigned quantities per hawker</li>
              <li>Enable / disable product availability</li>
            </ul>
          )}

          {activeView === "asset" && (
            <ul>
              <li>Asset ID and asset type</li>
              <li>Current assigned hawker</li>
              <li>Condition status</li>
              <li>Assignment and transfer history</li>
            </ul>
          )}

          {activeView === "stock" && (
            <ul>
              <li>Warehouse stock snapshot</li>
              <li>Hawker-wise stock breakup</li>
              <li>Low stock & overstock indicators</li>
              <li>Reorder and recall triggers</li>
            </ul>
          )}

          {activeView === "lifecycle" && (
            <ul>
              <li>Maintenance request logs</li>
              <li>Repair dates and cost tracking</li>
              <li>Asset downtime reporting</li>
              <li>Decommissioned asset records</li>
            </ul>
          )}

          <button
            className="btn-outline"
            onClick={() => setActiveView(null)}
          >
            Close View
          </button>
        </div>
      )}

      {/* Note */}
      <div className="module-note">
        ⚠️ Inventory & Asset Management is currently operating in demo mode.
        Automated stock reconciliation, QR-based asset tracking, and predictive
        maintenance alerts will be introduced in upcoming development phases.
      </div>
    </div>
  );
}
