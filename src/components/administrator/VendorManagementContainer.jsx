import React from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function VendorManagement() {
  return (
    <div className="admin-module">

      {/* Header */}
      <div className="module-header">
        <h2>Vendor Management</h2>
        <p>
          Manage vendors, onboarding approvals, product categories, purchase
          orders, and payment status across the system.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="module-grid">

        <div className="module-card">
          <h4>Total Vendors</h4>
          <span className="module-value">46</span>
          <p className="module-sub">
            Registered vendors in the system
          </p>
        </div>

        <div className="module-card highlight">
          <h4>Active Vendors</h4>
          <span className="module-value">39</span>
          <p className="module-sub">
            Vendors currently supplying inventory
          </p>
        </div>

        <div className="module-card warning">
          <h4>Pending Approvals</h4>
          <span className="module-value">5</span>
          <p className="module-sub">
            Vendor onboarding requests awaiting review
          </p>
        </div>

        <div className="module-card danger">
          <h4>Suspended Vendors</h4>
          <span className="module-value">2</span>
          <p className="module-sub">
            Vendors temporarily restricted
          </p>
        </div>

      </div>

      {/* Vendor Profile Section */}
      <div className="module-header">
        <h2>Vendor Management</h2>
        <p>
          Manage vendor onboarding, category mapping, performance monitoring, and
          approval workflows for all registered supply partners.
        </p>
      </div>


      <div className="module-section">
        <h3>Vendor Operations</h3>
        <ul>
          <li>Vendor onboarding and verification</li>
          <li>Product and category mapping</li>
          <li>Purchase Order tracking and supply updates</li>
          <li>Payment and settlement visibility</li>
          <li>Vendor performance monitoring and ratings</li>
        </ul>
      </div>

      <div className="module-section">
        <h3>Vendor Management Table</h3>

        <div className="table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Vendor ID</th>
                <th>Company Name</th>
                <th>Category</th>
                <th>Products</th>
                <th>PO History</th>
                <th>Payment Status</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>VEN-00128</td>
                <td>FreshMart Distributors</td>
                <td>Groceries</td>
                <td>148</td>
                <td>32 Orders</td>
                <td>Clear</td>
                <td className="status-active">Approved</td>
                <td className="action-buttons">
                  <button className="btn-primary">View Profile</button>
                  <button className="btn-secondary">Suspend</button>
                  <button className="btn-outline">Performance</button>
                </td>
              </tr>

              <tr>
                <td>VEN-00156</td>
                <td>City Dairy Suppliers</td>
                <td>Dairy</td>
                <td>62</td>
                <td>19 Orders</td>
                <td>Pending</td>
                <td className="status-warning">Pending Approval</td>
                <td className="action-buttons">
                  <button className="btn-primary">Approve</button>
                  <button className="btn-secondary">Reject</button>
                </td>
              </tr>

              <tr>
                <td>VEN-00092</td>
                <td>Healthy Harvest Foods</td>
                <td>Organic</td>
                <td>89</td>
                <td>41 Orders</td>
                <td>Clear</td>
                <td className="status-danger">Suspended</td>
                <td className="action-buttons">
                  <button className="btn-primary">Reinstate</button>
                  <button className="btn-outline">View Reason</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      <div className="module-note">
        Admins can approve, suspend, review performance, and monitor purchase and payment
        activity of all registered vendors.
      </div>


      {/* Category Mapping */}
      <div className="module-section">
        <h3>Vendor Category Mapping</h3>
        <ul>
          <li>Map vendors to one or more product categories</li>
          <li>Control category-wise sourcing and procurement</li>
          <li>Prevent overlapping or unauthorized category access</li>
        </ul>
      </div>

      {/* Actions */}
      <div className="module-section">
        <h3>Administrative Actions</h3>
        <ul>
          <li>Approve new vendor onboarding requests</li>
          <li>Suspend or re-activate vendor accounts</li>
          <li>View vendor-wise performance and fulfillment ratio</li>
          <li>Monitor delayed deliveries and PO compliance</li>
          <li>Track outstanding payments and settlement history</li>
        </ul>
      </div>

      {/* Demo Note */}
      <div className="module-note">
        ⚠️ Vendor Management is currently running in demo mode. Functional
        workflows including onboarding approvals, PO tracking, and payments
        will be implemented in upcoming development phases.
      </div>

    </div>
  );
}
