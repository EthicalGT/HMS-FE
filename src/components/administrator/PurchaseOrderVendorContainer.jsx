import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function PurchaseOrdersVendorContainer() {
  const [activeView, setActiveView] = useState(null);

  return (
    <div className="admin-module">
      {/* Header */}
      <div className="module-header">
        <h2>Purchase Orders (PO) – Vendor</h2>
        <p>
          Manage procurement by raising purchase orders to vendors, comparing
          pricing, approving orders, and tracking deliveries to ensure timely
          inventory availability.
        </p>
      </div>

      {/* Insights */}
      <div className="module-grid">
        <div className="module-card">
          <h4>Open POs</h4>
          <span className="module-value">24</span>
          <p className="module-sub">Awaiting approval or delivery</p>
        </div>

        <div className="module-card highlight">
          <h4>Approved POs</h4>
          <span className="module-value">61</span>
          <p className="module-sub">Approved and in execution</p>
        </div>

        <div className="module-card warning">
          <h4>Price Variations</h4>
          <span className="module-value">9</span>
          <p className="module-sub">Vendors with higher quoted prices</p>
        </div>

        <div className="module-card danger">
          <h4>Delayed Deliveries</h4>
          <span className="module-value">5</span>
          <p className="module-sub">Past expected delivery date</p>
        </div>
      </div>

      {/* Create PO */}
      <div className="module-section">
        <h3>Create Purchase Order</h3>
        <ul>
          <li>Raise PO for one or multiple inventory items</li>
          <li>Select vendor and required quantity</li>
          <li>Auto-calculate estimated procurement cost</li>
          <li>Attach delivery location and expected date</li>
          <li>Submit PO for approval</li>
        </ul>

        <button
          className="btn-primary"
          onClick={() => setActiveView("create")}
        >
          Raise New PO
        </button>
      </div>

      {/* Vendor Comparison */}
      <div className="module-section">
        <h3>Vendor Comparison</h3>
        <ul>
          <li>Compare vendor pricing for same products</li>
          <li>View historical purchase rates</li>
          <li>Analyze delivery timelines and reliability</li>
          <li>Identify preferred and high-risk vendors</li>
          <li>Support cost-optimized procurement decisions</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("compare")}
        >
          Compare Vendors
        </button>
      </div>

      {/* PO Approval Workflow */}
      <div className="module-section">
        <h3>PO Approval Workflow</h3>
        <ul>
          <li>Review submitted purchase orders</li>
          <li>Verify pricing, quantity, and vendor details</li>
          <li>Approve or reject POs with remarks</li>
          <li>Auto-lock approved POs from edits</li>
          <li>Maintain approval audit trail</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("approval")}
        >
          View Approval Queue
        </button>
      </div>

      {/* Delivery Tracking */}
      <div className="module-section">
        <h3>Delivery Tracking</h3>
        <ul>
          <li>Track vendor-wise delivery status</li>
          <li>Monitor expected vs actual delivery dates</li>
          <li>Flag partial or delayed deliveries</li>
          <li>Update received quantity upon arrival</li>
          <li>Close PO after successful receipt</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("delivery")}
        >
          Track Deliveries
        </button>
      </div>

      {/* Dynamic Detail View */}
      {activeView && (
        <div className="module-section">
          <h3>Detailed View</h3>

          {activeView === "create" && (
            <ul>
              <li>Item list with quantity and unit price</li>
              <li>Vendor selection and delivery location</li>
              <li>Estimated total PO value</li>
              <li>Submit for approval</li>
            </ul>
          )}

          {activeView === "compare" && (
            <ul>
              <li>Vendor-wise price comparison table</li>
              <li>Best price and fastest delivery indicators</li>
              <li>Historical vendor performance metrics</li>
            </ul>
          )}

          {activeView === "approval" && (
            <ul>
              <li>Pending PO review list</li>
              <li>Approve / cancel PO with comments</li>
              <li>Approval timestamp and approver details</li>
            </ul>
          )}

          {activeView === "delivery" && (
            <ul>
              <li>In-transit and delivered PO list</li>
              <li>Delivery confirmation and quantity mismatch flags</li>
              <li>Auto stock update upon receipt</li>
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
        ⚠️ Purchase Order workflows are audit-enabled. Any pricing deviation,
        delayed delivery, or quantity mismatch will be logged for compliance and
        vendor performance evaluation.
      </div>
    </div>
  );
}
