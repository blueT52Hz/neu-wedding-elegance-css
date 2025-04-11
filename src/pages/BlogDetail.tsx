
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id || '1');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "5 Xu Hướng Váy Cưới Nổi Bật Nhất Năm 2024",
      excerpt: "Khám phá những xu hướng váy cưới đang làm mưa làm gió trong năm 2024, từ phong cách tối giản đến vintage cổ điển.",
      image: "https://picsum.photos/id/1011/800/500",
      date: "10/04/2024",
      author: "Nguyễn Minh Tâm",
      category: "Xu Hướng Váy Cưới",
      content: `
        <p>Năm 2024 mang đến làn gió mới cho thế giới váy cưới với những xu hướng vừa kế thừa nét đẹp truyền thống, vừa đột phá với những ý tưởng sáng tạo hiện đại. Sau đây là 5 xu hướng váy cưới đang được các cô dâu yêu thích nhất trong năm nay:</p>

        <h3>1. Váy Cưới Minimalist - Vẻ Đẹp Của Sự Tinh Giản</h3>
        <p>Phong cách minimalist tiếp tục thống trị với những thiết kế váy cưới đơn giản nhưng vô cùng tinh tế. Các nhà thiết kế tập trung vào đường cắt hoàn hảo, chất liệu cao cấp như lụa satin mịn màng, crepe sang trọng thay vì những chi tiết đính kết cầu kỳ. Điểm nhấn của xu hướng này là sự tôn vinh vẻ đẹp tự nhiên của cô dâu, tạo nên vẻ thanh lịch, hiện đại mà vẫn đầy quyến rũ.</p>
        <p>Các kiểu dáng phổ biến trong xu hướng này bao gồm váy suông chữ A, váy slip dress thanh mảnh, hay váy column dress thẳng đứng. Màu trắng tinh khôi hoặc màu kem nhẹ nhàng là lựa chọn hàng đầu cho phong cách tối giản này.</p>

        <h3>2. Váy Cưới Vintage - Hoài Niệm Và Lãng Mạn</h3>
        <p>Năm 2024 chứng kiến sự trở lại mạnh mẽ của các thiết kế váy cưới lấy cảm hứng từ những thập niên trước, đặc biệt là phong cách thập niên 70 và 90. Các chi tiết như tay áo phồng, cổ cao, ren vintage, và những đường cắt cổ điển đang được yêu thích trở lại.</p>
        <p>Đặc biệt, váy cưới theo phong cách bohemian lãng mạn với chất liệu ren, voan mỏng nhẹ và những chi tiết thêu thủ công tỉ mỉ tạo nên vẻ đẹp mơ mộng, phóng khoáng cho những cô dâu yêu thích sự tự do, phóng khoáng.</p>

        <h3>3. Váy Cưới Hai Trong Một - Sự Linh Hoạt Tối Đa</h3>
        <p>Xu hướng váy cưới có thể biến đổi linh hoạt đang ngày càng được ưa chuộng. Các nhà thiết kế đã tạo ra những chiếc váy có thể thay đổi kiểu dáng từ lễ cưới chính thức sang tiệc tối, giúp cô dâu không cần thay đổi hoàn toàn trang phục.</p>
        <p>Điều này được thực hiện thông qua các chi tiết có thể tháo rời như tay áo, tà váy phụ, hoặc layer váy ngoài. Ví dụ như một chiếc váy ball gown lộng lẫy có thể biến thành váy suông ôm gọn gàng khi tháo lớp váy xòe bên ngoài, hoặc váy dài có thể biến thành váy ngắn trẻ trung cho tiệc tối.</p>

        <h3>4. Váy Với Họa Tiết 3D - Nghệ Thuật Điêu Khắc</h3>
        <p>Một trong những xu hướng nổi bật nhất năm 2024 là các chi tiết hoa 3D, cánh bướm, hoặc các họa tiết nổi được đính kết tỉ mỉ trên váy cưới. Những chi tiết này tạo nên hiệu ứng chuyển động, chiều sâu và sự sống động cho trang phục.</p>
        <p>Các nhà thiết kế sử dụng kỹ thuật cắt laser, thêu đính thủ công để tạo nên những "tác phẩm điêu khắc" tinh xảo trên nền vải, mang đến vẻ đẹp độc đáo và ấn tượng cho chiếc váy cưới.</p>

        <h3>5. Váy Cưới Màu Pastel - Phá Cách Nhẹ Nhàng</h3>
        <p>Không chỉ có màu trắng truyền thống, các tông màu pastel nhẹ nhàng như hồng phấn, xanh baby, tím lavender, và be champagne đang là lựa chọn mới mẻ cho các cô dâu muốn phá cách một chút mà vẫn giữ được nét thanh lịch, tinh tế.</p>
        <p>Màu pastel không chỉ xuất hiện trên toàn bộ váy mà còn được ứng dụng khéo léo trong các chi tiết đính kết, dải ruy băng, hoặc lớp voan phủ bên ngoài tạo hiệu ứng ombre màu tinh tế.</p>

        <p>Dù bạn là cô dâu yêu thích sự tối giản tinh tế, hoài cổ lãng mạn, hay hiện đại phá cách, xu hướng váy cưới năm 2024 đều có thể đáp ứng gu thẩm mỹ và phù hợp với cá tính riêng của mỗi người. Hãy tham khảo và lựa chọn phong cách phù hợp nhất với bản thân để tỏa sáng trong ngày trọng đại của mình.</p>
      `
    },
  ];

  const blog = blogs.find(blog => blog.id === blogId);

  if (!blog) {
    navigate('/blog');
    return null;
  }

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={blog.image}
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white text-center px-4">{blog.title}</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <article className="bg-white p-6 rounded-sm shadow-sm">
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.category}</span>
                </div>
                
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Tags:</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-wedding-cream text-gray-600 text-xs rounded-sm">Váy Cưới</span>
                        <span className="px-3 py-1 bg-wedding-cream text-gray-600 text-xs rounded-sm">{blog.category}</span>
                        <span className="px-3 py-1 bg-wedding-cream text-gray-600 text-xs rounded-sm">Xu Hướng</span>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-sm hover:border-wedding-gold hover:text-wedding-gold">
                        FB
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-sm hover:border-wedding-gold hover:text-wedding-gold">
                        IG
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-sm hover:border-wedding-gold hover:text-wedding-gold">
                        PT
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              {/* Author bio */}
              <div className="mt-8 bg-wedding-cream p-6 rounded-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={`https://picsum.photos/id/${100 + blogId}/200/200`} 
                      alt={blog.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium">{blog.author}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Chuyên gia tư vấn váy cưới với hơn 10 năm kinh nghiệm trong ngành. Đam mê khám phá và chia sẻ những xu hướng mới nhất về thời trang cưới để giúp mỗi cô dâu tìm được chiếc váy hoàn hảo cho ngày trọng đại.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related posts */}
              <div className="mt-12">
                <h2 className="heading-md mb-6">Bài Viết Liên Quan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {blogs
                    .filter(b => b.category === blog.category && b.id !== blog.id)
                    .slice(0, 3)
                    .map(relatedBlog => (
                      <article key={relatedBlog.id} className="bg-white rounded-sm overflow-hidden shadow-sm">
                        <div className="relative overflow-hidden h-48">
                          <img 
                            src={relatedBlog.image} 
                            alt={relatedBlog.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-serif mb-2">
                            <Link to={`/blog/${relatedBlog.id}`} className="hover:text-wedding-gold transition-colors">
                              {relatedBlog.title}
                            </Link>
                          </h3>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>{relatedBlog.date}</span>
                          </div>
                        </div>
                      </article>
                    ))}
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

              {/* Recent Posts */}
              <div className="bg-wedding-cream p-6 rounded-sm mb-8">
                <h3 className="heading-sm mb-4">Bài Viết Mới Nhất</h3>
                <ul className="space-y-4">
                  {blogs.slice(0, 3).map((recentBlog) => (
                    <li key={recentBlog.id} className="flex space-x-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={recentBlog.image} 
                          alt={recentBlog.title} 
                          className="w-full h-full object-cover rounded-sm"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">
                          <Link to={`/blog/${recentBlog.id}`} className="hover:text-wedding-gold transition-colors">
                            {recentBlog.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{recentBlog.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-wedding-cream p-6 rounded-sm mb-8">
                <h3 className="heading-sm mb-4">Danh Mục</h3>
                <ul className="space-y-3">
                  {[...new Set(blogs.map(blog => blog.category))].map((category, index) => {
                    const count = blogs.filter(blog => blog.category === category).length;
                    return (
                      <li key={index}>
                        <a href="#" className="flex items-center justify-between hover:text-wedding-gold transition-colors">
                          <span>{category}</span>
                          <span className="bg-white text-gray-500 px-2 py-1 text-xs rounded-full">{count}</span>
                        </a>
                      </li>
                    );
                  })}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
