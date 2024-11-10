// File: app/products/[id]/page.js
'use client';
import { use, useEffect, useState } from 'react';

export default function ProductDetail({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const foundProduct = products.find(
          (p) => p.id === parseInt(unwrappedParams.id)
        );

        if (foundProduct) {
          setProduct(foundProduct);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [unwrappedParams.id]);

  if (loading) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-xl">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-green-600">
            ${parseFloat(product.price).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
