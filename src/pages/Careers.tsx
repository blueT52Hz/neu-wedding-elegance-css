
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const Careers = () => {
  const [activeJobId, setActiveJobId] = useState<number | null>(null);
  
  const jobs: Job[] = [
    {
      id: 1,
      title: "Nhà Thiết Kế Váy Cưới",
      location: "Hà Nội",
      type: "Toàn thời gian",
      department: "Thiết Kế",
      description: "Chúng tôi đang tìm kiếm một Nhà Thiết Kế Váy Cưới tài năng và đam mê để tham gia vào đội ngũ sáng tạo của NEU Wedding Store. Bạn sẽ chịu trách nhiệm thiết kế và phát triển các mẫu váy cưới độc đáo, tinh tế và hiện đại, đáp ứng được nhu cầu và mong đợi của khách hàng.",
      responsibilities: [
        "Thiết kế và phát triển các mẫu váy cưới mới, độc đáo và phù hợp với xu hướng thị trường",
        "Nghiên cứu và cập nhật các xu hướng thời trang cưới trong nước và quốc tế",
        "Lên ý tưởng và phát triển các bộ sưu tập váy cưới theo mùa",
        "Làm việc chặt chẽ với bộ phận sản xuất để đảm bảo sản phẩm được may đúng thiết kế và đạt chất lượng cao",
        "Tư vấn và làm việc trực tiếp với khách hàng để thiết kế váy cưới theo yêu cầu"
      ],
      requirements: [
        "Tốt nghiệp chuyên ngành Thiết kế Thời trang hoặc các ngành liên quan",
        "Có ít nhất 2 năm kinh nghiệm trong lĩnh vực thiết kế váy cưới",
        "Có kỹ năng vẽ tay tốt và sử dụng thành thạo các phần mềm thiết kế như Adobe Illustrator, Photoshop",
        "Có kiến thức sâu rộng về chất liệu, kỹ thuật may và xu hướng thời trang cưới",
        "Có khả năng giao tiếp tốt và làm việc nhóm hiệu quả",
        "Sáng tạo, đam mê và có con mắt thẩm mỹ tinh tế"
      ],
      benefits: [
        "Mức lương cạnh tranh và thưởng theo doanh số",
        "Môi trường làm việc chuyên nghiệp, sáng tạo và năng động",
        "Cơ hội phát triển và thăng tiến trong công việc",
        "Được đào tạo và nâng cao tay nghề",
        "Chế độ bảo hiểm đầy đủ theo quy định",
        "Thời gian làm việc linh hoạt",
        "Các chế độ phúc lợi khác theo quy định của công ty"
      ]
    },
    {
      id: 2,
      title: "Tư Vấn Viên Váy Cưới",
      location: "Hà Nội",
      type: "Toàn thời gian",
      department: "Kinh Doanh",
      description: "NEU Wedding Store đang tìm kiếm một Tư Vấn Viên Váy Cưới nhiệt tình và chuyên nghiệp để phục vụ khách hàng. Bạn sẽ là người trực tiếp tư vấn và hỗ trợ khách hàng trong việc lựa chọn váy cưới phù hợp với phong cách, vóc dáng và ngân sách của họ.",
      responsibilities: [
        "Tư vấn và giới thiệu các mẫu váy cưới phù hợp với khách hàng",
        "Hỗ trợ khách hàng trong quá trình thử váy và đưa ra các gợi ý về phụ kiện đi kèm",
        "Giải đáp mọi thắc mắc của khách hàng về chất liệu, thiết kế, giá cả và các dịch vụ của cửa hàng",
        "Thực hiện các thủ tục đặt hàng, thanh toán và giao nhận sản phẩm",
        "Xây dựng và duy trì mối quan hệ tốt với khách hàng",
        "Đạt chỉ tiêu doanh số hàng tháng"
      ],
      requirements: [
        "Tốt nghiệp Cao đẳng trở lên, ưu tiên các chuyên ngành liên quan đến Kinh doanh, Marketing hoặc Thời trang",
        "Có kinh nghiệm làm việc trong lĩnh vực bán lẻ thời trang, đặc biệt là váy cưới là một lợi thế",
        "Có khả năng giao tiếp tốt và kỹ năng thuyết phục khách hàng",
        "Ngoại hình ưa nhìn, phong cách chuyên nghiệp",
        "Có kiến thức về thời trang cưới và các xu hướng hiện tại",
        "Tinh thần trách nhiệm cao, chăm chỉ và có khả năng làm việc độc lập"
      ],
      benefits: [
        "Mức lương cơ bản cạnh tranh + hoa hồng theo doanh số",
        "Môi trường làm việc chuyên nghiệp và thân thiện",
        "Được đào tạo về sản phẩm và kỹ năng bán hàng",
        "Cơ hội thăng tiến trong công việc",
        "Chế độ bảo hiểm đầy đủ theo quy định",
        "Thưởng theo doanh số và các dịp lễ, Tết",
        "Nghỉ phép theo quy định của Bộ luật Lao động"
      ]
    },
    {
      id: 3,
      title: "Thợ May Váy Cưới",
      location: "Hà Nội",
      type: "Toàn thời gian",
      department: "Sản Xuất",
      description: "NEU Wedding Store đang tuyển dụng Thợ May Váy Cưới có tay nghề cao để tham gia vào đội ngũ sản xuất. Bạn sẽ chịu trách nhiệm may và hoàn thiện các mẫu váy cưới cao cấp theo thiết kế và yêu cầu của khách hàng.",
      responsibilities: [
        "May và hoàn thiện các mẫu váy cưới theo thiết kế",
        "Thực hiện các kỹ thuật may đặc biệt như đính kết, thêu tay, làm hoa vải...",
        "Điều chỉnh và sửa chữa váy cưới theo số đo và yêu cầu của khách hàng",
        "Kiểm tra chất lượng sản phẩm trước khi bàn giao",
        "Phối hợp với bộ phận thiết kế để hiểu rõ yêu cầu và đặc điểm của từng mẫu váy",
        "Đảm bảo tiến độ sản xuất theo kế hoạch"
      ],
      requirements: [
        "Có ít nhất 3 năm kinh nghiệm trong lĩnh vực may váy cưới hoặc trang phục cao cấp",
        "Thành thạo các kỹ thuật may cơ bản và nâng cao",
        "Có kinh nghiệm làm việc với các loại vải cao cấp như ren, lụa, satin, organza...",
        "Có kỹ năng đính kết, thêu tay là một lợi thế",
        "Tỉ mỉ, cẩn thận và có trách nhiệm cao trong công việc",
        "Có khả năng làm việc độc lập và theo nhóm",
        "Chịu được áp lực công việc và có thể làm thêm giờ khi cần thiết"
      ],
      benefits: [
        "Mức lương cạnh tranh dựa trên năng lực và kinh nghiệm",
        "Môi trường làm việc chuyên nghiệp và thân thiện",
        "Được đào tạo thêm về các kỹ thuật may đặc biệt",
        "Cơ hội thăng tiến lên vị trí quản lý sản xuất",
        "Chế độ bảo hiểm đầy đủ theo quy định",
        "Thưởng cuối năm và các dịp lễ, Tết",
        "Nghỉ phép theo quy định của Bộ luật Lao động"
      ]
    }
  ];

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1041/2000/800" 
            alt="Tuyển Dụng NEU Wedding Store" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white">Cơ Hội Nghề Nghiệp</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Tham Gia Đội Ngũ NEU Wedding Store</h2>
            <p className="body-md max-w-3xl mx-auto text-gray-600">
              Chúng tôi luôn tìm kiếm những người tài năng, đam mê và sáng tạo để cùng xây dựng NEU Wedding Store trở thành thương hiệu váy cưới hàng đầu Việt Nam.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-wedding-cream rounded-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-wedding-light-gold rounded-full">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="heading-sm mb-4">Môi Trường Sáng Tạo</h3>
              <p className="text-gray-600">
                Chúng tôi tạo ra một không gian làm việc nơi bạn có thể phát huy tối đa sự sáng tạo và đam mê của mình trong lĩnh vực thời trang cưới.
              </p>
            </div>

            <div className="text-center p-6 bg-wedding-cream rounded-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-wedding-light-gold rounded-full">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="heading-sm mb-4">Cơ Hội Phát Triển</h3>
              <p className="text-gray-600">
                Chúng tôi cam kết đầu tư vào sự phát triển của nhân viên với các chương trình đào tạo và cơ hội thăng tiến rõ ràng.
              </p>
            </div>

            <div className="text-center p-6 bg-wedding-cream rounded-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-wedding-light-gold rounded-full">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="heading-sm mb-4">Chế Độ Đãi Ngộ Tốt</h3>
              <p className="text-gray-600">
                Chúng tôi cung cấp mức lương cạnh tranh, thưởng theo hiệu suất làm việc, và các chế độ phúc lợi hấp dẫn khác.
              </p>
            </div>
          </div>

          {/* Job Listings */}
          <div className="mb-16">
            <h2 className="heading-lg mb-8 text-center">Vị Trí Đang Tuyển Dụng</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h3 className="heading-sm mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-wedding-light-gold text-wedding-gold">
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {job.description}
                    </p>
                    <button 
                      className="text-wedding-gold link-hover"
                      onClick={() => setActiveJobId(job.id === activeJobId ? null : job.id)}
                    >
                      {job.id === activeJobId ? 'Thu gọn' : 'Xem chi tiết'}
                    </button>
                  </div>
                  
                  {job.id === activeJobId && (
                    <div className="p-6 bg-wedding-cream border-t border-gray-200 animate-fade-in">
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Mô Tả Công Việc:</h4>
                        <p className="text-sm text-gray-600">{job.description}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Trách Nhiệm:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Yêu Cầu:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Quyền Lợi:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          {job.benefits.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="btn-primary w-full">Ứng Tuyển Ngay</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-wedding-cream p-8 rounded-sm mb-16">
            <h2 className="heading-lg mb-8 text-center">Quy Trình Ứng Tuyển</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-wedding-gold text-white flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-medium mb-2">Nộp Hồ Sơ</h3>
                <p className="text-sm text-gray-600">
                  Gửi CV và đơn xin việc của bạn qua email hoặc ứng tuyển trực tiếp qua website.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-wedding-gold text-white flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-medium mb-2">Sơ Tuyển</h3>
                <p className="text-sm text-gray-600">
                  Chúng tôi sẽ xem xét hồ sơ và liên hệ với các ứng viên phù hợp.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-wedding-gold text-white flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-medium mb-2">Phỏng Vấn</h3>
                <p className="text-sm text-gray-600">
                  Các ứng viên được chọn sẽ tham gia phỏng vấn với quản lý bộ phận và nhân sự.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-wedding-gold text-white flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-medium mb-2">Nhận Việc</h3>
                <p className="text-sm text-gray-600">
                  Ứng viên xuất sắc sẽ nhận được thư mời làm việc và bắt đầu hành trình mới cùng NEU Wedding Store.
                </p>
              </div>
            </div>
          </div>

          {/* How to Apply */}
          <div className="text-center">
            <h2 className="heading-lg mb-4">Cách Thức Ứng Tuyển</h2>
            <p className="body-md max-w-3xl mx-auto text-gray-600 mb-8">
              Nếu bạn quan tâm đến bất kỳ vị trí nào trên đây, vui lòng gửi CV và đơn xin việc của bạn đến:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:careers@neuwedding.com" className="btn-primary">
                Gửi Email Đến careers@neuwedding.com
              </a>
              <Link to="/contact" className="btn-secondary">
                Liên Hệ Với Chúng Tôi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
