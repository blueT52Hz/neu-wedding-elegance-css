
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Xu Hướng Váy Cưới Nổi Bật Nhất Năm 2024",
      excerpt: "Khám phá những xu hướng váy cưới đang làm mưa làm gió trong năm 2024, từ phong cách tối giản đến vintage cổ điển.",
      image: "https://picsum.photos/id/1011/800/500",
      date: "10/04/2024",
      author: "Nguyễn Minh Tâm",
      category: "Xu Hướng Váy Cưới"
    },
    {
      id: 2,
      title: "Cách Chọn Váy Cưới Phù Hợp Với Dáng Người",
      excerpt: "Mỗi cô dâu có một vóc dáng khác nhau, hãy tìm hiểu cách chọn váy cưới phù hợp để tôn lên vẻ đẹp riêng của bạn.",
      image: "https://picsum.photos/id/1012/800/500",
      date: "05/04/2024",
      author: "Lê Thị Hồng",
      category: "Bí Quyết Chọn Váy"
    },
    {
      id: 3,
      title: "10 Màu Sắc Váy Cưới Đẹp Ngoài Màu Trắng Truyền Thống",
      excerpt: "Không chỉ có màu trắng, khám phá 10 tông màu váy cưới tuyệt đẹp mà các cô dâu hiện đại đang yêu thích.",
      image: "https://picsum.photos/id/1013/800/500",
      date: "01/04/2024",
      author: "Trần Hoàng Nam",
      category: "Xu Hướng Váy Cưới"
    },
    {
      id: 4,
      title: "Phụ Kiện Cưới Nào Hoàn Hảo Cho Chiếc Váy Của Bạn?",
      excerpt: "Từ vương miện, khăn voan đến giày cưới, hãy tìm hiểu cách phối hợp phụ kiện sao cho hoàn hảo với váy cưới.",
      image: "https://picsum.photos/id/1014/800/500",
      date: "28/03/2024",
      author: "Phạm Thị Mai",
      category: "Phụ Kiện Cưới"
    },
    {
      id: 5,
      title: "Chất Liệu Váy Cưới: Từ Ren Đến Lụa, Satin Và Hơn Thế Nữa",
      excerpt: "Tìm hiểu về các loại chất liệu phổ biến trong váy cưới, ưu nhược điểm và độ phù hợp với từng mùa, không gian tiệc cưới.",
      image: "https://picsum.photos/id/1015/800/500",
      date: "25/03/2024",
      author: "Nguyễn Văn Hùng",
      category: "Kiến Thức Váy Cưới"
    },
    {
      id: 6,
      title: "Lịch Sử Và Ý Nghĩa Của Váy Cưới Trắng",
      excerpt: "Khám phá nguồn gốc và ý nghĩa của truyền thống mặc váy cưới màu trắng, từ Hoàng gia đến hiện đại.",
      image: "https://picsum.photos/id/1016/800/500",
      date: "20/03/2024",
      author: "Lê Hoàng Anh",
      category: "Văn Hóa Cưới"
    }
  ];

  const categories = [
    { name: "Tất Cả", count: blogs.length },
    { name: "Xu Hướng Váy Cưới", count: 2 },
    { name: "Bí Quyết Chọn Váy", count: 1 },
    { name: "Phụ Kiện Cưới", count: 1 },
    { name: "Kiến Thức Váy Cưới", count: 1 },
    { name: "Văn Hóa Cưới", count: 1 }
  ];

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1048/2000/800" 
            alt="Blog NEU Wedding Store" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white">Tin Tức & Cẩm Nang Cưới</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                  <article key={blog.id} className="bg-white rounded-sm overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden h-60">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-wedding-gold text-white px-3 py-1 text-xs">
                        {blog.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <span>{blog.date}</span>
                        <span className="mx-2">•</span>
                        <span>{blog.author}</span>
                      </div>
                      <h2 className="text-xl font-serif font-medium mb-3">
                        <Link to={`/blog/${blog.id}`} className="hover:text-wedding-gold transition-colors">
                          {blog.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                      <Link to={`/blog/${blog.id}`} className="text-wedding-gold text-sm font-medium link-hover">
                        Đọc thêm
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
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

            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search */}
              <div className="bg-wedding-cream p-6 rounded-sm mb-8">
                <h3 className="heading-sm mb-4">Tìm Kiếm</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Tìm kiếm bài viết..." 
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                  />
                  <button className="absolute right-3 top-2 text-gray-500">
                    🔍
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-wedding-cream p-6 rounded-sm mb-8">
                <h3 className="heading-sm mb-4">Danh Mục</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center justify-between hover:text-wedding-gold transition-colors">
                        <span>{category.name}</span>
                        <span className="bg-white text-gray-500 px-2 py-1 text-xs rounded-full">{category.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-wedding-cream p-6 rounded-sm mb-8">
                <h3 className="heading-sm mb-4">Bài Viết Mới Nhất</h3>
                <ul className="space-y-4">
                  {blogs.slice(0, 3).map((blog) => (
                    <li key={blog.id} className="flex space-x-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="w-full h-full object-cover rounded-sm"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">
                          <Link to={`/blog/${blog.id}`} className="hover:text-wedding-gold transition-colors">
                            {blog.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{blog.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-wedding-cream p-6 rounded-sm">
                <h3 className="heading-sm mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Váy Cưới</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Cô Dâu</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Xu Hướng</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Vintage</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Minimalist</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Lễ Cưới</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Phụ Kiện</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Trang Điểm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-wedding-cream">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Đăng Ký Nhận Tin</h2>
          <p className="body-md mb-8 max-w-3xl mx-auto text-gray-700">
            Nhận các bài viết mới nhất và thông tin khuyến mãi của chúng tôi trực tiếp vào hộp thư của bạn.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Nhập địa chỉ email của bạn" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
              />
              <button className="btn-primary whitespace-nowrap">Đăng Ký</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
