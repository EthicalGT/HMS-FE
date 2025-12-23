import "../../assets/css/HawkerDashboardContainer.css";

export default function NotificationsContainer() {
  const notifications = [
    {
      id: 1,
      type: "inventory",
      title: "Inventory Assigned",
      message: "New stock has been assigned to you by SPO.",
      time: "23 Dec 2025 • 10:15 AM",
      read: false,
    },
    {
      id: 2,
      type: "sales-warning",
      title: "Sales Mismatch Detected",
      message:
        "Your reported sales value is lower than the expected market value. Supervisor review required.",
      time: "23 Dec 2025 • 08:40 AM",
      read: false,
    },
    {
      id: 3,
      type: "settlement",
      title: "Settlement Reminder",
      message: "₹2,847 is pending for settlement to SPO.",
      time: "22 Dec 2025 • 06:00 PM",
      read: true,
    },
    {
      id: 4,
      type: "supervisor",
      title: "Supervisor Notice",
      message:
        "Ensure daily sales are updated before 9 PM without delay.",
      time: "22 Dec 2025 • 04:20 PM",
      read: true,
    },
    {
      id: 5,
      type: "kyc",
      title: "KYC Pending",
      message:
        "Your KYC verification is incomplete. Please submit required documents.",
      time: "21 Dec 2025 • 11:10 AM",
      read: false,
    },
  ];

  return (
    <div className="notification-container">
      {/* Header */}
      <div className="notification-header">
        <h2>Notifications & Alerts</h2>
        <span>System-generated compliance updates</span>
      </div>

      {/* Notification List */}
      <div className="notification-list">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`notification-card ${n.read ? "read" : "unread"}`}
          >
            <div className="notification-left">
              <span className={`notification-icon ${n.type}`}>
                ●
              </span>
            </div>

            <div className="notification-body">
              <div className="notification-title">
                {n.title}
              </div>
              <p className="notification-message">
                {n.message}
              </p>
              <span className="notification-time">
                {n.time}
              </span>
            </div>

            {!n.read && <span className="notification-dot"></span>}
          </div>
        ))}
      </div>
    </div>
  );
}
