
import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Váy Cưới Ren Princess",
      image: "https://picsum.photos/id/64/600/800",
      price: "25.000.000 ₫",
      category: "Váy Xòe"
    },
    {
      id: 2,
      name: "Váy Cưới Đuôi Cá Elegance",
      image: "https://picsum.photos/id/65/600/800",
      price: "30.000.000 ₫",
      category: "Váy Đuôi Cá"
    },
    {
      id: 3,
      name: "Váy Cưới Minimalist Pearl",
      image: "https://picsum.photos/id/76/600/800",
      price: "22.000.000 ₫",
      category: "Váy Tối Giản"
    },
    {
      id: 4,
      name: "Váy Cưới Công Chúa Royal",
      image: "https://picsum.photos/id/223/600/800",
      price: "35.000.000 ₫",
      category: "Váy Xòe"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Bộ Sưu Tập Nổi Bật</h2>
          <p className="body-md max-w-3xl mx-auto text-gray-600">
            Khám phá những mẫu váy cưới được yêu thích nhất của chúng tôi, được thiết kế với sự tỉ mỉ và chất liệu cao cấp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="btn-secondary">Xem Tất Cả Sản Phẩm</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
