import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { day: "Mon", sales: 8200 },
  { day: "Tue", sales: 9400 },
  { day: "Wed", sales: 7600 },
  { day: "Thu", sales: 11000 },
  { day: "Fri", sales: 9800 },
];

const hawkerPerformance = [
  { name: "Ganesh", value: 42000 },
  { name: "Ramesh", value: 28000 },
  { name: "Suresh", value: 36000 },
];

const inventoryTurnover = [
  { item: "Fruits", turnover: 3.8 },
  { item: "Vegetables", turnover: 4.6 },
  { item: "Dairy", turnover: 2.9 },
];

export default function ReportsAnalyticsContainer() {
  const [activeReport, setActiveReport] = useState(null);

  return (
    <div className="admin-module">
      {/* Header */}
      <div className="module-header">
        <h2>Reports & Analytics</h2>
        <p>
          Visualize operational performance across sales, hawkers, supervisors,
          inventory, and vendors using data-driven reports with export support.
        </p>
      </div>

      {/* Overview */}
      <div className="module-grid">
        <div className="module-card">
          <h4>Monthly Sales</h4>
          <span className="module-value">₹38.4L</span>
          <p className="module-sub">Aggregated platform sales</p>
        </div>

        <div className="module-card highlight">
          <h4>Top Hawker</h4>
          <span className="module-value">Ganesh T.</span>
          <p className="module-sub">Highest revenue contribution</p>
        </div>

        <div className="module-card warning">
          <h4>Slow Moving Stock</h4>
          <span className="module-value">6 Items</span>
          <p className="module-sub">Low inventory turnover</p>
        </div>

        <div className="module-card danger">
          <h4>Vendor Delays</h4>
          <span className="module-value">3 Vendors</span>
          <p className="module-sub">Supply delays detected</p>
        </div>
      </div>

      {/* Report Selectors */}
      <div className="module-section">
        <h3>Available Reports</h3>
        <div className="action-buttons">
          <button className="btn-primary" onClick={() => setActiveReport("sales")}>
            Sales Report
          </button>
          <button className="btn-secondary" onClick={() => setActiveReport("hawkers")}>
            Hawker Performance
          </button>
          <button className="btn-outline" onClick={() => setActiveReport("inventory")}>
            Inventory Turnover
          </button>
          <button className="btn-outline" onClick={() => setActiveReport("vendors")}>
            Vendor Supply
          </button>
        </div>
      </div>

      {/* Sales Report */}
      {activeReport === "sales" && (
        <div className="module-section">
          <h3>Daily Sales Trend</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>

          <div className="action-buttons">
            <button className="btn-outline">Export PDF</button>
            <button className="btn-outline">Export Excel</button>
          </div>
        </div>
      )}

      {/* Hawker Performance */}
      {activeReport === "hawkers" && (
        <div className="module-section">
          <h3>Hawker Performance Analysis</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={hawkerPerformance}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {hawkerPerformance.map((_, i) => (
                  <Cell key={i} fill={["#2563eb", "#60a5fa", "#93c5fd"][i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <p className="module-sub">
            Contribution of individual hawkers to total sales.
          </p>
        </div>
      )}

      {/* Inventory Turnover */}
      {activeReport === "inventory" && (
        <div className="module-section">
          <h3>Inventory Turnover Ratio</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inventoryTurnover}>
              <XAxis dataKey="item" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="turnover" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>

          <p className="module-sub">
            Higher turnover indicates efficient stock movement.
          </p>
        </div>
      )}

      {/* Vendor Supply */}
      {activeReport === "vendors" && (
        <div className="module-section">
          <h3>Vendor Supply Analysis</h3>

          <table className="module-table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Orders</th>
                <th>Delayed</th>
                <th>Fulfillment %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FreshMart</td>
                <td>48</td>
                <td>3</td>
                <td>93%</td>
              </tr>
              <tr>
                <td>City Dairy</td>
                <td>32</td>
                <td>6</td>
                <td>81%</td>
              </tr>
            </tbody>
          </table>

          <div className="action-buttons">
            <button className="btn-outline">Export Excel</button>
          </div>
        </div>
      )}

      {/* Note */}
      <div className="module-note">
        ⚠️ Reports & Analytics data is refreshed periodically. Real-time insights,
        advanced filters, forecasting models, and automated report scheduling
        will be added in future releases.
      </div>
    </div>
  );
}
