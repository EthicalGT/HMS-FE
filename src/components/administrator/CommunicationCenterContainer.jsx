import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function CommunicationCenterContainer() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messageType, setMessageType] = useState("Broadcast");
  const [messageText, setMessageText] = useState("");

  const messages = [
    { id: 1, type: "Supervisor", content: "Weekly target update for all hawkers.", date: "2025-12-20" },
    { id: 2, type: "Hawker", content: "Inventory allocation for today has been updated.", date: "2025-12-22" },
    { id: 3, type: "Vendor", content: "PO delivery timelines updated.", date: "2025-12-23" },
  ];

  const handleSendMessage = () => {
    if (!messageText) return alert("Message cannot be empty!");
    alert(`Message sent to ${messageType} recipients: "${messageText}"`);
    setMessageText("");
  };

  return (
    <div className="admin-module">

      {/* Header */}
      <div className="module-header">
        <h2>Communication Center</h2>
        <p>
          Broadcast announcements and notifications to supervisors, hawkers, and vendors.
          Ensure all operational stakeholders receive timely updates.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="module-grid">
        <div className="module-card">
          <h4>Total Messages</h4>
          <span className="module-value">{messages.length}</span>
          <p className="module-sub">All messages sent via the platform</p>
        </div>

        <div className="module-card highlight">
          <h4>Pending Broadcasts</h4>
          <span className="module-value">2</span>
          <p className="module-sub">Scheduled messages not yet delivered</p>
        </div>

        <div className="module-card warning">
          <h4>Supervisor Notices</h4>
          <span className="module-value">1</span>
          <p className="module-sub">Unacknowledged notices</p>
        </div>

        <div className="module-card danger">
          <h4>Vendor Notices</h4>
          <span className="module-value">1</span>
          <p className="module-sub">Pending vendor acknowledgements</p>
        </div>
      </div>

      {/* Send New Message */}
      <div className="module-section">
        <h3>Send New Message</h3>
        <div className="form-group">
          <label>Recipient Type:</label>
          <select
            value={messageType}
            onChange={(e) => setMessageType(e.target.value)}
          >
            <option value="Broadcast">Broadcast All</option>
            <option value="Supervisor">Supervisors</option>
            <option value="Hawker">Hawkers</option>
            <option value="Vendor">Vendors</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Type your message here..."
          />
        </div>

        <div className="action-buttons">
          <button className="btn-primary" onClick={handleSendMessage}>
            Send Message
          </button>
          <button className="btn-outline" onClick={() => setMessageText("")}>
            Clear
          </button>
        </div>
      </div>

      {/* Recent Messages Table */}
      <div className="module-section">
        <h3>Recent Messages</h3>
        <div className="table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id}>
                  <td>{msg.type}</td>
                  <td>{msg.content}</td>
                  <td>{msg.date}</td>
                  <td>
                    <button
                      className="btn-outline"
                      onClick={() => setSelectedMessage(msg)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Message Detail */}
      {selectedMessage && (
        <div className="module-section">
          <h3>Message Details</h3>
          <p><b>Type:</b> {selectedMessage.type}</p>
          <p><b>Content:</b> {selectedMessage.content}</p>
          <p><b>Date:</b> {selectedMessage.date}</p>
          <div className="action-buttons">
            <button className="btn-outline" onClick={() => setSelectedMessage(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="module-note">
        ⚠️ Messages sent via this center are logged for audit and compliance.
        Ensure accuracy and proper recipient selection before sending.
      </div>
    </div>
  );
}
