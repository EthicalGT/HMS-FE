import { useState } from "react";

export default function PurchaseOrdersContainer() {
    const [selectedPO, setSelectedPO] = useState(null);

    const purchaseOrders = [
        {
            poNumber: "PO-2024-001",
            items: "Tomatoes (50kg), Onions (30kg)",
            price: "₹12,500",
            deadline: "25 Sep 2024",
            status: "New",
        },
        {
            poNumber: "PO-2024-002",
            items: "Potatoes (100kg)",
            price: "₹9,000",
            deadline: "22 Sep 2024",
            status: "Accepted",
        },
        {
            poNumber: "PO-2024-003",
            items: "Apples (40kg)",
            price: "₹18,000",
            deadline: "20 Sep 2024",
            status: "Completed",
        },
    ];

    const statusClass = (status) => {
        switch (status) {
            case "New":
                return "badge pending-badge";
            case "Accepted":
                return "badge active-badge";
            case "Rejected":
                return "badge rejected-badge";
            case "Completed":
                return "badge completed-badge";
            default:
                return "badge";
        }
    };

    return (
        <div className="po-page">
            <div className="welcome">
                <h2>📑 Purchase Orders</h2>
                <p>POs raised by SPO / Admin</p>
            </div>

            <div className="table-card">
                <table className="po-table">
                    <thead>
                        <tr>
                            <th>PO Number</th>
                            <th>Items & Quantity</th>
                            <th>Agreed Price</th>
                            <th>Delivery Deadline</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {purchaseOrders.map((po, index) => (
                            <tr key={index}>
                                <td>{po.poNumber}</td>
                                <td>{po.items}</td>
                                <td>{po.price}</td>
                                <td>{po.deadline}</td>
                                <td>
                                    <span className={statusClass(po.status)}>
                                        {po.status}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        className="btn secondary"
                                        onClick={() => setSelectedPO(po)}
                                    >
                                        View
                                    </button>

                                    {po.status === "New" && (
                                        <>
                                            <button className="btn success">Accept</button>
                                            <button className="btn danger">Reject</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ===== MODAL ===== */}
            {selectedPO && (
                <div className="modal-overlay" onClick={() => setSelectedPO(null)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h3>PO Details</h3>
                        <p><strong>PO Number:</strong> {selectedPO.poNumber}</p>
                        <p><strong>Items:</strong> {selectedPO.items}</p>
                        <p><strong>Price:</strong> {selectedPO.price}</p>
                        <p><strong>Deadline:</strong> {selectedPO.deadline}</p>
                        <p><strong>Status:</strong> {selectedPO.status}</p>

                        <button
                            className="btn secondary"
                            onClick={() => setSelectedPO(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
