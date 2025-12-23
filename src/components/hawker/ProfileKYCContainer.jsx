import React from "react";
import "../../assets/css/HawkerDashboardContainer.css";

export default function ProfileKYCContainer({ user }) {
  return (
    <div className="kyc-wrapper">
      <div className="kyc-header">
        <div>
          <h1>Profile & KYC</h1>
          <p>Manage your personal details and verification status</p>
        </div>
        <span className="kyc-status unverified">KYC Unverified</span>
      </div>

      <div className="kyc-card profile-card">
        <div className="profile-left">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="profile-image"
          />
          <button className="upload-btn">Change Photo</button>
        </div>

        <div className="profile-right">
          <h2>Personal Information</h2>
          <div className="info-grid">
            <div>
              <label>Full Name</label>
              <span>{user}</span>
            </div>
            <div>
              <label>Phone Number</label>
              <span>+91 9876543210</span>
            </div>
            <div>
              <label>Address</label>
              <span>123 Street, Akurdi, Maharashtra</span>
            </div>
            <div>
              <label>Aadhaar Status</label>
              <span className="aadhaar unverified">Unverified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kyc-card">
        <h2>Uploaded Documents</h2>
        <div className="document-box">
          <p>No documents uploaded yet</p>
          <button className="primary-btn">Upload Documents</button>
        </div>
      </div>

      <div className="kyc-card">
        <h2>Edit Profile</h2>
        <form className="edit-form">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter phone number" />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter address" />
          </div>

          <button type="submit" className="primary-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
