export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: string;
}

export interface NavigationProps {
  className?: string;
}
