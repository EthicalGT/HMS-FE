import React, { useState } from "react";

export default function ProductCatalogContainer() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Tomatoes",
            category: "Vegetables",
            price: 30,
            stock: 120,
            status: "Active",
        },
        {
            id: 2,
            name: "Milk",
            category: "Dairy",
            price: 55,
            stock: 40,
            status: "Active",
        },
        {
            id: 3,
            name: "Apples",
            category: "Fruits",
            price: 120,
            stock: 0,
            status: "Inactive",
        },
    ]);

    const handlePriceChange = (id, value) => {
        setProducts((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, price: value } : item
            )
        );
    };

    return (
        <div className="product-page">
            <div className="product-card">
                {/* Header */}
                <div className="product-header">
                    <div>
                        <h2>📦 Product Catalog</h2>
                        <p>Manage your products & pricing</p>
                    </div>
                    <button className="add-btn">+ Add Product</button>
                </div>

                {/* Table */}
                <div className="table-wrapper">
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Unit Price (₹)</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Edit</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>

                                    {/* Price editable by vendor */}
                                    <td>
                                        <input
                                            type="number"
                                            value={product.price}
                                            onChange={(e) =>
                                                handlePriceChange(product.id, e.target.value)
                                            }
                                            className="price-input"
                                        />
                                    </td>

                                    <td>
                                        {product.stock > 0 ? product.stock : "Out of stock"}
                                    </td>

                                    <td>
                                        <span
                                            className={`status ${product.status === "Active" ? "active" : "inactive"
                                                }`}
                                        >
                                            {product.status}
                                        </span>
                                    </td>

                                    <td>
                                        <button className="edit-btn">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
