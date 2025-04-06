
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-wedding-gold">
          NEU Wedding Store
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="link-hover">Trang Chủ</Link>
          <Link to="/about" className="link-hover">Giới Thiệu</Link>
          <Link to="/products" className="link-hover">Sản Phẩm</Link>
          <Link to="/blog" className="link-hover">Blog</Link>
          <Link to="/contact" className="link-hover">Liên Hệ</Link>
          <Link to="/faq" className="link-hover">FAQ</Link>
          <Link to="/login" className="link-hover">Đăng Nhập</Link>
          <Link to="/cart" className="link-hover">Giỏ Hàng</Link>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white z-50 shadow-md md:hidden py-4 animate-fade-in">
            <div className="container-custom flex flex-col space-y-4">
              <Link to="/" className="px-4 py-2 hover:bg-wedding-cream" onClick={toggleMenu}>Trang Chủ</Link>
              <Link to="/about" className="px-4 py-2 hover:bg-wedding-cream" onClick={toggleMenu}>Giới Thiệu</Link>
              <Link to="/products" className="px-4 py-2 hover:bg-wedding-cream" onClick={toggleMenu}>Sản Phẩm</Link>
              <Link to="/blog" className="px-4 py-2 hover:bg-wedding-cream" onClick={toggleMenu}>Blog</Link>
              <Link to="/contact" className="px-4 py-2 hover:bg-wedding-cream" onClick={toggleMenu}>Liên Hệ</Link>
              <Link to="/faq" className="px-4 py-2 hover:bg-wedding-cream" onClick={toggleMenu}>FAQ</Link>
              <Link to="/login" className="px-4 py-2 hover:bg-wedding-cream" onClick={toggleMenu}>Đăng Nhập</Link>
              <Link to="/cart" className="px-4 py-2 hover:bg-wedding-cream" onClick={toggleMenu}>Giỏ Hàng</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
