
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
}

const ProductCard = ({ id, name, image, price, category }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-serif">
            <Link to={`/products/${id}`} className="link-hover">
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-gray-500">{category}</p>
        </div>
        <p className="text-sm font-medium text-wedding-gold">{price}</p>
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-[-20px] group-hover:translate-y-2">
        <Link to={`/products/${id}`} className="bg-white px-4 py-2 text-xs uppercase tracking-wider shadow-md">
          Xem Chi Tiết
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
