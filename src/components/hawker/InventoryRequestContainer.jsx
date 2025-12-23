import "../../assets/css/HawkerDashboardContainer.css";

export default function InventoryRequestContainer() {
  const request = {
    requestId: "REQ-INV-1023",
    requestedAt: "23 Dec 2025 • 11:05 AM",
    status: "Approved", // Sent | Approved | Delivered
    location: "Market Yard, Pune (captured)",
    items: [
      {
        name: "Fresh Apples",
        category: "Fruits",
        requestedQty: 40,
        approvedQty: 35,
        deliveryStatus: "Pending",
      },
      {
        name: "Tomatoes",
        category: "Vegetables",
        requestedQty: 30,
        approvedQty: 30,
        deliveryStatus: "Scheduled",
      },
    ],
  };

  return (
    <div className="inventory-insights">
      {/* Header */}
      <div className="inventory-header">
        <div>
          <h2>Inventory Request</h2>
          <span>Replenishment request details</span>
        </div>

        <span className={`request-status ${request.status.toLowerCase()}`}>
          {request.status}
        </span>
      </div>

      {/* Request Meta */}
      <div className="inventory-meta">
        <span><b>Request ID:</b> {request.requestId}</span>
        <span><b>Requested At:</b> {request.requestedAt}</span>
      </div>

      {/* Items Table */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Requested Qty</th>
            <th>Approved Qty</th>
            <th>Delivery Status</th>
          </tr>
        </thead>
        <tbody>
          {request.items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.requestedQty}</td>
              <td>{item.approvedQty ?? "-"}</td>
              <td>
                <span className="delivery-status">
                  {item.deliveryStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Location */}
      <div className="inventory-location">
        <b>Captured Location</b>
        <p>{request.location}</p>
        <div className="map-placeholder">
          📍 Map preview will be available here
        </div>
      </div>

      {/* Actions */}
      <div className="inventory-actions">
        <button className="inventory-btn-outline">
          View Request Timeline
        </button>
        <button className="inventory-btn-primary">
          View Request History
        </button>
      </div>
    </div>
  );
}
