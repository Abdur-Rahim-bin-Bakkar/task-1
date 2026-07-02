"use client";

import { useState } from "react";
import ItemForm from "@/components/ItemForm";
import ItemList from "@/components/ItemList";
import ResultCard from "@/components/ResultCard";

export default function Home() {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(null);

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Item Calculator
        </h1>

        <ItemForm
          items={items}
          setItems={setItems}
          setResult={setResult}
        />

        <ItemList items={items} />

        <ResultCard result={result} />
      </div>
    </main>
  );
}