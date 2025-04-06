
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1473177104440/2000/800" 
            alt="About NEU Wedding Store" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white">Giới Thiệu</h1>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="heading-lg mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <p className="body-md mb-4 text-gray-700">
                NEU Wedding Store được thành lập vào năm 2015 với mong muốn mang đến những bộ váy cưới đẹp nhất cho các cô dâu Việt Nam. Với tâm huyết và đam mê, chúng tôi đã không ngừng phát triển và khẳng định vị thế trên thị trường váy cưới cao cấp.
              </p>
              <p className="body-md mb-4 text-gray-700">
                Trải qua gần 10 năm phát triển, chúng tôi đã phục vụ hơn 5000 cô dâu, và là đối tác tin cậy của nhiều studio chụp ảnh cưới uy tín tại Hà Nội và các tỉnh thành lân cận.
              </p>
              <p className="body-md mb-4 text-gray-700">
                Mỗi chiếc váy cưới tại NEU Wedding Store đều được thiết kế và may đo một cách tỉ mỉ, kết hợp giữa xu hướng thời trang hiện đại và những giá trị truyền thống, nhằm tôn vinh vẻ đẹp độc đáo của mỗi cô dâu trong ngày trọng đại.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/id/1523712999610/800/600" 
                alt="Our Story" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-wedding-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Sứ Mệnh Của Chúng Tôi</h2>
            <p className="body-md max-w-3xl mx-auto text-gray-700">
              Chúng tôi cam kết mang đến những trải nghiệm mua sắm váy cưới tuyệt vời nhất cho khách hàng, với sự phục vụ tận tâm và sản phẩm chất lượng cao.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-wedding-light-gold rounded-full">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="heading-sm mb-4">Chất Lượng</h3>
              <p className="text-gray-600">
                Chúng tôi cam kết sử dụng những chất liệu cao cấp nhất, với kỹ thuật may đo tỉ mỉ để tạo ra những chiếc váy cưới hoàn hảo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-wedding-light-gold rounded-full">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="heading-sm mb-4">Đổi Mới</h3>
              <p className="text-gray-600">
                Luôn cập nhật xu hướng thời trang cưới mới nhất, kết hợp với sự sáng tạo độc đáo để mang đến những bộ sưu tập váy cưới đặc sắc.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-wedding-light-gold rounded-full">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="heading-sm mb-4">Tận Tâm</h3>
              <p className="text-gray-600">
                Đội ngũ nhân viên chuyên nghiệp, nhiệt tình, sẵn sàng lắng nghe và tư vấn để giúp bạn tìm được chiếc váy cưới hoàn hảo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Đội Ngũ Của Chúng Tôi</h2>
            <p className="body-md max-w-3xl mx-auto text-gray-700">
              Gặp gỡ những người tài năng đứng sau thành công của NEU Wedding Store.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://picsum.photos/id/1001/300/300" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-sm mb-2">Nguyễn Minh Tâm</h3>
              <p className="text-wedding-gold mb-2">Nhà Sáng Lập & Giám Đốc</p>
              <p className="text-sm text-gray-600">
                Với hơn 15 năm kinh nghiệm trong ngành thời trang cưới, chị Tâm là linh hồn đằng sau mọi bộ sưu tập của NEU Wedding Store.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://picsum.photos/id/1002/300/300" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-sm mb-2">Trần Hoàng Nam</h3>
              <p className="text-wedding-gold mb-2">Nhà Thiết Kế Chính</p>
              <p className="text-sm text-gray-600">
                Tốt nghiệp từ Học viện Thời trang Paris, anh Nam mang đến những thiết kế váy cưới độc đáo và hiện đại.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://picsum.photos/id/1003/300/300" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-sm mb-2">Lê Thị Hồng</h3>
              <p className="text-wedding-gold mb-2">Trưởng Bộ Phận Tư Vấn</p>
              <p className="text-sm text-gray-600">
                Với sự tinh tế và am hiểu sâu sắc về váy cưới, chị Hồng luôn giúp các cô dâu tìm được chiếc váy phù hợp nhất.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://picsum.photos/id/1004/300/300" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-sm mb-2">Phạm Văn Tuấn</h3>
              <p className="text-wedding-gold mb-2">Quản Lý Sản Xuất</p>
              <p className="text-sm text-gray-600">
                Anh Tuấn đảm bảo mỗi chiếc váy cưới đều được sản xuất với chất lượng tốt nhất và đúng tiến độ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Studio Section */}
      <section className="section-padding bg-wedding-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Không Gian Studio</h2>
            <p className="body-md max-w-3xl mx-auto text-gray-700">
              Khám phá không gian sang trọng và tinh tế của NEU Wedding Store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img 
              src="https://picsum.photos/id/1421/600/400" 
              alt="Studio Space" 
              className="w-full h-64 object-cover rounded-sm"
            />
            <img 
              src="https://picsum.photos/id/1422/600/400" 
              alt="Studio Space" 
              className="w-full h-64 object-cover rounded-sm"
            />
            <img 
              src="https://picsum.photos/id/1423/600/400" 
              alt="Studio Space" 
              className="w-full h-64 object-cover rounded-sm"
            />
            <img 
              src="https://picsum.photos/id/1424/600/400" 
              alt="Studio Space" an
              className="w-full h-64 object-cover rounded-sm"
            />
            <img 
              src="https://picsum.photos/id/1425/600/400" 
              alt="Studio Space" 
              className="w-full h-64 object-cover rounded-sm"
            />
            <img 
              src="https://picsum.photos/id/1426/600/400" 
              alt="Studio Space" 
              className="w-full h-64 object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-wedding-gold text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Hãy Đến Và Trải Nghiệm</h2>
          <p className="body-md mb-8 max-w-3xl mx-auto">
            Đặt lịch hẹn ngay hôm nay để được tư vấn cá nhân và khám phá không gian studio của chúng tôi.
          </p>
          <Link to="/contact" className="bg-white text-wedding-gold px-6 py-3 rounded-sm hover:bg-opacity-90 transition-opacity">
            Đặt Lịch Hẹn
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
