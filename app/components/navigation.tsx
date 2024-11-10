import { NavigationProps } from '@/type';
import Link from 'next/link';

export default function Navigation({ className }: NavigationProps) {
  return (
    <nav className={`bg-gray-800 text-white p-4 ${className || ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Our Store
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/products/new" className="hover:text-gray-300">
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
}
