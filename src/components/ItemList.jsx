import { Card, Chip } from "@heroui/react";
import { Package } from "lucide-react";

export default function ItemList({ items }) {
  if (items.length === 0) {
    return (
      <Card className="mt-8 shadow-md border border-dashed border-gray-300">
        <dib className="flex flex-col items-center justify-center py-10">
          <Package size={40} className="text-gray-400 mb-3" />

          <h2 className="text-xl font-semibold text-gray-700">
            No Items Added
          </h2>

          <p className="text-gray-500 text-center mt-2">
            Start by adding an item using the form above.
          </p>
        </dib>
      </Card>
    );
  }

  return (
    <Card className="mt-8 shadow-lg rounded-2xl">
      <div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Item List
          </h2>

          <Chip color="primary" variant="flat">
            {items.length} Items
          </Chip>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 hover:bg-blue-50 transition rounded-xl p-4 border"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                {/* <p className="text-sm text-gray-500">
                  Item #{index + 1}
                </p> */}
              </div>

              <Chip
                color="success"
                variant="shadow"
                className="font-semibold text-base"
              >
                ${item.price}
              </Chip>
            </div>
          ))}
        </div>

      </div>
    </Card>
  );
}