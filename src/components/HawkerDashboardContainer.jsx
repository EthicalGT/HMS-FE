import { useState, useEffect } from "react";
import "../assets/css/DashboardContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { getHawkerDetails } from "../api/hawker_details";
import ProfileKYCContainer from "./hawker/ProfileKYCContainer";
import AssignedInventoryContainer from "./hawker/AssignedInventoryContainer";
import SalesUpdateContainer from "./hawker/SalesUpdateContainer";
import WalletSettlementContainer from "./hawker/WalletSettlementContainer";
import InventoryRequestContainer from "./hawker/InventoryRequestContainer";
import AssetMaintenanceContainer from "./hawker/AssetMaintenanceContainer";
import SupervisorInteractionContainer from "./hawker/SupervisorInteractionContainer";
import NotificationsContainer from "./hawker/NotificationsContainer";
import SettingsSecurityContainer from "./hawker/SettingsSecurityContainer";

export default function HawkerDashboardContainer() {
  const [open, setOpen] = useState(false);
  const [user, setUsername] = useState("Ganesh Telore");
  const [activeView, setActiveView] = useState("dashboard");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getHawkerDetails();
      if (res.status === "success") {
        setUsername(res.data.full_name);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="logo">HMS</div>
        <nav className="nav">
          <span
            onClick={() => setActiveView("dashboard")}
            className={activeView === "dashboard" ? "active" : ""}
          >
            Dashboard
          </span>

          <span
            onClick={() => setActiveView("profile")}
            className={activeView === "profile" ? "active" : ""}
          >
            My Profile & KYC
          </span>

          <span
            onClick={() => setActiveView("inventory")}
            className={activeView === "inventory" ? "active" : ""}
          >
            Assigned Inventory
          </span>

          <span
            onClick={() => setActiveView("sales")}
            className={activeView === "sales" ? "active" : ""}
          >
            Sales Update
          </span>

          <span
            onClick={() => setActiveView("wallet")}
            className={activeView === "wallet" ? "active" : ""}
          >
            Wallet & Settlement
          </span>

          <span
            onClick={() => setActiveView("request")}
            className={activeView === "request" ? "active" : ""}
          >
            Inventory Request
          </span>

          <span
            onClick={() => setActiveView("assets")}
            className={activeView === "assets" ? "active" : ""}
          >
            Assets Management
          </span>

          <span
            onClick={() => setActiveView("messages")}
            className={activeView === "messages" ? "active" : ""}
          >
            Supervisor Messages
          </span>

          <span
            onClick={() => setActiveView("notifications")}
            className={activeView === "notifications" ? "active" : ""}
          >
            Notifications
          </span>

          <span
            onClick={() => setActiveView("settings")}
            className={activeView === "settings" ? "active" : ""}
          >
            Settings
          </span>
        </nav>

        <div className="logout">
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout
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
          {activeView === "dashboard" && (
            <div className="content">
              <div className="welcome">
                <div className="welcome-content">
                  <h2>Welcome back, {user}! 👋</h2>
                  <p>
                    Here’s a quick overview of your sales activity for today.
                  </p>
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
          )}
          {activeView === "profile" && <ProfileKYCContainer user={user} />}

          {activeView === "inventory" && <AssignedInventoryContainer />}

          {activeView === "sales" && (
            <SalesUpdateContainer />
          )}

          {activeView === "wallet" && (
            <WalletSettlementContainer />
          )}

          {activeView === "request" && (
            <InventoryRequestContainer />
          )}

          {activeView === "assets" && (
            <AssetMaintenanceContainer />
          )}

          {activeView === "messages" && (
            <SupervisorInteractionContainer />
          )}

          {activeView === "notifications" && (
            <NotificationsContainer />
          )}

          {activeView === "settings" && (
            <SettingsSecurityContainer />
          )}
        </div>
      </div>
    </div>
  );
}
