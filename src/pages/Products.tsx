
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activePrice, setActivePrice] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: "Váy Cưới Ren Princess",
      image: "https://picsum.photos/id/64/600/800",
      price: "25.000.000 ₫",
      category: "Váy Xòe",
      material: "Ren",
      style: "Cổ điển"
    },
    {
      id: 2,
      name: "Váy Cưới Đuôi Cá Elegance",
      image: "https://picsum.photos/id/65/600/800",
      price: "30.000.000 ₫",
      category: "Váy Đuôi Cá",
      material: "Satin",
      style: "Hiện đại"
    },
    {
      id: 3,
      name: "Váy Cưới Minimalist Pearl",
      image: "https://picsum.photos/id/76/600/800",
      price: "22.000.000 ₫",
      category: "Váy Tối Giản",
      material: "Lụa",
      style: "Tối giản"
    },
    {
      id: 4,
      name: "Váy Cưới Công Chúa Royal",
      image: "https://picsum.photos/id/223/600/800",
      price: "35.000.000 ₫",
      category: "Váy Xòe",
      material: "Organza",
      style: "Cổ điển"
    },
    {
      id: 5,
      name: "Váy Cưới Bohemian Dream",
      image: "https://picsum.photos/id/325/600/800",
      price: "28.000.000 ₫",
      category: "Váy Suông",
      material: "Voan",
      style: "Bohemian"
    },
    {
      id: 6,
      name: "Váy Cưới Vintage Lace",
      image: "https://picsum.photos/id/366/600/800",
      price: "32.000.000 ₫",
      category: "Váy Xòe",
      material: "Ren",
      style: "Vintage"
    },
    {
      id: 7,
      name: "Váy Cưới Modern Romance",
      image: "https://picsum.photos/id/367/600/800",
      price: "27.000.000 ₫",
      category: "Váy Đuôi Cá",
      material: "Satin",
      style: "Hiện đại"
    },
    {
      id: 8,
      name: "Váy Cưới Simple Elegance",
      image: "https://picsum.photos/id/368/600/800",
      price: "20.000.000 ₫",
      category: "Váy Tối Giản",
      material: "Lụa",
      style: "Tối giản"
    },
    {
      id: 9,
      name: "Váy Cưới Fairy Tale",
      image: "https://picsum.photos/id/369/600/800",
      price: "38.000.000 ₫",
      category: "Váy Xòe",
      material: "Organza",
      style: "Cổ điển"
    },
    {
      id: 10,
      name: "Váy Cưới Beach Beauty",
      image: "https://picsum.photos/id/370/600/800",
      price: "23.000.000 ₫",
      category: "Váy Suông",
      material: "Voan",
      style: "Bohemian"
    },
    {
      id: 11,
      name: "Váy Cưới Luxury Pearl",
      image: "https://picsum.photos/id/371/600/800",
      price: "40.000.000 ₫",
      category: "Váy Xòe",
      material: "Ren",
      style: "Cổ điển"
    },
    {
      id: 12,
      name: "Váy Cưới Mermaid Dream",
      image: "https://picsum.photos/id/372/600/800",
      price: "33.000.000 ₫",
      category: "Váy Đuôi Cá",
      material: "Satin",
      style: "Hiện đại"
    }
  ];

  // Filter products based on active filters and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesPrice = activePrice === 'all' || 
      (activePrice === 'under25' && parseInt(product.price.replace(/\D/g, '')) < 25000000) ||
      (activePrice === '25to30' && parseInt(product.price.replace(/\D/g, '')) >= 25000000 && parseInt(product.price.replace(/\D/g, '')) <= 30000000) ||
      (activePrice === 'over30' && parseInt(product.price.replace(/\D/g, '')) > 30000000);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.style.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/177/2000/800" 
            alt="Bộ Sưu Tập Váy Cưới" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white">Bộ Sưu Tập Váy Cưới</h1>
        </div>
      </div>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div className="w-full lg:w-1/3">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm váy cưới..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                >
                  <option value="all">Tất cả kiểu dáng</option>
                  <option value="Váy Xòe">Váy Xòe</option>
                  <option value="Váy Đuôi Cá">Váy Đuôi Cá</option>
                  <option value="Váy Tối Giản">Váy Tối Giản</option>
                  <option value="Váy Suông">Váy Suông</option>
                </select>
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                  value={activePrice}
                  onChange={(e) => setActivePrice(e.target.value)}
                >
                  <option value="all">Tất cả giá</option>
                  <option value="under25">Dưới 25 triệu</option>
                  <option value="25to30">25 - 30 triệu</option>
                  <option value="over30">Trên 30 triệu</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="heading-md mb-4">Không tìm thấy sản phẩm phù hợp</h3>
              <p className="body-md text-gray-600">Vui lòng thử lại với bộ lọc khác.</p>
            </div>
          )}

          {/* Pagination (for demonstration) */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 flex items-center justify-center border border-wedding-gold text-wedding-gold rounded-sm">1</button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-wedding-gold hover:text-wedding-gold rounded-sm">2</button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-wedding-gold hover:text-wedding-gold rounded-sm">3</button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-wedding-gold hover:text-wedding-gold rounded-sm">
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
