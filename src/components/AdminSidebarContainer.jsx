import React from "react";
import "../App.css";
import WeeklyReport from "../components/WeeklyReport.jsx";
import AdminPanelContainer from "../components/AdminPanelContainer.jsx";

import {
  Home,
  Users,
  Store,
  UserCog,
  Bell,
  BarChart3,
  MapPin,
  Boxes,
  Settings,
  Search,
  IndianRupee,
  PackageCheck,
  UserPlus,
  FilePlus2,
  BarChart
} from "lucide-react";

export default function AdminSidebarContainer() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <Boxes size={20} /> HawkFlow
        </div>

        <ul>
          <li className="active">
            <Home size={18} /> Home
          </li>
          <li>
            <Users size={18} /> Hawker Management
          </li>
          <li>
            <Store size={18} /> Vendor Management
          </li>
          <li>
            <UserCog size={18} /> Supervisor
          </li>
          <li>
            <Bell size={18} /> Notifications <span className="badge">5</span>
          </li>
          <li>
            <BarChart3 size={18} /> Reports & Analytics
          </li>
          <li>
            <MapPin size={18} /> Location Tracking
          </li>
          <li>
            <Boxes size={18} /> Inventory Management
          </li>
          <li>
            <Settings size={18} /> Admin Settings
          </li>
        </ul>
      </aside>

      {/* Main */}
      <main className="main">
        {/* Top Bar */}
        <div className="topbar">
          <div className="search-box">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search hawkers, vendors, orders..."
            />
          </div>

          <div className="top-right">
            <Bell size={18} />
            <div className="user">
              <span className="avatar">HMS</span>
              <span>HMS</span>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="dashboard-content">
          <h2>Dashboard</h2>
          <p className="sub">Welcome back! Here's your daily overview.</p>

          {/* Stats */}
          <div className="cards">
            <div className="card">
              <Users size={22} className="card-icon blue" />
              <span>Total Hawkers</span>
              <h3>1</h3>
              <small className="green">+02% vs last month</small>
            </div>

            <div className="card">
              <Store size={22} className="card-icon green" />
              <span>Total Vendors</span>
              <h3>2</h3>
              <small className="green">+08% vs last month</small>
            </div>

            <div className="card">
              <IndianRupee size={22} className="card-icon yellow" />
              <span>Daily Sales</span>
              <h3>₹600</h3>
              <small className="green">+10% vs yesterday</small>
            </div>

            <div className="card">
              <PackageCheck size={22} className="card-icon red" />
              <span>Inventory Status</span>
              <h3>2%</h3>
              <small className="red">-99% stock level</small>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick">
            <h3>Quick Actions</h3>
            <p>Common tasks at your fingertips</p>

            <div className="actions">
              <div className="action primary">
                <Boxes size={20} />
                
                Assign Stock
                <small>Allocate inventory</small>
              </div>

              <div className="action">
                <Store size={20} />
                Add Vendor
                <small>Register new vendor</small>
              </div>

              <div className="action">
                <UserPlus size={20} />
                Add Hawker
                <small>Onboard new hawker</small>
              </div>

              <div className="action">
                <FilePlus2 size={20} />
                Create PO
                <small>New purchase order</small>
              </div>

              <div className="action">
                <BarChart size={20} />
                View Reports
                <small>Analytics dashboard</small>
              </div>
            </div>
          </div>

          {/* Weekly Sale */}
          {/* <WeekliSale dark={true}  /> */}
           <WeeklyReport/> 

          {/* Inventory / Notifications / Activity */}
          { /* <AdminPanelContainer/> */ }
        </div>
      </main>
    </div>
  );
}
