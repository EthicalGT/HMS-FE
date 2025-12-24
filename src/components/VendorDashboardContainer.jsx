import { useState, useEffect } from "react";
import "../assets/css/VendorDashboardContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CompanyProfileContainer from "./vendor/CompanyProfileContainer";
import ProductCatalogContainer from "./vendor/ProductCatalogContainer";
import PurchaseOrdersContainer from "./vendor/PurchaseOrderContainer";
import SupplyDeliveryContainer from "./vendor/SupplyDeliveryContainer";
import InventorySummaryContainer from "./vendor/InventorySummaryContainer";
import PaymentInvoicesContainer from "./vendor/PaymentInvoicesContainer";





import {
  faBell,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function VendorDashboardContainer() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("ABC Traders");
  const [activeView, setActiveView] = useState("dashboard");

  useEffect(() => {
    // Later you can load vendor details here
  }, []);

  return (
    <div className="app">
      {/* ================= SIDEBAR ================= */}
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
            Company Profile
          </span>

          <span
            onClick={() => setActiveView("products")}
            className={activeView === "products" ? "active" : ""}
          >
            Product Catalog
          </span>


          <span
            onClick={() => setActiveView("orders")}

            className={activeView === "orders" ? "active" : ""}
          >
            Purchase Orders
          </span>


          <span
            onClick={() => setActiveView("supply")}
            className={activeView === "supply" ? "active" : ""}
          >
            Supply & Delivery
          </span>

          <span
            onClick={() => setActiveView("inventory")}
            className={activeView === "inventory" ? "active" : ""}
          >
            Inventory Summary
          </span>

          <span
            onClick={() => setActiveView("payments")}
            className={activeView === "payments" ? "active" : ""}
          >
            Payments & Invoices
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

      {/* ================= MAIN ================= */}
      <div className="main">
        {/* ---------- TOP BAR ---------- */}
        <div className="topbar">
          <button className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </button>

          <h1>Vendor Dashboard</h1>

          <div className="user">
            <FontAwesomeIcon icon={faBell} className="alert" />
            <FontAwesomeIcon icon={faUser} className="profile" />
            <div className="username">{user}</div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="content">
          {/* ========= DASHBOARD HOME ========= */}
          {activeView === "dashboard" && (
            <>
              <div className="welcome">
                <h2>Welcome back, {user}! 👋</h2>
                <p>Here’s a quick overview of your business performance.</p>
              </div>

              <div className="grid">
                <div className="card kpi">
                  <div className="card-container">
                    <div className="icon">📦</div>
                    <span>Total Products Listed</span>
                  </div>
                  <h3>126</h3>
                  <p className="sub">Active products</p>
                </div>

                <div className="card kpi">
                  <div className="card-container">
                    <div className="icon">📝</div>
                    <span>Active Purchase Orders</span>
                    <span className="badge active-badge">Active</span>
                  </div>
                  <h3>9</h3>
                  <p className="sub">Orders in progress</p>
                </div>

                <div className="card kpi">
                  <div className="card-container">
                    <div className="icon">🚚</div>
                    <span>Items Supplied (This Month)</span>
                  </div>
                  <h3>1,248</h3>
                  <p className="sub up">↑ 14% from last month</p>
                </div>

                <div className="card kpi">
                  <div className="card-container">
                    <div className="icon">⏳</div>
                    <span>Pending Deliveries</span>
                    <span className="badge pending-badge">Pending</span>
                  </div>
                  <h3>4</h3>
                  <p className="sub">Awaiting completion</p>
                </div>

                <div className="card kpi">
                  <div className="card-container">
                    <div className="icon">💰</div>
                    <span>Total Revenue</span>
                  </div>
                  <h3>₹4,85,000</h3>
                  <p className="sub up">↑ 9% this month</p>
                </div>

                <div className="card kpi">
                  <div className="card-container">
                    <div className="icon">💳</div>
                    <span>Payment Status</span>
                  </div>

                  <div className="paybox paid">
                    <span>Paid</span>
                    <strong>₹3,90,000</strong>
                  </div>

                  <div className="paybox pending">
                    <span>Pending</span>
                    <strong>₹95,000</strong>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ========= PLACEHOLDER VIEWS ========= */}
          {activeView === "profile" && <CompanyProfileContainer />}

          {activeView === "products" && <ProductCatalogContainer />}
          {activeView === "orders" && <PurchaseOrdersContainer />}
          {activeView === "supply" && <SupplyDeliveryContainer />}
          {activeView === "inventory" && <InventorySummaryContainer />}
          {activeView === "payments" && <PaymentInvoicesContainer />}





          {activeView !== "dashboard" &&
            activeView !== "profile" &&
            activeView !== "products" && (
              <div className="welcome">
                <h2>{activeView.replace("_", " ").toUpperCase()}</h2>
                <p>This section will be implemented next.</p>
              </div>
            )}

        </div>
      </div>
    </div>
  );
}
