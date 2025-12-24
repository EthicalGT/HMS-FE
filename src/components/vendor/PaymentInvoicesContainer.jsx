import React from "react";
import "../../assets/css/VendorDashboardContainer.css";

const paymentsData = [
    { invoice: "INV-001", po: "PO-1001", amount: 50000, status: "Paid" },
    { invoice: "INV-002", po: "PO-1002", amount: 75000, status: "Pending" },
    { invoice: "INV-003", po: "PO-1003", amount: 30000, status: "Paid" },
    { invoice: "INV-004", po: "PO-1004", amount: 60000, status: "Pending" },
];

export default function PaymentInvoicesContainer() {
    const totalEarnings = paymentsData.reduce((sum, item) => sum + item.amount, 0);
    const paidAmount = paymentsData
        .filter((item) => item.status === "Paid")
        .reduce((sum, item) => sum + item.amount, 0);
    const pendingAmount = totalEarnings - paidAmount;

    const chartData = [
        { label: "Paid", value: paidAmount, color: "#10b981" },
        { label: "Pending", value: pendingAmount, color: "#f59e0b" },
    ];

    const maxValue = Math.max(...chartData.map((d) => d.value));

    return (
        <div className="inventory-page">
            {/* Header */}
            <div className="inv-header">
                <h2>💰 Payments & Invoices</h2>
                <p>Summary of earnings and invoice statuses</p>
            </div>

            {/* Total Earnings Summary */}
            <div className="inv-card">
                <h3>Total Earnings Summary</h3>
                <div className="grid">
                    <div className="card kpi">
                        <div className="card-container">
                            <div className="icon">💰</div>
                            <span>Total Earnings</span>
                        </div>
                        <h3>₹{totalEarnings.toLocaleString()}</h3>
                    </div>
                    <div className="card kpi">
                        <div className="card-container">
                            <div className="icon">✅</div>
                            <span>Paid Amount</span>
                        </div>
                        <h3>₹{paidAmount.toLocaleString()}</h3>
                    </div>
                    <div className="card kpi">
                        <div className="card-container">
                            <div className="icon">⏳</div>
                            <span>Pending Amount</span>
                        </div>
                        <h3>₹{pendingAmount.toLocaleString()}</h3>
                    </div>
                </div>

                {/* Simple Chart */}
                <div className="graph-container">
                    {chartData.map((d, idx) => {
                        const heightPercent = (d.value / maxValue) * 100;
                        return (
                            <div key={idx} className="bar-wrapper">
                                <div
                                    className="bar"
                                    style={{ height: `${heightPercent}%`, backgroundColor: d.color }}
                                ></div>
                                <div className="bar-label">{d.label}</div>
                                <div className="bar-label">₹{d.value.toLocaleString()}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Invoice List */}
            <div className="inv-card">
                <h3>Invoice List</h3>
                <div className="table-wrapper">
                    <table className="inv-table">
                        <thead>
                            <tr>
                                <th>Invoice Number</th>
                                <th>PO Reference</th>
                                <th>Amount</th>
                                <th>Payment Status</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentsData.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{item.invoice}</td>
                                    <td>{item.po}</td>
                                    <td>₹{item.amount.toLocaleString()}</td>
                                    <td>
                                        <span
                                            className={`inv-badge ${item.status === "Paid"
                                                ? "inv-badge-delivered"
                                                : "inv-badge-pending"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn secondary">Download</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
