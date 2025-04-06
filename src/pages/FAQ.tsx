
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const faqItems: FAQItem[] = [
    {
      question: "Làm thế nào để đặt lịch hẹn thử váy?",
      answer: "Bạn có thể đặt lịch hẹn thử váy thông qua website của chúng tôi tại trang Liên Hệ, gọi điện trực tiếp đến số (024) 1234 5678, hoặc gửi email đến info@neuwedding.com. Chúng tôi sẽ liên hệ lại để xác nhận lịch hẹn của bạn.",
      category: "Dịch Vụ"
    },
    {
      question: "Tôi cần chuẩn bị gì khi đến thử váy?",
      answer: "Bạn nên mang theo giày có chiều cao gần bằng với giày cưới dự định, áo ngực không dây hoặc áo ngực phù hợp với kiểu váy bạn muốn thử, và có thể mang theo phụ kiện cưới nếu bạn đã có (như vương miện, khăn voan). Ngoài ra, bạn có thể mang theo hình ảnh mẫu váy mà bạn yêu thích để dễ dàng tham khảo.",
      category: "Dịch Vụ"
    },
    {
      question: "NEU Wedding Store có dịch vụ may đo váy cưới không?",
      answer: "Có, chúng tôi cung cấp dịch vụ may đo váy cưới theo số đo và yêu cầu cụ thể của khách hàng. Đội ngũ thiết kế và thợ may chuyên nghiệp của chúng tôi sẽ làm việc chặt chẽ với bạn để tạo ra chiếc váy cưới hoàn hảo.",
      category: "Dịch Vụ"
    },
    {
      question: "Khi nào tôi nên bắt đầu tìm váy cưới?",
      answer: "Lý tưởng nhất, bạn nên bắt đầu tìm váy cưới từ 6-9 tháng trước ngày cưới. Điều này sẽ cho phép đủ thời gian cho việc thử váy, may đo (nếu cần), và điều chỉnh để có được chiếc váy hoàn hảo. Tuy nhiên, nếu bạn có thời gian ngắn hơn, chúng tôi vẫn có thể hỗ trợ với các tùy chọn có sẵn hoặc dịch vụ may đo nhanh.",
      category: "Tư Vấn"
    },
    {
      question: "Làm thế nào để chọn váy cưới phù hợp với dáng người?",
      answer: "Mỗi dáng người sẽ phù hợp với các kiểu váy khác nhau. Ví dụ, váy dáng chữ A phù hợp với hầu hết các dáng người, váy đuôi cá tôn đường cong cho dáng đồng hồ cát, váy suông phù hợp với dáng người mảnh mai. Các chuyên gia tư vấn của chúng tôi sẽ giúp bạn tìm ra kiểu váy tôn lên vẻ đẹp tự nhiên của bạn.",
      category: "Tư Vấn"
    },
    {
      question: "Giá váy cưới tại NEU Wedding Store như thế nào?",
      answer: "Giá váy cưới tại NEU Wedding Store dao động từ 15 triệu đến 50 triệu đồng tùy thuộc vào thiết kế, chất liệu, và độ phức tạp. Chúng tôi cung cấp nhiều lựa chọn phù hợp với nhiều ngân sách khác nhau. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết về bảng giá cụ thể.",
      category: "Sản Phẩm"
    },
    {
      question: "NEU Wedding Store có cho thuê váy cưới không?",
      answer: "Có, chúng tôi cung cấp dịch vụ cho thuê váy cưới với nhiều mẫu mã đa dạng. Dịch vụ cho thuê bao gồm váy cưới, các điều chỉnh cần thiết để vừa vặn, và dịch vụ vệ sinh sau khi sử dụng. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết về các gói cho thuê.",
      category: "Dịch Vụ"
    },
    {
      question: "Tôi có thể xem trước các mẫu váy trước khi đến cửa hàng không?",
      answer: "Có, bạn có thể xem trước một số mẫu váy cưới tiêu biểu của chúng tôi trên trang Sản Phẩm của website. Tuy nhiên, để trải nghiệm đầy đủ và xem toàn bộ bộ sưu tập, chúng tôi khuyên bạn nên đến trực tiếp cửa hàng.",
      category: "Sản Phẩm"
    },
    {
      question: "NEU Wedding Store có cung cấp phụ kiện cưới không?",
      answer: "Có, chúng tôi cung cấp đầy đủ các loại phụ kiện cưới như khăn voan, vương miện, hoa cài tóc, găng tay, trang sức và giày cưới. Các phụ kiện được thiết kế để phối hợp hoàn hảo với váy cưới của chúng tôi.",
      category: "Sản Phẩm"
    },
    {
      question: "Tôi có thể thay đổi hoặc hủy đơn hàng sau khi đặt không?",
      answer: "Chính sách thay đổi và hủy đơn hàng phụ thuộc vào loại dịch vụ và thời điểm thay đổi. Đối với váy may đo, sau khi đã xác nhận thiết kế và chất liệu, việc thay đổi có thể phát sinh phí bổ sung. Vui lòng liên hệ với chúng tôi càng sớm càng tốt nếu bạn cần thay đổi hoặc hủy đơn hàng.",
      category: "Chính Sách"
    },
    {
      question: "NEU Wedding Store có chính sách bảo hành không?",
      answer: "Có, chúng tôi cung cấp dịch vụ bảo hành cho các sản phẩm váy cưới may đo trong vòng 30 ngày kể từ ngày giao hàng đối với các lỗi về may đo hoặc chất liệu. Đối với dịch vụ cho thuê, chúng tôi kiểm tra kỹ lưỡng trước khi giao váy để đảm bảo chất lượng tốt nhất.",
      category: "Chính Sách"
    },
    {
      question: "Làm thế nào để bảo quản váy cưới sau đám cưới?",
      answer: "Để bảo quản váy cưới, bạn nên giặt khô chuyên nghiệp ngay sau đám cưới, sau đó bảo quản trong túi vải cotton hoặc hộp axit-free chuyên dụng, đặt ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Chúng tôi cũng cung cấp dịch vụ bảo quản váy cưới chuyên nghiệp, vui lòng liên hệ để biết thêm chi tiết.",
      category: "Tư Vấn"
    }
  ];

  const categories = [
    { name: 'all', label: 'Tất Cả' },
    { name: 'Dịch Vụ', label: 'Dịch Vụ' },
    { name: 'Sản Phẩm', label: 'Sản Phẩm' },
    { name: 'Tư Vấn', label: 'Tư Vấn' },
    { name: 'Chính Sách', label: 'Chính Sách' }
  ];

  // Filter FAQ items based on active category and search term
  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1039/2000/800" 
            alt="FAQ NEU Wedding Store" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white">Câu Hỏi Thường Gặp</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Chúng Tôi Có Thể Giúp Gì Cho Bạn?</h2>
            <p className="body-md max-w-3xl mx-auto text-gray-600">
              Tìm kiếm câu trả lời cho những thắc mắc phổ biến về váy cưới và dịch vụ của chúng tôi.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm câu hỏi..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`px-4 py-2 rounded-sm text-sm transition-colors ${
                      activeCategory === category.name 
                        ? 'bg-wedding-gold text-white' 
                        : 'bg-wedding-cream text-gray-700 hover:bg-wedding-light-gold'
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <details key={index} className="group py-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-serif font-medium">{faq.question}</h3>
                    <span className="ml-6 h-7 w-7 flex-shrink-0 flex items-center justify-center border border-gray-300 rounded-full group-open:transform group-open:rotate-180 transition-transform">
                      <span className="sr-only">Open or close accordion</span>
                      ⌄
                    </span>
                  </summary>
                  <div className="mt-4 px-4 pb-2">
                    <p className="text-gray-600">{faq.answer}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-wedding-cream text-xs px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </details>
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="heading-md mb-4">Không tìm thấy câu hỏi phù hợp</h3>
                <p className="body-md text-gray-600">Vui lòng thử lại với từ khóa khác hoặc đặt câu hỏi trực tiếp với chúng tôi.</p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-wedding-cream rounded-sm text-center">
            <h3 className="heading-md mb-4">Không Tìm Thấy Câu Trả Lời?</h3>
            <p className="body-md max-w-2xl mx-auto text-gray-600 mb-6">
              Nếu bạn không tìm thấy câu trả lời cho thắc mắc của mình, đừng ngần ngại liên hệ với chúng tôi. Đội ngũ tư vấn của chúng tôi sẽ sẵn sàng hỗ trợ bạn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:02412345678" className="btn-secondary">
                Gọi: (024) 1234 5678
              </a>
              <a href="mailto:info@neuwedding.com" className="btn-secondary">
                Email: info@neuwedding.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
