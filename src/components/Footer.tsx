
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-wedding-cream py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium">NEU Wedding Store</h3>
            <p className="text-sm">Mang đến vẻ đẹp tinh tế và sang trọng cho ngày trọng đại của bạn.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-wedding-gold hover:opacity-70 transition-opacity">
                <span className="sr-only">Facebook</span>
                FB
              </a>
              <a href="#" className="text-wedding-gold hover:opacity-70 transition-opacity">
                <span className="sr-only">Instagram</span>
                IG
              </a>
              <a href="#" className="text-wedding-gold hover:opacity-70 transition-opacity">
                <span className="sr-only">Pinterest</span>
                PT
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-wedding-gold transition-colors">Trang Chủ</Link></li>
              <li><Link to="/about" className="text-sm hover:text-wedding-gold transition-colors">Giới Thiệu</Link></li>
              <li><Link to="/products" className="text-sm hover:text-wedding-gold transition-colors">Sản Phẩm</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-wedding-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-wedding-gold transition-colors">Liên Hệ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Thông Tin Thêm</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm hover:text-wedding-gold transition-colors">FAQ</Link></li>
              <li><Link to="/login" className="text-sm hover:text-wedding-gold transition-colors">Tài Khoản</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-wedding-gold transition-colors">Tuyển Dụng</Link></li>
              <li><a href="#" className="text-sm hover:text-wedding-gold transition-colors">Chính Sách Bảo Mật</a></li>
              <li><a href="#" className="text-sm hover:text-wedding-gold transition-colors">Điều Khoản Sử Dụng</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Liên Hệ</h3>
            <address className="not-italic">
              <p className="text-sm mb-2">123 Đường Láng, Đống Đa, Hà Nội</p>
              <p className="text-sm mb-2">Email: info@neuwedding.com</p>
              <p className="text-sm mb-2">Phone: (024) 1234 5678</p>
              <p className="text-sm">Giờ làm việc: 9:00 - 21:00, Thứ 2 - Chủ Nhật</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} NEU Wedding Store. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
