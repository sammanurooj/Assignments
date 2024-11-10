import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
      <p className="text-lg mb-4">
        Browse our products and learn more about what we offer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Featured Products</h2>
          <p>Check out our latest collection of amazing products.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Latest Updates</h2>
          <p>Stay informed about our newest additions and updates.</p>
        </div>
      </div>
    </main>
  );
}
