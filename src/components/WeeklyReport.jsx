import React, { useState } from "react";
import "../assets/css/WeeklyReport.css"; // Make sure path is correct

export default function WeeklyReport({ dark = false }) {
  const weekly = [1200, 2100, 1800, 2600, 3200, 4000, 2800];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [mode, setMode] = useState("weekly");
  const [showValues, setShowValues] = useState(false);
  const [hover, setHover] = useState(null);

  const data = weekly; // For now only weekly
  const max = Math.max(...data);

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 700;
    const y = 160 - (v / max) * 120;
    return { x, y, value: v };
  });

  const getColor = (value) => {
    if (value < max * 0.4) return "#ef4444";
    if (value < max * 0.75) return "#f59e0b";
    return "#22c55e";
  };

  return (
    <div className={`weekly-wrapper ${dark ? "dark" : ""}`}>
      {/* Weekly Sales Card */}
      <section className="weekly-card">
        <div className="weekly-header">
          <h3>Sales Overview</h3>
          <div className="controls">
            <button onClick={() => setMode("weekly")}>Weekly</button>
            <button onClick={() => setMode("monthly")}>Monthly</button>
            <button onClick={() => setMode("yearly")}>Yearly</button>
            <label>
              <input
                type="checkbox"
                onChange={(e) => setShowValues(e.target.checked)}
              />
              Show Values
            </label>
          </div>
        </div>

        <div className="weekly-chart">
          <svg viewBox="0 0 700 200" className="line-chart">
            <polyline
              points={points.map((p) => `${p.x},${p.y}`).join(" ")}
              className="chart-line"
            />
            {points.map((p, i) => (
              <g
                key={i}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              >
                <circle cx={p.x} cy={p.y} r="5" fill={getColor(p.value)} />
                {hover === i && (
                  <text x={p.x} y={p.y - 10} textAnchor="middle" fill="#000">
                    ₹{p.value}
                  </text>
                )}
                {showValues && (
                  <text
                    x={p.x}
                    y={p.y - 15}
                    textAnchor="middle"
                    fill={getColor(p.value)}
                  >
                    ₹{p.value}
                  </text>
                )}
              </g>
            ))}
          </svg>

          <div className="chart-days">
            {labels.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Card */}
      <section className="tracking-card">
        <div className="tracking-header">
          <h3>Live Tracking</h3>
          <button className="link-btn">Full Map</button>
        </div>
        <div className="tracking-radar">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
          <div className="pointer">▲</div>
          <span className="dot dot-a" />
          <span className="dot dot-b" />
          <span className="dot dot-c" />
        </div>

        <ul className="tracking-list">
          <li>
            <span className="status online" />
            ABC.<span className="zone">Zone A</span>
          </li>
          <li>
            <span className="status online" />
            XYZ.<span className="zone">Zone B</span>
          </li>
          <li>
            <span className="status busy" />
            PQR.<span className="zone">Zone A</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
