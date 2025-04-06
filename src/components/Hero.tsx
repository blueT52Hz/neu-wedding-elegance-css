
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/1486312338219/2000/1300" 
          alt="Váy cưới tuyệt đẹp" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="heading-xl mb-6 animate-fade-in">Váy Cưới Sang Trọng & Tinh Tế</h1>
          <p className="body-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Khám phá bộ sưu tập váy cưới độc đáo của chúng tôi, nơi mỗi chiếc váy là một tác phẩm nghệ thuật, giúp tôn lên vẻ đẹp rạng ngời của bạn trong ngày trọng đại.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/products" className="btn-primary">Xem Bộ Sưu Tập</Link>
            <Link to="/contact" className="btn-secondary">Đặt Lịch Hẹn</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
