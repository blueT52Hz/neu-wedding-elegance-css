
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const linkClasses = (path: string) => {
    return `link-hover ${isActive(path) ? 'text-wedding-gold after:w-full' : ''}`;
  };

  const mobileLinkClasses = (path: string) => {
    return `px-4 py-2 hover:bg-wedding-cream ${isActive(path) ? 'text-wedding-gold bg-wedding-cream' : ''}`;
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
          <Link to="/" className={linkClasses('/')}>Trang Chủ</Link>
          <Link to="/about" className={linkClasses('/about')}>Giới Thiệu</Link>
          <Link to="/products" className={linkClasses('/products')}>Sản Phẩm</Link>
          <Link to="/blog" className={linkClasses('/blog')}>Blog</Link>
          <Link to="/contact" className={linkClasses('/contact')}>Liên Hệ</Link>
          <Link to="/faq" className={linkClasses('/faq')}>FAQ</Link>
          <Link to="/login" className={linkClasses('/login')}>Đăng Nhập</Link>
          <Link to="/cart" className={linkClasses('/cart')}>Giỏ Hàng</Link>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white z-50 shadow-md md:hidden py-4 animate-fade-in">
            <div className="container-custom flex flex-col space-y-4">
              <Link to="/" className={mobileLinkClasses('/')} onClick={toggleMenu}>Trang Chủ</Link>
              <Link to="/about" className={mobileLinkClasses('/about')} onClick={toggleMenu}>Giới Thiệu</Link>
              <Link to="/products" className={mobileLinkClasses('/products')} onClick={toggleMenu}>Sản Phẩm</Link>
              <Link to="/blog" className={mobileLinkClasses('/blog')} onClick={toggleMenu}>Blog</Link>
              <Link to="/contact" className={mobileLinkClasses('/contact')} onClick={toggleMenu}>Liên Hệ</Link>
              <Link to="/faq" className={mobileLinkClasses('/faq')} onClick={toggleMenu}>FAQ</Link>
              <Link to="/login" className={mobileLinkClasses('/login')} onClick={toggleMenu}>Đăng Nhập</Link>
              <Link to="/cart" className={mobileLinkClasses('/cart')} onClick={toggleMenu}>Giỏ Hàng</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
