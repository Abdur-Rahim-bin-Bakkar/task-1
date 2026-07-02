"use client";

import { useState } from "react";
import { Input, Button } from "@heroui/react";
import { Plus, Send } from "lucide-react";

export default function ItemForm({
    items,
    setItems,
    setResult,
    result
}) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleAddItem =async () => {
        if (!name || !price) return;

        const newItem = {
            name,
            price: Number(price),
        };

        setItems([...items, newItem]);

        setName("");
        setPrice("");

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
        <div className=" p-8 space-y-6">

            <div className="text-center">
                <h2 className="text-3xl font-bold">Add New Item</h2>
                <p className="text-gray-500 mt-2">
                    Enter item details and submit them for calculation.
                </p>
            </div>

            <Input
                label="Item Name"
                placeholder="Enter item name"
                variant="bordered"
                radius="lg"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={'w-full'}
            />

            <Input
                type="number"
                label="Price"
                placeholder="Enter item price"
                variant="bordered"
                radius="lg"
                size="lg"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={'w-full'}

            />

            <div className="flex flex-col gap-4 pt-2">

                <Button
                    color="primary"
                    radius="lg"
                    size="lg"
                    startContent={<Plus size={20} />}
                    className=" font-semibold w-full"
                    onPress={handleAddItem}
                >
                    Add Item
                </Button>

                {
                    items.length > 0 &&
                    <Button
                        color="success"
                        radius="lg"
                        size="lg"
                        startContent={<Send size={18} />}
                        className="bg-green-600 font-semibold w-full"
                        onPress={handleSubmit}
                    >
                        See Result
                    </Button>
                }


            </div>

        </div>
    );
}