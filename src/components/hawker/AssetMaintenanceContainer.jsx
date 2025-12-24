import { useState } from "react";
import "../../assets/css/HawkerDashboardContainer.css";

export default function AssetMaintenanceContainer() {
  const [selectedAsset, setSelectedAsset] = useState(null);

  const assets = [
    {
      id: "AST-001",
      name: "Push Cart",
      assignedOn: "12 Nov 2025",
      condition: "Good",
    },
    {
      id: "AST-002",
      name: "QR Code Stand",
      assignedOn: "12 Nov 2025",
      condition: "Damaged",
    },
    {
      id: "AST-003",
      name: "Umbrella",
      assignedOn: "18 Nov 2025",
      condition: "Needs Maintenance",
    },
  ];

  return (
    <div className="asset-container">
      {/* Header */}
      <div className="asset-header">
        <div>
          <h2>Asset Assignment & Maintenance</h2>
          <span>Manage and report assigned asset conditions</span>
        </div>
      </div>

      {/* Asset List */}
      <table className="asset-table">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Asset ID</th>
            <th>Assigned On</th>
            <th>Condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.id}</td>
              <td>{asset.assignedOn}</td>
              <td>
                <span
                  className={`asset-status ${asset.condition.replace(" ", "-").toLowerCase()}`}
                >
                  {asset.condition}
                </span>
              </td>
              <td>
                <button
                  className="asset-action-btn"
                  onClick={() => setSelectedAsset(asset)}
                >
                  Report Issue
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Maintenance Request */}
      {selectedAsset && (
        <div className="maintenance-box">
          <h3>Report Issue – {selectedAsset.name}</h3>

          <div className="maintenance-form">
            <textarea placeholder="Describe the issue or damage in detail..."></textarea>

            <div className="maintenance-actions">
              <button
                className="asset-btn-outline"
                onClick={() => setSelectedAsset(null)}
              >
                Cancel
              </button>
              <button className="asset-btn-primary">
                Submit Maintenance Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
