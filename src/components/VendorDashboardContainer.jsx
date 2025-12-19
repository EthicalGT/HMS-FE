import React from "react";


import {
    Package,
    ClipboardList,
    Truck,
    Clock,
    IndianRupee,
    CreditCard,
    CheckCircle,
} from "lucide-react";
export default function VendorDashboard() {
    return (
        <div className="dashboard">
            {/* Header */}
            <div className="header">
                <h1>Welcome back, Fresh Farms! </h1>
                <p>Here's an overview of your business performance today.</p>
            </div>

            <div className="grid">
                <div className="card">
                    <div className="card-header">
                        <div classnameName="card-icon">
                            <span>Total Product Listed</span>
                            <h2>124</h2>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
