import React from "react";

export default function CompanyProfileContainer() {
    const company = {
        name: "ABC Traders",
        contactPerson: "John Doe",
        phone: "+91 9876543210",
        email: "contact@abctraders.com",
        address: "123 Main Street, Pune, Maharashtra",
        gst: "27ABCDE1234F1Z5",
        categories: ["Vegetables", "Fruits", "Dairy Products"],
    };

    return (
        <div className="company-profile-page">
            <div className="company-card">
                {/* Header */}
                <div className="company-header">
                    <div>
                        <h2>🏢 Company Profile</h2>
                        <p>Manage your business information</p>
                    </div>
                    <button className="edit-btn">Edit Profile</button>
                </div>

                {/* Details Grid */}
                <div className="company-grid">
                    <div className="field">
                        <label>Company Name</label>
                        <span>{company.name}</span>
                    </div>

                    <div className="field">
                        <label>Contact Person</label>
                        <span>{company.contactPerson}</span>
                    </div>

                    <div className="field">
                        <label>Phone Number</label>
                        <span>{company.phone}</span>
                    </div>

                    <div className="field">
                        <label>Email Address</label>
                        <span>{company.email}</span>
                    </div>

                    <div className="field full">
                        <label>Business Address</label>
                        <span>{company.address}</span>
                    </div>

                    <div className="field">
                        <label>GST Number</label>
                        <span>{company.gst || "Not Provided"}</span>
                    </div>

                    <div className="field">
                        <label>Product Categories</label>
                        <span>{company.categories.join(", ")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
