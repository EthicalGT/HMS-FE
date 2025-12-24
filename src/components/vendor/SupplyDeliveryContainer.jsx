import { useState } from "react";
import "../../assets/css/VendorDashboardContainer.css";


export default function SupplyDeliveryContainer() {
    const [selectedShipment, setSelectedShipment] = useState(null);

    const shipments = [
        {
            shipmentId: "SHIP-001",
            items: "Tomatoes (50kg), Onions (30kg)",
            location: "Pune Warehouse",
            expectedDate: "25 Dec 2025",
            status: "Pending",
        },
        {
            shipmentId: "SHIP-002",
            items: "Potatoes (100kg)",
            location: "Mumbai Distribution",
            expectedDate: "26 Dec 2025",
            status: "In Transit",
        },
        {
            shipmentId: "SHIP-003",
            items: "Apples (40kg)",
            location: "Nagpur Branch",
            expectedDate: "24 Dec 2025",
            status: "Delivered",
        },
    ];

    // Map shipment status to CSS class
    const getStatusClass = (status) => {
        switch (status) {
            case "Pending":
                return "sd-badge-pending";
            case "In Transit":
                return "sd-badge-transit";
            case "Delivered":
                return "sd-badge-delivered";
            default:
                return "";
        }
    };

    return (
        <div className="supply-delivery-page">
            {/* Header */}
            <div className="sd-header">
                <h2>🚚 Supply & Delivery Status</h2>
                <p>Track shipment-wise delivery of items</p>
            </div>

            {/* Shipment Table */}
            <div className="sd-table-card">
                <table className="sd-shipment-table">
                    <thead>
                        <tr>
                            <th>Shipment ID</th>
                            <th>Items Dispatched</th>
                            <th>Delivery Location</th>
                            <th>Expected Delivery Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipments.map((shipment, index) => (
                            <tr key={index}>
                                <td>{shipment.shipmentId}</td>
                                <td>{shipment.items}</td>
                                <td>{shipment.location}</td>
                                <td>{shipment.expectedDate}</td>
                                <td>
                                    <span className={`sd-badge ${getStatusClass(shipment.status)}`}>
                                        {shipment.status}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        className="sd-btn-view"
                                        onClick={() => setSelectedShipment(shipment)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedShipment && (
                <div
                    className="sd-modal-overlay"
                    onClick={() => setSelectedShipment(null)}
                >
                    <div className="sd-modal" onClick={(e) => e.stopPropagation()}>
                        <h3>Shipment Details</h3>
                        <p>
                            <strong>Shipment ID:</strong> {selectedShipment.shipmentId}
                        </p>
                        <p>
                            <strong>Items:</strong> {selectedShipment.items}
                        </p>
                        <p>
                            <strong>Delivery Location:</strong> {selectedShipment.location}
                        </p>
                        <p>
                            <strong>Expected Date:</strong> {selectedShipment.expectedDate}
                        </p>
                        <p>
                            <strong>Status:</strong> {selectedShipment.status}
                        </p>

                        <button
                            className="sd-btn-view"
                            onClick={() => setSelectedShipment(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
