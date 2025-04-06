
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, this would send the data to a server
    alert('Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1044/2000/800" 
            alt="Liên Hệ NEU Wedding Store" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white">Liên Hệ</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Liên Hệ Với Chúng Tôi</h2>
            <p className="body-md max-w-3xl mx-auto text-gray-600">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi để được tư vấn hoặc đặt lịch hẹn.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                <div>
                  <h3 className="heading-sm mb-4">Thông Tin Liên Hệ</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-wedding-gold mt-1 mr-3">📍</span>
                      <div>
                        <h4 className="font-medium">Địa Chỉ</h4>
                        <p className="text-gray-600">123 Đường Láng, Đống Đa, Hà Nội</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wedding-gold mt-1 mr-3">📞</span>
                      <div>
                        <h4 className="font-medium">Điện Thoại</h4>
                        <p className="text-gray-600">(024) 1234 5678</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wedding-gold mt-1 mr-3">✉️</span>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">info@neuwedding.com</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wedding-gold mt-1 mr-3">🕒</span>
                      <div>
                        <h4 className="font-medium">Giờ Làm Việc</h4>
                        <p className="text-gray-600">9:00 - 21:00, Thứ 2 - Chủ Nhật</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="heading-sm mb-4">Kết Nối Với Chúng Tôi</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-wedding-light-gold text-wedding-gold transition-colors hover:bg-wedding-gold hover:text-white">
                      <span className="sr-only">Facebook</span>
                      FB
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-wedding-light-gold text-wedding-gold transition-colors hover:bg-wedding-gold hover:text-white">
                      <span className="sr-only">Instagram</span>
                      IG
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-wedding-light-gold text-wedding-gold transition-colors hover:bg-wedding-gold hover:text-white">
                      <span className="sr-only">Pinterest</span>
                      PT
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-wedding-cream p-8 rounded-sm">
                <h3 className="heading-sm mb-6">Gửi Tin Nhắn</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Họ và Tên *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Số Điện Thoại *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Chủ Đề</label>
                      <select 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                      >
                        <option value="">-- Chọn chủ đề --</option>
                        <option value="appointment">Đặt Lịch Hẹn</option>
                        <option value="info">Thông Tin Sản Phẩm</option>
                        <option value="feedback">Góp Ý / Phản Hồi</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Tin Nhắn *</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary">Gửi Tin Nhắn</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-white rounded-sm overflow-hidden shadow-sm">
            <div className="h-[400px] w-full bg-gray-200">
              {/* Here would be an embedded Google Map. Since we can't actually embed one, I'm using a placeholder image */}
              <img 
                src="https://picsum.photos/id/1031/1200/400" 
                alt="Bản đồ NEU Wedding Store" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-wedding-gold text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Đặt Lịch Hẹn Trực Tiếp</h2>
          <p className="body-md mb-8 max-w-3xl mx-auto">
            Để được tư vấn cá nhân và trải nghiệm dịch vụ tốt nhất, hãy đặt lịch hẹn trước khi đến với chúng tôi.
          </p>
          <button className="bg-white text-wedding-gold px-6 py-3 rounded-sm hover:bg-opacity-90 transition-opacity">
            Đặt Lịch Hẹn Ngay
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
