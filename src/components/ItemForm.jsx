"use client";

import { useState } from "react";

export default function ItemForm({
    items,
    setItems,
    setResult,
}) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleAddItem = () => {
        if (!name || !price) return;

        const newItem = {
            name,
            price: Number(price),
        };

        setItems([...items, newItem]);

        setName("");
        setPrice("");
    };

    const handleSubmit = async () => {
        if (items.length === 0) return;

        const res = await fetch("/api/items", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(items),
        });

        const data = await res.json();

        setResult(data);
    };

    return (
        <div className="space-y-4">

            <input
                type="text"
                placeholder="Item Name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button
                onClick={handleAddItem}
                className="btn btn-primary w-full"
            >
                Add Item
            </button>

            <button
                onClick={handleSubmit}
                className="btn btn-success w-full"
            >
                Submit
            </button>

        </div>
    );
}