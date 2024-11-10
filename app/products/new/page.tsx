'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // In a real application, this would be an API call to your backend
    // For this example, we'll use localStorage to persist data
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const newProduct = {
      id: products.length + 1,
      ...formData,
    };
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    router.push(`/products/${newProduct.id}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
