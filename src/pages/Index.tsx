
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      
      {/* About Section */}
      <section className="section-padding bg-wedding-cream">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/id/1426604966848/600/800" 
                alt="NEU Wedding Store" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="heading-lg mb-6">Về NEU Wedding Store</h2>
              <p className="body-md mb-4 text-gray-700">
                NEU Wedding Store là địa chỉ tin cậy dành cho các cô dâu hiện đại, nơi bạn có thể tìm thấy chiếc váy cưới trong mơ. Chúng tôi tự hào mang đến những mẫu váy cưới độc đáo, tinh tế và sang trọng, được thiết kế tỉ mỉ đến từng chi tiết.
              </p>
              <p className="body-md mb-6 text-gray-700">
                Với đội ngũ nhân viên chuyên nghiệp và nhiệt tình, chúng tôi cam kết mang đến trải nghiệm mua sắm tuyệt vời nhất cho bạn trong hành trình chuẩn bị cho ngày trọng đại.
              </p>
              <Link to="/about" className="btn-secondary">Tìm Hiểu Thêm</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Danh Mục Váy Cưới</h2>
            <p className="body-md max-w-3xl mx-auto text-gray-600">
              Khám phá các kiểu dáng váy cưới đa dạng, phù hợp với mọi phong cách và vóc dáng.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-sm">
              <img 
                src="https://picsum.photos/id/42/600/800" 
                alt="Váy Xòe" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-serif mb-2">Váy Xòe</h3>
                  <Link to="/products" className="inline-block border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                    Xem Ngay
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-sm">
              <img 
                src="https://picsum.photos/id/43/600/800" 
                alt="Váy Đuôi Cá" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-serif mb-2">Váy Đuôi Cá</h3>
                  <Link to="/products" className="inline-block border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                    Xem Ngay
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-sm">
              <img 
                src="https://picsum.photos/id/44/600/800" 
                alt="Váy Tối Giản" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-serif mb-2">Váy Tối Giản</h3>
                  <Link to="/products" className="inline-block border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                    Xem Ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="section-padding bg-wedding-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <p className="body-md max-w-3xl mx-auto text-gray-600">
              Những trải nghiệm và cảm nhận từ các cô dâu đã chọn NEU Wedding Store.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://picsum.photos/id/1081/100/100" 
                    alt="Khách hàng" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-medium">Ngọc Linh</h4>
                  <p className="text-xs text-gray-500">Cô dâu tháng 6/2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Tôi đã tìm thấy chiếc váy cưới hoàn hảo tại NEU Wedding Store. Đội ngũ nhân viên rất nhiệt tình và chuyên nghiệp, tư vấn tận tâm. Váy cưới chất lượng tuyệt vời và giá cả phải chăng."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://picsum.photos/id/1082/100/100" 
                    alt="Khách hàng" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-medium">Thu Hà</h4>
                  <p className="text-xs text-gray-500">Cô dâu tháng 3/2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Mọi người đều khen ngợi chiếc váy cưới của tôi trong ngày cưới. Cảm ơn NEU Wedding Store đã giúp tôi tỏa sáng trong ngày trọng đại. Tôi sẽ giới thiệu cho bạn bè và người thân."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://picsum.photos/id/1083/100/100" 
                    alt="Khách hàng" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-medium">Minh Tâm</h4>
                  <p className="text-xs text-gray-500">Cô dâu tháng 10/2023</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Trải nghiệm mua váy cưới tại NEU Wedding Store thật tuyệt vời. Không gian sang trọng, váy cưới đa dạng và nhân viên chuyên nghiệp. Tôi đã có một ngày cưới hoàn hảo với chiếc váy mơ ước."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-wedding-gold text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Sẵn Sàng Tìm Kiếm Váy Cưới Trong Mơ?</h2>
          <p className="body-md mb-8 max-w-3xl mx-auto">
            Đặt lịch hẹn ngay hôm nay để nhận tư vấn cá nhân và khám phá bộ sưu tập váy cưới đa dạng của chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-wedding-gold px-6 py-3 rounded-sm hover:bg-opacity-90 transition-opacity">
              Đặt Lịch Hẹn
            </Link>
            <Link to="/products" className="border border-white px-6 py-3 rounded-sm hover:bg-white hover:text-wedding-gold transition-colors">
              Xem Bộ Sưu Tập
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
