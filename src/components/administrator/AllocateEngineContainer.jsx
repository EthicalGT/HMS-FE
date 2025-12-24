import React, { useState } from "react";
import "../../assets/css/AdminPanelContainer.css";

export default function AllocationEngineContainer() {
  const [activeView, setActiveView] = useState(null);

  return (
    <div className="admin-module">
      {/* Header */}
      <div className="module-header">
        <h2>Allocation Engine</h2>
        <p>
          Central decision engine to allocate inventory to hawkers based on
          performance, availability, area demand, and value limits while
          allowing controlled manual overrides.
        </p>
      </div>

      {/* Allocation Insights */}
      <div className="module-grid">
        <div className="module-card">
          <h4>Total Stock Available</h4>
          <span className="module-value">₹18.6L</span>
          <p className="module-sub">Ready for allocation</p>
        </div>

        <div className="module-card highlight">
          <h4>Active Hawkers</h4>
          <span className="module-value">142</span>
          <p className="module-sub">Eligible for allocation</p>
        </div>

        <div className="module-card warning">
          <h4>Value Limit Breaches</h4>
          <span className="module-value">7</span>
          <p className="module-sub">Requires admin review</p>
        </div>

        <div className="module-card danger">
          <h4>Manual Overrides</h4>
          <span className="module-value">5</span>
          <p className="module-sub">Done today</p>
        </div>
      </div>

      {/* Allocation Rules */}
      <div className="module-section">
        <h3>Allocation Rules Engine</h3>
        <ul>
          <li>Performance-based allocation using past sales data</li>
          <li>Stock availability and warehouse constraints</li>
          <li>Area-wise demand forecasting</li>
          <li>Maximum value limit per hawker</li>
          <li>Auto-flag if allocation exceeds allowed threshold</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("rules")}
        >
          View Rule Logic
        </button>
      </div>

      {/* Bulk Allocation */}
      <div className="module-section">
        <h3>Bulk Allocation</h3>
        <ul>
          <li>Auto-distribute inventory to eligible hawkers</li>
          <li>Uses system rules and demand projections</li>
          <li>Ensures fair and balanced distribution</li>
          <li>Preview allocation impact before execution</li>
          <li>Generates allocation audit record</li>
        </ul>

        <button
          className="btn-primary"
          onClick={() => setActiveView("bulk")}
        >
          Run Bulk Allocation
        </button>
      </div>

      {/* Manual Override */}
      <div className="module-section">
        <h3>Manual Override</h3>
        <ul>
          <li>Override system allocation for specific hawkers</li>
          <li>Admin justification mandatory</li>
          <li>Overrides logged with admin identity</li>
          <li>Triggers supervisor notification</li>
        </ul>

        <button
          className="btn-secondary"
          onClick={() => setActiveView("manual")}
        >
          Manual Override
        </button>
      </div>

      {/* Reallocation */}
      <div className="module-section">
        <h3>Reallocation</h3>
        <ul>
          <li>Reassign unused or returned inventory</li>
          <li>Triggered by low sales or expiry risk</li>
          <li>Auto-suggest best target hawkers</li>
          <li>Prevents stock wastage</li>
        </ul>

        <button
          className="btn-outline"
          onClick={() => setActiveView("reallocate")}
        >
          Reallocate Stock
        </button>
      </div>

      {/* Dynamic Working Views */}
      {activeView && (
        <div className="module-section">
          <h3>Allocation Details</h3>

          {activeView === "rules" && (
            <ul>
              <li>Sales velocity score calculation</li>
              <li>Area demand weighting</li>
              <li>Risk adjustment factor</li>
              <li>Maximum allowed inventory value per hawker</li>
              <li>Final allocation score = weighted result</li>
            </ul>
          )}

          {activeView === "bulk" && (
            <ul>
              <li>Hawker eligibility validation</li>
              <li>Auto quantity distribution per SKU</li>
              <li>Allocation preview table</li>
              <li>Final confirmation before execution</li>
              <li>Inventory locked post-allocation</li>
            </ul>
          )}

          {activeView === "manual" && (
            <ul>
              <li>Select hawker and product</li>
              <li>Enter override quantity and value</li>
              <li>Mandatory justification note</li>
              <li>Admin identity recorded</li>
              <li>Supervisor auto-notified</li>
            </ul>
          )}

          {activeView === "reallocate" && (
            <ul>
              <li>Identify idle or underperforming stock</li>
              <li>Suggest alternative hawkers</li>
              <li>Reassignment impact analysis</li>
              <li>Confirm reallocation</li>
            </ul>
          )}

          <button
            className="btn-outline"
            onClick={() => setActiveView(null)}
          >
            Close
          </button>
        </div>
      )}

      {/* Compliance Note */}
      <div className="module-note">
        ⚠️ Allocation Engine is a high-impact module. Every allocation,
        override, and reallocation is logged with timestamp, admin identity,
        and justification for audit and compliance purposes.
      </div>
    </div>
  );
}
