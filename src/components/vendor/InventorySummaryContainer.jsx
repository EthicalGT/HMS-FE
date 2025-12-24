import React from "react";
import "../../assets/css/VendorDashboardContainer.css"; // CSS file

// Import Recharts
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const inventoryData = [
    { product: "Apples", supplied: 120, remaining: 30 },
    { product: "Bananas", supplied: 90, remaining: 20 },
    { product: "Oranges", supplied: 150, remaining: 50 },
    { product: "Milk", supplied: 200, remaining: 60 },
];

const trendData = [
    { month: "Jan", supplied: 200 },
    { month: "Feb", supplied: 180 },
    { month: "Mar", supplied: 250 },
    { month: "Apr", supplied: 220 },
    { month: "May", supplied: 270 },
];

export default function InventorySummaryContainer() {
    return (
        <div className="inventory-page">
            {/* Header */}
            <div className="inv-header">
                <h2>📊 Inventory Summary</h2>
                <p>Overview of supplied items, remaining stock, and product statistics</p>
            </div>

            {/* Overview Table */}
            <div className="inv-card">
                <h3>Overview of Supplied Items</h3>
                <table className="inv-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Supplied</th>
                            <th>Remaining</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.product}</td>
                                <td>{item.supplied}</td>
                                <td>{item.remaining}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Supply Trends Graph */}
            <div className="inv-card trends-card">
                <h3>Supply Trends</h3>
                <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={trendData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="supplied" fill="#4f46e5" barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Product-wise Table */}
            <div className="inv-card">
                <h3>Product-wise Supply Statistics</h3>
                <table className="inv-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Supplied</th>
                            <th>Remaining</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.product}</td>
                                <td>{item.supplied}</td>
                                <td>{item.remaining}</td>
                                <td>
                                    <span
                                        className={`inv-badge ${item.remaining === 0
                                            ? "inv-badge-delivered"
                                            : item.remaining < item.supplied / 2
                                                ? "inv-badge-transit"
                                                : "inv-badge-pending"
                                            }`}
                                    >
                                        {item.remaining === 0
                                            ? "Delivered"
                                            : item.remaining < item.supplied / 2
                                                ? "In Transit"
                                                : "Pending"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
