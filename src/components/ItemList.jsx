export default function ItemList({ items }) {
  return (
    <div className="mt-8">

      <h2 className="text-xl font-bold mb-4">
        Item List
      </h2>

      <div className="space-y-3">

        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex justify-between"
          >
            <span>{item.name}</span>

            <span>${item.price}</span>
          </div>
        ))}

      </div>

    </div>
  );
}