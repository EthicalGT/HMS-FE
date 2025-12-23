import { useState, useEffect } from "react";
import "../assets/css/DashboardContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getHawkerDetails } from "../api/hawker_details";

export default function HawkerDashboardContainer() {
  const [open, setOpen] = useState(false);
  const [user, setUsername] = useState("Ganesh Telore");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getHawkerDetails();

      if (res.status === "success") {
        setUsername(res.data.full_name);
      } else {
        showError(res.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="logo">HMS</div>

        <nav className="nav">
          <Link to="/hawker/dashboard" className="active">
            Dashboard
          </Link>
          <Link to="/hawker/profile">My Profile & KYC</Link>
          <Link to="/hawker/inventory">Assigned Inventory</Link>
          <Link to="/hawker/sales">Sales Update</Link>
          <Link to="/hawker/wallet">Wallet & Settlement</Link>
          <Link to="/hawker/inventory-request">Inventory Request</Link>
          <Link to="/hawker/assets">Assets Management</Link>
          <Link to="/hawker/messages">Supervisor Messages</Link>
          <Link to="/hawker/notifications">Notifications</Link>
          <Link to="/hawker/settings">Settings</Link>
        </nav>

        <div className="logout">
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </div>
      </aside>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <div className="main">
        <div className="topbar">
          <button className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </button>

          <h1>Hawker Dashboard</h1>

          <div className="user">
            <FontAwesomeIcon icon={faBell} className="alert" />
            <FontAwesomeIcon icon={faUser} className="profile" />
            <div className="username">{user}</div>
          </div>
        </div>

        <div className="content">
          <div className="welcome">
            <div className="welcome-content">
              <h2>Welcome back, {user}! 👋</h2>
              <p>Here’s a quick overview of your sales activity for today.</p>
            </div>
            <div className="welcome-supervisor-info"></div>
          </div>

          <div className="grid">
            {/* Assigned Inventory */}
            <div className="card">
              <div className="card-container">
                <div className="icon">📦</div>
                <span>Today’s Assigned Inventory Value</span>
              </div>
              <h3>₹12,400</h3>
              <div className="sub up">↗ 12% compared to yesterday</div>
            </div>

            {/* Sales Count */}
            <div className="card">
              <div className="card-container">
                <div className="icon">📋</div>
                <span>Today’s Total Sales</span>
                <span className="badge active-badge">Active</span>
              </div>
              <h3>18 Orders</h3>
              <div className="sub">Sales completed today</div>
            </div>

            {/* Pending Settlement */}
            <div className="card">
              <div className="card-container">
                <div className="icon">🚚</div>
                <span>Pending Amount to Settle</span>
              </div>
              <h3>₹2,847</h3>
              <div className="sub up">↗ 8% increase this month</div>
            </div>

            {/* Wallet Balance */}
            <div className="card">
              <div className="card-container">
                <div className="icon">⏳</div>
                <span>Wallet Balance</span>
                <span className="badge pending-badge">Pending</span>
              </div>
              <h3>₹7,000</h3>
              <div className="sub">Available for settlement</div>
            </div>

            {/* KYC Status */}
            <div className="card">
              <div className="card-container">
                <div className="icon">🪪</div>
                <span>KYC Status</span>
              </div>
              <h3>Verified</h3>
              <div className="sub up">All documents approved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
