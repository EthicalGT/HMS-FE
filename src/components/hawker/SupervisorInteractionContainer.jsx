import "../../assets/css/HawkerDashboardContainer.css";

export default function SupervisorInteractionContainer() {
  const supervisor = {
    name: "Rahul Sharma",
    id: "SUP-109",
    zone: "Pune Central Zone",
    contact: "rahul.sharma@hms.com",
  };

  const messages = [
    {
      title: "Price Compliance Reminder",
      message:
        "Ensure all items are sold at SPO approved market prices. Any deviation will be flagged.",
      date: "22 Dec 2025",
    },
    {
      title: "Stock Reporting Update",
      message:
        "Daily stock updates must be completed before 9 PM.",
      date: "20 Dec 2025",
    },
  ];

  const approvals = [
    {
      saleId: "SALE-4421",
      date: "23 Dec 2025",
      status: "Approved",
      remark: "Matched expected value",
    },
    {
      saleId: "SALE-4418",
      date: "22 Dec 2025",
      status: "Rejected",
      remark: "Underpriced sale detected",
    },
  ];

  const penalties = [
    {
      type: "Warning",
      reason: "Late sales update submission",
      date: "21 Dec 2025",
      amount: null,
      status: "Active",
    },
    {
      type: "Penalty",
      reason: "Repeated underpricing",
      date: "18 Dec 2025",
      amount: "₹250",
      status: "Recovered",
    },
  ];

  return (
    <div className="supervisor-container">
      {/* Supervisor Info */}
      <div className="supervisor-card">
        <h2>Assigned Supervisor</h2>
        <div className="supervisor-info">
          <span><b>Name:</b> {supervisor.name}</span>
          <span><b>Supervisor ID:</b> {supervisor.id}</span>
          <span><b>Zone:</b> {supervisor.zone}</span>
          <span><b>Contact:</b> {supervisor.contact}</span>
        </div>
      </div>

      {/* Messages */}
      <div className="supervisor-card">
        <h2>Supervisor Messages</h2>
        {messages.map((msg, index) => (
          <div className="message-box" key={index}>
            <div className="message-header">
              <span className="message-title">{msg.title}</span>
              <span className="message-date">{msg.date}</span>
            </div>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>

      {/* Sales Approval */}
      <div className="supervisor-card">
        <h2>Sales Approval Status</h2>
        <table className="approval-table">
          <thead>
            <tr>
              <th>Sale ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Supervisor Remark</th>
            </tr>
          </thead>
          <tbody>
            {approvals.map((sale, idx) => (
              <tr key={idx}>
                <td>{sale.saleId}</td>
                <td>{sale.date}</td>
                <td>
                  <span className={`approval-status ${sale.status.toLowerCase()}`}>
                    {sale.status}
                  </span>
                </td>
                <td>{sale.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Penalties */}
      <div className="supervisor-card">
        <h2>Penalties & Warnings</h2>
        <table className="penalty-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {penalties.map((p, idx) => (
              <tr key={idx}>
                <td>{p.type}</td>
                <td>{p.reason}</td>
                <td>{p.date}</td>
                <td>{p.amount ?? "-"}</td>
                <td>
                  <span className="penalty-status">
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
