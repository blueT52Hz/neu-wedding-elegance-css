
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams<{id: string}>();
  const [mainImage, setMainImage] = useState(0);
  
  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id || "1"),
    name: "Váy Cưới Luxury Pearl",
    price: "40.000.000 ₫",
    description: "Váy cưới đẳng cấp với chất liệu ren cao cấp nhập khẩu từ Pháp, đính kết hạt ngọc trai và pha lê Swarovski tỉ mỉ. Thiết kế váy xòe cổ điển, phần thân trên ôm sát tôn dáng, tay áo dài thanh lịch. Đuôi váy dài 1m, tạo vẻ sang trọng và quý phái cho cô dâu.",
    category: "Váy Xòe",
    style: "Cổ điển",
    material: "Ren cao cấp",
    size: "XS-XXL (May đo theo số đo)",
    images: [
      "https://picsum.photos/id/371/800/1200",
      "https://picsum.photos/id/372/800/1200",
      "https://picsum.photos/id/373/800/1200",
      "https://picsum.photos/id/374/800/1200"
    ],
    features: [
      "Chất liệu ren Pháp cao cấp",
      "Đính kết ngọc trai và pha lê Swarovski",
      "Thiết kế cổ thuyền thanh lịch",
      "Tay áo dài tinh tế",
      "Đuôi váy 1m sang trọng",
      "Lớp lót satin mềm mại"
    ],
    relatedProducts: [
      {
        id: 6,
        name: "Váy Cưới Vintage Lace",
        image: "https://picsum.photos/id/366/600/800",
        price: "32.000.000 ₫",
        category: "Váy Xòe"
      },
      {
        id: 9,
        name: "Váy Cưới Fairy Tale",
        image: "https://picsum.photos/id/369/600/800",
        price: "38.000.000 ₫",
        category: "Váy Xòe"
      },
      {
        id: 4,
        name: "Váy Cưới Công Chúa Royal",
        image: "https://picsum.photos/id/223/600/800",
        price: "35.000.000 ₫",
        category: "Váy Xòe"
      }
    ]
  };

  const sizeChart = [
    { size: "XS", bust: "80cm", waist: "60cm", hip: "86cm" },
    { size: "S", bust: "84cm", waist: "64cm", hip: "90cm" },
    { size: "M", bust: "88cm", waist: "68cm", hip: "94cm" },
    { size: "L", bust: "92cm", waist: "72cm", hip: "98cm" },
    { size: "XL", bust: "96cm", waist: "76cm", hip: "102cm" },
    { size: "XXL", bust: "100cm", waist: "80cm", hip: "106cm" }
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container-custom py-4">
        <div className="text-sm">
          <Link to="/" className="text-gray-500 hover:text-wedding-gold">Trang Chủ</Link> / 
          <Link to="/products" className="text-gray-500 hover:text-wedding-gold"> Sản Phẩm</Link> / 
          <span className="text-wedding-gold"> {product.name}</span>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="section-padding bg-white pt-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="lg:w-1/2">
              <div className="mb-4 overflow-hidden rounded-sm">
                <img 
                  src={product.images[mainImage]} 
                  alt={product.name} 
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`overflow-hidden rounded-sm cursor-pointer border-2 ${mainImage === index ? 'border-wedding-gold' : 'border-transparent'}`}
                    onClick={() => setMainImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${index + 1}`} 
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:w-1/2">
              <h1 className="heading-lg mb-4">{product.name}</h1>
              <p className="text-2xl text-wedding-gold font-serif mb-6">{product.price}</p>
              
              <div className="mb-6">
                <p className="body-md text-gray-700 mb-6">{product.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Kiểu Dáng</span>
                    <span className="body-md">{product.category}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Phong Cách</span>
                    <span className="body-md">{product.style}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Chất Liệu</span>
                    <span className="body-md">{product.material}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Kích Thước</span>
                    <span className="body-md">{product.size}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="heading-sm mb-4">Đặc Điểm Nổi Bật</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-wedding-gold mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact" className="btn-primary">Đặt Lịch Hẹn Thử Váy</Link>
                <button className="btn-secondary">Thêm vào Wishlist</button>
              </div>
              
              <div className="flex space-x-4 mb-8">
                <span className="text-sm font-medium">Chia sẻ:</span>
                <a href="#" className="text-gray-500 hover:text-wedding-gold">Facebook</a>
                <a href="#" className="text-gray-500 hover:text-wedding-gold">Instagram</a>
                <a href="#" className="text-gray-500 hover:text-wedding-gold">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Info Section */}
      <section className="py-12 bg-wedding-cream">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="heading-lg mb-6 text-center">Thông Tin Chi Tiết</h2>
            <div className="bg-white p-8 rounded-sm shadow-sm">
              <div className="prose prose-sm max-w-none">
                <h3 className="heading-sm mb-4">Mô Tả Sản Phẩm</h3>
                <p className="mb-4">
                  Váy cưới Luxury Pearl là một trong những thiết kế cao cấp nhất của NEU Wedding Store, được thiết kế dành riêng cho những cô dâu yêu thích vẻ đẹp cổ điển và sang trọng.
                </p>
                <p className="mb-4">
                  Với phần thân trên ôm sát, chiếc váy tôn lên đường cong quyến rũ của cô dâu, trong khi phần váy xòe rộng tạo nên vẻ đẹp quý phái và lộng lẫy. Tay áo dài được thiết kế tinh tế với chất liệu ren trong suốt, vừa kín đáo vừa gợi cảm.
                </p>
                <p>
                  Điểm nhấn của chiếc váy chính là những chi tiết đính kết tỉ mỉ với hạt ngọc trai và pha lê Swarovski, tạo nên vẻ đẹp lấp lánh cho cô dâu trong ngày trọng đại. Đuôi váy dài 1m giúp cô dâu thêm phần duyên dáng khi di chuyển.
                </p>
                
                <h3 className="heading-sm mt-8 mb-4">Chất Liệu</h3>
                <p>
                  Váy cưới Luxury Pearl sử dụng chất liệu ren Pháp cao cấp được nhập khẩu trực tiếp, kết hợp với lớp lót satin mềm mại, tạo cảm giác thoải mái cho người mặc. Các đường may tỉ mỉ và tinh tế đảm bảo chiếc váy có độ bền cao và form dáng hoàn hảo.
                </p>
                
                <h3 className="heading-sm mt-8 mb-4">Bảng Size Chuẩn</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-wedding-light-gold">
                        <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Vòng Ngực</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Vòng Eo</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Vòng Hông</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart.map((size, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-300 px-4 py-2">{size.size}</td>
                          <td className="border border-gray-300 px-4 py-2">{size.bust}</td>
                          <td className="border border-gray-300 px-4 py-2">{size.waist}</td>
                          <td className="border border-gray-300 px-4 py-2">{size.hip}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  *Lưu ý: NEU Wedding Store cung cấp dịch vụ may đo theo số đo của khách hàng để đảm bảo chiếc váy vừa vặn hoàn hảo.
                </p>
                
                <h3 className="heading-sm mt-8 mb-4">Hướng Dẫn Bảo Quản</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Giữ váy trong túi bảo quản chuyên dụng ở nơi khô ráo, thoáng mát.</li>
                  <li>Tránh ánh nắng mặt trời trực tiếp để giữ màu sắc váy.</li>
                  <li>Không tự giặt váy cưới, hãy sử dụng dịch vụ giặt khô chuyên nghiệp.</li>
                  <li>Tránh để váy tiếp xúc với nước, nước hoa, mỹ phẩm hoặc các chất có thể gây ố vàng.</li>
                  <li>Nếu cần bảo quản lâu dài, nên mang váy đến dịch vụ bảo quản chuyên nghiệp.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Sản Phẩm Tương Tự</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative overflow-hidden">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-serif">
                      <Link to={`/products/${relatedProduct.id}`} className="link-hover">
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">{relatedProduct.category}</p>
                  </div>
                  <p className="text-sm font-medium text-wedding-gold">{relatedProduct.price}</p>
                </div>
                <div className="absolute top-0 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-[-20px] group-hover:translate-y-2">
                  <Link to={`/products/${relatedProduct.id}`} className="bg-white px-4 py-2 text-xs uppercase tracking-wider shadow-md">
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
