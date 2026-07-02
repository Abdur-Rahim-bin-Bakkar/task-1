export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-8 border rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        Result
      </h2>

      <p className="text-lg">
        <strong>Total Price:</strong> ${result.total}
      </p>

      <div className="mt-5">

        <h3 className="font-semibold text-lg">
          Most Expensive Item
        </h3>

        <p>Name: {result.mostExpensive.name}</p>

        <p>Price: ${result.mostExpensive.price}</p>

      </div>

    </div>
  );
}