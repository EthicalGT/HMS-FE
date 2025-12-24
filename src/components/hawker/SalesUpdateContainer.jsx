import "../../assets/css/HawkerDashboardContainer.css";

export default function SalesUpdateContainer() {
  const data = {
    date: "23 Dec 2025",
    submittedAt: "10:42 AM",
    status: "Flagged",
    hawker: "Ganesh Telore",
    supervisorRemark: "Shortfall observed in Tomatoes",
    items: [
      {
        name: "Apples",
        category: "Fruits",
        assignedQty: 50,
        soldQty: 45,
        price: 40,
      },
      {
        name: "Tomatoes",
        category: "Vegetables",
        assignedQty: 30,
        soldQty: 22,
        price: 20,
      },
    ],
  };

  const totalSold = data.items.reduce((s, i) => s + i.soldQty * i.price, 0);
  const expected = data.items.reduce((s, i) => s + i.assignedQty * i.price, 0);
  const diff = totalSold - expected;

  return (
    <div className="sales-insights">
      <div className="sales-header">
        <div>
          <h2>Sales Update</h2>
          <span>{data.date}</span>
        </div>
        <span className={`status ${data.status.toLowerCase()}`}>
          {data.status}
        </span>
      </div>

      <div className="sales-meta">
        <span>
          <b>Submitted:</b> {data.submittedAt}
        </span>
        <span>
          <b>Hawker:</b> {data.hawker}
        </span>
      </div>

      <table className="sales-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Assigned</th>
            <th>Sold</th>
            <th>Price (₹)</th>
            <th>Value (₹)</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((i, idx) => (
            <tr key={idx}>
              <td>{i.name}</td>
              <td>{i.category}</td>
              <td>{i.assignedQty}</td>
              <td className={i.soldQty < i.assignedQty ? "loss" : ""}>
                {i.soldQty}
              </td>
              <td>{i.price}</td>
              <td>₹{i.soldQty * i.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="sales-summary">
        <div className="summary-card">
          <span>Total Sold</span>
          <h3>₹{totalSold}</h3>
        </div>
        <div className="summary-card">
          <span>Expected</span>
          <h3>₹{expected}</h3>
        </div>
        <div className={`summary-card ${diff < 0 ? "danger" : "success"}`}>
          <span>Difference</span>
          <h3>{diff < 0 ? `-₹${Math.abs(diff)}` : `+₹${diff}`}</h3>
        </div>
        <div className="summary-card">
          <span>Payable</span>
          <h3>₹{totalSold}</h3>
        </div>
      </div>

      {data.supervisorRemark && (
        <div className="remark">
          <b>Supervisor Remark</b>
          <p>{data.supervisorRemark}</p>
        </div>
      )}

      {diff < 0 && (
        <div className="alert">
          ⚠️ Actual sales are lower than expected market value.
        </div>
      )}
    </div>
  );
}
