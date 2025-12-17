import React, { useState } from "react";
import "../assets/css/ActionContainer.css";
import user from "../assets/img/user.png";
import { registerUser, loginUser } from "../api/auth";

function ActionContainer() {
  const [activeTab, setActiveTab] = useState("signup");
  const [role, setRole] = useState("hawker");

  /* ---------- SIGNUP STATE ---------- */
  const [signupData, setSignupData] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
    aadhar: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    zone: "",
  });

  /* ---------- LOGIN STATE ---------- */
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  /* ---------- HANDLERS ---------- */
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmitHawker = async (e) => {
    e.preventDefault();

    const res = await registerHawkerUser({ ...signupData, role });
    alert(res.message || "Registered");
  };

  

  const handleLoginSubmitHawker = async (e) => {
    e.preventDefault();

    const res = await loginHawkerUser({ ...loginData, role });

    if (res.token) {
      localStorage.setItem("token", res.token);
      alert("Login successful");
    } else {
      alert(res.message || "Login failed");
    }
  };

  const handleSignupSubmitVendor = async (e) => {
    e.preventDefault();

    const res = await registerVendorUser({ ...signupData, role });
    alert(res.message || "Registered");
  };

  

  const handleLoginSubmitVendor = async (e) => {
    e.preventDefault();

    const res = await loginVendorUser({ ...loginData, role });

    if (res.token) {
      localStorage.setItem("token", res.token);
      alert("Login successful");
    } else {
      alert(res.message || "Login failed");
    }
  };

  return (
    <div className="page">
      <div className="card">

        {/* HEADER */}
        <div className="card-header">
          <h2>Hawker & Vendor Portal</h2>
          <p>Register or sign in to manage your profile</p>
        </div>

        {/* TABS */}
        <div className="tabs">
          <button className={activeTab === "signup" ? "tab active" : "tab"} onClick={() => setActiveTab("signup")}>
            Sign Up
          </button>
          <button className={activeTab === "signin" ? "tab active" : "tab"} onClick={() => setActiveTab("signin")}>
            Sign In
          </button>
        </div>

        {/* ROLES */}
        <div className="roles">
          <button className={role === "hawker" ? "role active" : "role"} onClick={() => setRole("hawker")}>
            Hawker
          </button>
          <button className={role === "vendor" ? "role active" : "role"} onClick={() => setRole("vendor")}>
            Vendor
          </button>
        </div>

        {/* PHOTO */}
        <div className="photo-upload">
          <label className="photo-circle">
            <img src={user} alt="Profile" />
          </label>
        </div>

        {/* ---------- SIGN UP ---------- */}
        {activeTab === "signup" && (
          <form className="form" onSubmit={handleSignupSubmitHawker}>
            <h4>PERSONAL DETAILS</h4>

            <input name="full_name" placeholder="Full Name" onChange={handleSignupChange} />
            <input name="phone_number" placeholder="Phone Number" onChange={handleSignupChange} />
            <input name="email" type="email" placeholder="Email" onChange={handleSignupChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleSignupChange} />

            <h4>IDENTITY</h4>
            <input name="aadhar_number" placeholder="Aadhaar Number" onChange={handleSignupChange} />

            <h4>ADDRESS</h4>
            <textarea name="address" placeholder="Address" onChange={handleSignupChange}></textarea>

            <input name="city" placeholder="City" onChange={handleSignupChange} />
            <input name="pincode" placeholder="Pincode" onChange={handleSignupChange} />
            <input name="state" placeholder="State" onChange={handleSignupChange} />
            <input name="zone" placeholder="Zone" onChange={handleSignupChange} />

            <button className="submit-btn">Register as {role}</button>
          </form>
        )}

        {/* ---------- SIGN IN ---------- */}
        {activeTab === "signin" && (
          <form className="form" onSubmit={handleLoginSubmitHawker}>
            <h4>LOGIN</h4>

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleLoginChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleLoginChange}
            />

            <button className="submit-btn">Login as {role}</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ActionContainer;
