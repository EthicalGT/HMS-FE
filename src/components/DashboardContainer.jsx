import { useState } from "react";
import "../assets/css/DashboardContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

export default function DashboardContainer() {
    const [open, setOpen] = useState(false);
    const [user, setUsername] = useState('GT');

    return (
        <div className="app">
            <aside className={`sidebar ${open ? "open" : ""}`}>
                <div className="logo">HMS</div>

                <nav className="nav">
                    <a className="active">Dashboard</a>
                    <a>Company Profile</a>
                    <a>Product Catalog</a>
                    <a>Purchase Orders</a>
                    <a>Supply & Delivery</a>
                    <a>Inventory Summary</a>
                    <a>Payments & Invoices</a>
                    <a>Notifications</a>
                    <a>Support / Messages</a>
                    <a>Settings</a>
                </nav>

                <div className="logout">Logout</div>
            </aside>

            {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

            <div className="main">
                <div className="topbar">
                    <button className="hamburger" onClick={() => setOpen(!open)}>
                        ☰
                    </button>

                    <h1>Dashboard</h1>

                    <div className="user">
                        <FontAwesomeIcon icon={faBell} className="alert" />
                        <FontAwesomeIcon icon={faUser} className="profile" />
                        <div className="username">Fresh Farms</div>

                    </div>
                </div>

                <div className="content">
                    <div className="welcome">
                        <h2>Welcome back, {user}! 👋</h2>
                        <p>Here's an overview of your business performance today.</p>
                    </div>

                    <div className="grid">
                        <div className="card">
                            <div className="card-container">
                                <div className="icon">📦</div>
                                <span>Total Products Listed</span>
                            </div>
                            <h3>124</h3>
                            <div className="sub up">↗ 12% vs last month</div>
                        </div>

                        <div className="card">
                            <div className="card-container">
                                <div className="icon">📋</div>
                                <span>Active Purchase Orders</span>
                                <span className="badge active-badge">Active</span>
                            </div>
                            <h3>18</h3>
                        </div>

                        <div className="card">
                            <div className="card-container">
                                <div className="icon">🚚</div>
                                <span>Items Supplied (This Month)</span>
                            </div>
                            <h3>2,847</h3>
                            <div className="sub up">↗ 8% Monthly</div>
                        </div>

                        <div className="card">
                            <div className="card-container">
                                <div className="icon">⏳</div>
                                <span>Pending Deliveries</span>
                                <span className="badge pending-badge">Pending</span>
                            </div>
                            <h3>7</h3>
                        </div>

                        <div className="card">
                            <div className="card-container">
                                <div className="icon">₹</div>
                                <span>Total Revenue</span>
                            </div>
                            <h3>₹4,85,200</h3>
                            <div className="sub up">↗ 15% This month</div>
                        </div>

                        <div className="card">
                            <div className="card-container">
                                <div className="icon">💳</div>
                                <span>Payment Status</span>
                            </div>
                            <div className="paybox paid">
                                <span>Paid</span>
                                <span>₹3,85,200</span>
                            </div>
                            <div className="paybox pending">
                                <span>Pending</span>
                                <span>₹1,00,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
