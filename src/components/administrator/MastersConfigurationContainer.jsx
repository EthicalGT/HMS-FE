import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function MastersConfigurationContainer() {
  const [selectedMaster, setSelectedMaster] = useState(null);

  const masters = [
    { id: "MST-001", name: "Product Categories", description: "Define and manage product types and subcategories." },
    { id: "MST-002", name: "Vendor Categories", description: "Categorize vendors based on supply type and region." },
    { id: "MST-003", name: "Commission Rates", description: "Set commission rates applicable to hawkers or SPOs." },
    { id: "MST-004", name: "Market Price Rules", description: "Define price rules to ensure fair market compliance." },
    { id: "MST-005", name: "Penalty Rules", description: "Define violation penalties for hawkers or supervisors." },
    { id: "MST-006", name: "Zones & Areas", description: "Manage operational zones and area mapping for hawkers & supervisors." },
  ];

  const handleAction = (action) => {
    alert(`${action} executed for ${selectedMaster.name}`);
  };

  return (
    <div className="admin-module">

      {/* Header */}
      <div className="module-header">
        <h2>Masters & Configuration</h2>
        <p>
          Configure system behavior including product categories, vendor mapping,
          commissions, pricing, penalties, and operational zones to ensure smooth
          daily operations.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="module-grid">
        <div className="module-card">
          <h4>Total Masters</h4>
          <span className="module-value">{masters.length}</span>
          <p className="module-sub">Core configuration modules</p>
        </div>

        <div className="module-card highlight">
          <h4>Active Modules</h4>
          <span className="module-value">{masters.length}</span>
          <p className="module-sub">Currently available for configuration</p>
        </div>
      </div>

      {/* Masters Table */}
      <div className="module-section">
        <h3>Master List</h3>
        <div className="table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Master ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {masters.map((m) => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.name}</td>
                  <td>{m.description}</td>
                  <td>
                    <button
                      className="btn-primary"
                      onClick={() => setSelectedMaster(m)}
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Master Details */}
      {selectedMaster && (
        <div className="module-section">
          <h3>{selectedMaster.name}</h3>
          <p>{selectedMaster.description}</p>

          <div className="action-buttons">
            <button
              className="btn-primary"
              onClick={() => handleAction("Add New Entry")}
            >
              Add New
            </button>
            <button
              className="btn-secondary"
              onClick={() => handleAction("Edit Entry")}
            >
              Edit
            </button>
            <button
              className="btn-outline"
              onClick={() => handleAction("Delete Entry")}
            >
              Delete
            </button>
            <button
              className="btn-outline"
              onClick={() => setSelectedMaster(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="module-note">
        ⚠️ Masters control the core system behavior. Changes here affect pricing, commission, penalties,
        and operational zone allocations. Ensure accuracy before saving.
      </div>
    </div>
  );
}
