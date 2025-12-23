import "../../assets/css/HawkerDashboardContainer.css";

export default function WalletSettlementInsightsContainer() {
  const wallet = {
    openingBalance: 5200,
    todaysEarnings: 3200,
    commission: 320,
    inventoryDeduction: 2800,
    payableToSPO: 2480,
    netBalance: 6040,
    settlementStatus: "Pending", // Cleared | Pending
    lastSettlement: "21 Dec 2025",
  };

  return (
    <div className="wallet-insights">
      {/* Header */}
      <div className="wallet-header">
        <div>
          <h2>Wallet & Settlement</h2>
          <span>Financial summary for today</span>
        </div>

        <span
          className={`settlement-status ${wallet.settlementStatus.toLowerCase()}`}
        >
          {wallet.settlementStatus}
        </span>
      </div>

      {/* Wallet Summary */}
      <div className="wallet-summary">
        <div className="wallet-card">
          <span>Opening Balance</span>
          <h3>₹{wallet.openingBalance}</h3>
        </div>

        <div className="wallet-card highlight">
          <span>Today’s Earnings</span>
          <h3>₹{wallet.todaysEarnings}</h3>
        </div>

        <div className="wallet-card success">
          <span>Commission Earned</span>
          <h3>₹{wallet.commission}</h3>
        </div>

        <div className="wallet-card danger">
          <span>Inventory Cost Deducted</span>
          <h3>-₹{wallet.inventoryDeduction}</h3>
        </div>

        <div className="wallet-card">
          <span>Amount Payable to SPO</span>
          <h3>₹{wallet.payableToSPO}</h3>
        </div>

        <div className="wallet-card net">
          <span>Net Wallet Balance</span>
          <h3>₹{wallet.netBalance}</h3>
        </div>
      </div>

      {/* Settlement Info */}
      <div className="settlement-info">
        <div>
          <b>Last Settlement:</b> {wallet.lastSettlement}
        </div>
        {wallet.settlementStatus === "Pending" && (
          <div className="pending-note">
            ⚠️ Settlement is pending with SPO
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="wallet-actions">
        <button className="wallet-btn-outline">View Transaction History</button>
        <button className="wallet-btn-primary">View Settlement Details</button>
      </div>
    </div>
  );
}
