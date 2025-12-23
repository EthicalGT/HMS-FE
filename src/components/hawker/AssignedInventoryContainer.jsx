import { useState } from "react";
import "../../assets/css/HawkerDashboardContainer.css";

export default function AssignedInventoryContainer() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      assignedQty: 50,
      soldQty: 20,
      price: 30,
    },
    {
      id: 2,
      name: "Bananas",
      category: "Fruits",
      assignedQty: 100,
      soldQty: 45,
      price: 5,
    },
    {
      id: 3,
      name: "Milk Packets",
      category: "Dairy",
      assignedQty: 40,
      soldQty: 10,
      price: 25,
    },
  ]);

  const handleSoldChange = (id, value) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, soldQty: Math.min(value, item.assignedQty) }
          : item,
      ),
    );
  };

  return (
    <div className="inventory-wrapper">
      <div className="inventory-header">
        <div>
          <h1>Assigned Inventory</h1>
          <p>Items assigned by SPO for today’s sales</p>
        </div>
        <span className="inventory-note">
          Sold quantity updates require supervisor approval
        </span>
      </div>

      <div className="inventory-table-card">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Assigned Qty</th>
              <th>Market Price (₹)</th>
              <th>Assigned Value (₹)</th>
              <th>Sold Qty</th>
              <th>Remaining Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const assignedValue = item.assignedQty * item.price;
              const remaining = item.assignedQty - item.soldQty;

              return (
                <tr key={item.id}>
                  <td className="item-name">{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.assignedQty}</td>
                  <td>₹{item.price}</td>
                  <td className="value">₹{assignedValue}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={item.soldQty}
                      onChange={(e) =>
                        handleSoldChange(item.id, Number(e.target.value))
                      }
                      className="sold-input"
                    />
                  </td>
                  <td className={remaining === 0 ? "stock zero" : "stock"}>
                    {remaining}
                  </td>
                  <td>
                    <button className="view-btn">View</button>
                    <button className="update-btn">Request Approval</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
