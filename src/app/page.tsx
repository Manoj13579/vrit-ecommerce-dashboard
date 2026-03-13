export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold mb-4">E-Commerce Dashboard</h1>

      <p className="text-gray-600 mb-6">
        Browse products, filter by category, and manage your cart.
      </p>

      <a
        href="/products"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        View Products
      </a>
    </div>
  );
}