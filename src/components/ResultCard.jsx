import { Card, CardHeader, Chip } from "@heroui/react";
import { DollarSign, Crown } from "lucide-react";

export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <Card className="mb-8 max-w-2xl mx-auto rounded-3xl shadow-xl border border-gray-200">
      <CardHeader className="flex justify-between items-center w-full">
        <div>
          <h2 className="text-2xl font-bold">Calculation Result</h2>
          <p className="text-sm text-gray-500">
            Summary of your submitted items
          </p>
        </div>

        <Chip color="success" variant="flat">
          Completed
        </Chip>
      </CardHeader>

      <div />

      <div className="space-y-6">

        {/* Total Price */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3">
            <DollarSign size={30} />
            <div>
              <p className="text-sm opacity-90">Total Price</p>

              <h2 className="text-4xl font-bold">
                ${result.total}
              </h2>
            </div>
          </div>
        </div>

        {/* Most Expensive Item */}
        <div className="border rounded-2xl p-6 bg-gray-50">

          <div className="flex items-center gap-3 mb-5">
            <Crown className="text-yellow-500" size={30} />

            <h3 className="text-xl font-bold">
              Most Expensive Item
            </h3>
          </div>

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                Item Name
              </p>

              <h4 className="text-2xl font-semibold">
                {result.mostExpensive.name}
              </h4>
            </div>

            <Chip
              color="warning"
              variant="shadow"
              className="text-lg font-bold px-4 py-5"
            >
              ${result.mostExpensive.price}
            </Chip>

          </div>

        </div>

      </div>
    </Card>
  );
}