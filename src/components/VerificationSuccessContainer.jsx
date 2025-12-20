import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/VerificationSuccessContainer.css";

const SuccessVerification = () => {
    const [count, setCount] = useState(5);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setShow(true);
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        const timeout = setTimeout(() => {
            navigate("/hawker_dashboard");
        }, 6000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigate]);

    return (
        <div className="success-container">
            <div className="success-card">
                <div className={`success-icon ${show ? "show" : ""}`}>
                    ✓
                </div>

                <h2>Verified Successfully</h2>
                <p>Your phone number has been verified.</p>

                <p className="redirect-text">
                    Redirecting in <span>{count}</span> seconds...
                </p>
            </div>
        </div>
    );
};

export default SuccessVerification;
