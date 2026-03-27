export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality Bluetooth headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    category: 'Electronics',
    image: 'https://i.imgur.com/placeholder.png',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor, GPS and sleep tracking.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://i.imgur.com/placeholder.png',
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole and breathable mesh upper.',
    price: 129.99,
    category: 'Sports',
    image: 'https://i.imgur.com/placeholder.png',
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Coffee Maker',
    description: 'Automatic drip coffee maker with built-in grinder and programmable timer.',
    price: 79.99,
    category: 'Home',
    image: 'https://i.imgur.com/placeholder.png',
    rating: 4.3,
  },
  {
    id: '5',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand with adjustable height and angle.',
    price: 49.99,
    category: 'Office',
    image: 'https://i.imgur.com/placeholder.png',
    rating: 4.7,
  },
];