import { useState, useEffect } from "react";
import "../assets/css/AdminPanelContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { getHawkerDetails } from "../api/hawker_details";
import UserManagementContainer from "./administrator/UserManagementContainer";
import VendorManagementContainer from "./administrator/VendorManagementContainer";
import SupervisorManagementContainer from "./administrator/SupervisorManagementContainer";
import HawkerManagementContainer from "./administrator/HawkerManagementContainer";
import InventoryAssetsManagmentContainer from "./administrator/InventoryAssetsManagmentContainer";
import PurchaseOrdersVendorContainer from "./administrator/PurchaseOrderVendorContainer";
import AllocationEngineContainer from "./administrator/AllocateEngineContainer";
import SalesSettlementContainer from "./administrator/SalesSettlementContainer";
import AccountingWalletManagementContainer from "./administrator/AccountingWalletManagementContainer";
import ReportsAnalyticsContainer from "./administrator/ReportsAnalyticsContainer";
import ComplianceAlertsContainer from "./administrator/ComplianceAlertsContainer";
import MastersConfigurationContainer from "./administrator/MastersConfigurationContainer";
import CommunicationCenterContainer from "./administrator/CommunicationCenterContainer";
import SystemSettingsContainer from "./administrator/SystemSettingsContainer";

export default function AdminPanelContainer() {
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
        <div className="logo">HMS Admin</div>
        <nav className="nav">
          <span
            onClick={() => setActiveView("dashboard")}
            className={activeView === "dashboard" ? "active" : ""}
          >
            Dashboard
          </span>

          <span
            onClick={() => setActiveView("users")}
            className={activeView === "users" ? "active" : ""}
          >
            User Management
          </span>

          <span
            onClick={() => setActiveView("vendors")}
            className={activeView === "vendors" ? "active" : ""}
          >
            Vendor Management
          </span>

          <span
            onClick={() => setActiveView("supervisors")}
            className={activeView === "supervisors" ? "active" : ""}
          >
            Supervisor Management
          </span>

          <span
            onClick={() => setActiveView("hawkers")}
            className={activeView === "hawkers" ? "active" : ""}
          >
            Hawker Management
          </span>

          <span
            onClick={() => setActiveView("inventory")}
            className={activeView === "inventory" ? "active" : ""}
          >
            Inventory & Assets
          </span>

          <span
            onClick={() => setActiveView("po")}
            className={activeView === "po" ? "active" : ""}
          >
            Purchase Orders (PO)
          </span>

          <span
            onClick={() => setActiveView("allocation")}
            className={activeView === "allocation" ? "active" : ""}
          >
            Allocation Engine
          </span>

          <span
            onClick={() => setActiveView("sales")}
            className={activeView === "sales" ? "active" : ""}
          >
            Sales & Settlement
          </span>

          <span
            onClick={() => setActiveView("accounting")}
            className={activeView === "accounting" ? "active" : ""}
          >
            Accounting & Wallets
          </span>

          <span
            onClick={() => setActiveView("reports")}
            className={activeView === "reports" ? "active" : ""}
          >
            Reports & Analytics
          </span>

          <span
            onClick={() => setActiveView("compliance")}
            className={activeView === "compliance" ? "active" : ""}
          >
            Compliance & Alerts
          </span>

          <span
            onClick={() => setActiveView("masters")}
            className={activeView === "masters" ? "active" : ""}
          >
            Masters & Configuration
          </span>

          <span
            onClick={() => setActiveView("communication")}
            className={activeView === "communication" ? "active" : ""}
          >
            Communication Center
          </span>

          <span
            onClick={() => setActiveView("settings")}
            className={activeView === "settings" ? "active" : ""}
          >
            System Settings
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
          <h1>Admin Panel</h1>
        </div>
        <div className="content">
          {activeView === "dashboard" && (
            <div className="admin-dashboard">
              {/* Header */}
              <div className="dashboard-header">
                <h2>Executive Overview</h2>
                <p>One-screen system health and operational summary</p>
              </div>

              {/* KPI Grid */}
              <div className="kpi-grid">
                <div className="kpi-card">
                  <h4>Total Hawkers</h4>
                  <span className="kpi-value">1,248</span>
                  <p className="kpi-sub">
                    Active Today: <strong>842</strong>
                  </p>
                </div>

                <div className="kpi-card">
                  <h4>Total Vendors</h4>
                  <span className="kpi-value">96</span>
                  <p className="kpi-sub">Approved & Active</p>
                </div>

                <div className="kpi-card highlight">
                  <h4>Today’s Total Sales</h4>
                  <span className="kpi-value">₹3,42,580</span>
                  <p className="kpi-sub">Across all hawkers</p>
                </div>

                <div className="kpi-card">
                  <h4>Inventory in Circulation</h4>
                  <span className="kpi-value">₹12,80,000</span>
                  <p className="kpi-sub">Assigned to hawkers</p>
                </div>

                <div className="kpi-card warning">
                  <h4>Pending Settlements</h4>
                  <span className="kpi-value">₹1,95,300</span>
                  <p className="kpi-sub">Requires reconciliation</p>
                </div>

                <div className="kpi-card danger">
                  <h4>Active Violations</h4>
                  <span className="kpi-value">14</span>
                  <p className="kpi-sub">Pricing / settlement issues</p>
                </div>
              </div>

              {/* System Alerts */}
              <div className="system-alerts">
                <h3>System Alerts</h3>
                <ul>
                  <li>⚠️ 3 hawkers exceeded price deviation limits</li>
                  <li>⚠️ Inventory mismatch reported in Zone B</li>
                  <li>ℹ️ Vendor PO #PO-234 pending approval</li>
                </ul>
              </div>
            </div>
          )}

          {activeView === "users" && (
            <UserManagementContainer />
          )}

          {activeView === "vendors" && (
            <VendorManagementContainer />
          )}

          {activeView === "supervisors" && (
            <SupervisorManagementContainer />
          )}

          {activeView === "hawkers" && (
            <HawkerManagementContainer />
          )}

          {activeView === "inventory" && (
            <InventoryAssetsManagmentContainer />
          )}

          {activeView === "po" && (
            <PurchaseOrdersVendorContainer />
          )}

          {activeView === "allocation" && (
            <AllocationEngineContainer />
          )}

          {activeView === "sales" && (
            <SalesSettlementContainer />
          )}

          {activeView === "accounting" && (
            <AccountingWalletManagementContainer />
          )}

          {activeView === "reports" && (
            <ReportsAnalyticsContainer />
          )}

          {activeView === "compliance" && (
            <ComplianceAlertsContainer />
          )}

          {activeView === "masters" && (
            <MastersConfigurationContainer />
          )}

          {activeView === "communication" && (
            <CommunicationCenterContainer />
          )}

          {activeView === "settings" && (
            <SystemSettingsContainer />
          )}
        </div>
      </div>
    </div>
  );
}
