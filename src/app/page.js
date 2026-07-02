"use client";

import { useState } from "react";
import ItemForm from "@/components/ItemForm";
import ItemList from "@/components/ItemList";
import ResultCard from "@/components/ResultCard";
import ProjectOverview from "@/components/ProjectOverview";

export default function Home() {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(null);

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="flex flex-col-reverse md:flex-row gap-1 ">

        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">

          <ItemForm
            items={items}
            setItems={setItems}
            setResult={setResult}
            result={result}
          />

          <ItemList items={items} />

        </div>
        
        <ResultCard result={result} />
      </div>
      <ProjectOverview/>
    </main>
  );
}