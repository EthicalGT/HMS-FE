import React, { useState } from "react";
import "../assets/css/OtpVerificationContainer.css";
import { verifyOTP } from "../api/otp_verify";

const OtpVerification = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 5) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                if (nextInput) nextInput.focus();
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let myotp = otp.join();
        const res = await verifyOTP({ myotp });
        res?.success ? window.location = res.redirectTO : showError(res.message);
    };

    const handleResend = () => {
        alert("OTP has been resent!");
    };

    return (
        <div className="otp-container">
            <div className="otp-card">
                <div className="otp-icon">🔒</div>
                <h2>Verify OTP</h2>
                <p>Enter the 6-digit code sent to</p>
                <p className="phone-number">+91 ****4321</p>

                <form onSubmit={handleSubmit}>
                    <div className="otp-inputs">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                            />
                        ))}
                    </div>
                    <button type="submit" className="verify-btn">
                        Verify OTP
                    </button>
                </form>

                <p className="resend-text">
                    Didn't receive the OTP?{" "}
                    <span className="resend-btn" onClick={handleResend}>
                        Resend OTP
                    </span>
                </p>
            </div>
        </div>
    );
};

export default OtpVerification;
