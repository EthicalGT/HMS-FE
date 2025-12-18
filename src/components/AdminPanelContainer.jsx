import React from "react";
import "../assets/css/AdminPanelContainer.css";
import {
  Bell,
  Package,
  Activity,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";

export default function AdminPanelContainer() {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {/* Inventory Status */}
        <Card title="Inventory Status" icon={<Package size={18} />} link="View All">
          <InventoryItem name="Ice Cream - Vanilla" status="In Stock" value="85 units" level={80} type="ok" />
          <InventoryItem name="Ice Cream - Chocolate" status="In Stock" value="45 units" level={60} type="ok" />
          <InventoryItem name="Ice Cream - Strawberry" status="Low Stock" value="15 units" level={25} type="low" />
          <InventoryItem name="Cones - Regular" status="In Stock" value="120 units" level={90} type="ok" />
          <InventoryItem name="Cups - Medium" status="Critical" value="8 units" level={10} type="critical" />
        </Card>

        {/* Notifications */}
        <Card title="Recent Notifications" icon={<Bell size={18} />} link="Mark all read">
          <Notification title="New hawker registered" desc="Amit Singh joined Zone B" time="5 min ago" />
          <Notification title="Low stock alert" desc="Cups - Medium running low" time="15 min ago" />
          <Notification title="Sales milestone reached" desc="Zone A crossed ₹50,000" time="1 hour ago" />
          <Notification title="Stock replenished" desc="Vanilla restocked" time="2 hours ago" />
        </Card>

        {/* Activity Log */}
        <Card title="Activity Log" icon={<Activity size={18} />} link="View All">
          <ActivityItem title="Stock assigned" meta="50 units to Rahul Kumar" time="2 min ago" />
          <ActivityItem title="Vendor payment" meta="₹15,000 to Ice Cream Co." time="15 min ago" />
          <ActivityItem title="Route updated" meta="Zone B expanded" time="1 hour ago" />
          <ActivityItem title="PO created" meta="Order #1234 submitted" time="2 hours ago" />
          <ActivityItem title="Hawker check-in" meta="Priya M. started shift" time="3 hours ago" />
        </Card>
      </div>
    </div>
  );
}

function Card({ title, icon, link, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <span className="card-icon">{icon}</span>
          {title}
        </div>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
}

function InventoryItem({ name, status, value, level, type }) {
  const Icon = type === "ok" ? CheckCircle : type === "low" ? AlertTriangle : AlertCircle;

  return (
    <div className="inventory-item">
      <div className="inventory-top">
        <span>{name}</span>
        <span className="inventory-status">
          <Icon size={14} /> {status}
        </span>
      </div>
      <div className="progress">
        <div className={`progress-bar progress-${type}`} style={{ width: `${level}%` }} />
      </div>
      <div className="inventory-value">{value}</div>
    </div>
  );
}

function Notification({ title, desc, time }) {
  return (
    <div className="notification">
      <div className="notification-title">{title}</div>
      <div className="notification-desc">{desc}</div>
      <div className="notification-time">{time}</div>
    </div>
  );
}

function ActivityItem({ title, meta, time }) {
  return (
    <div className="activity-item">
      <span className="activity-dot" />
      <div>
        <div className="activity-title">{title}</div>
        <div className="activity-meta">{meta}</div>
        <div className="activity-time">{time}</div>
      </div>
    </div>
  );
}
