
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  formattedPrice: string;
  quantity: number;
  size: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Váy Cưới Ren Princess",
      image: "https://picsum.photos/id/64/600/800",
      price: 25000000,
      formattedPrice: "25.000.000 ₫",
      quantity: 1,
      size: "M"
    },
    {
      id: 3,
      name: "Vương Miện Pha Lê Royal",
      image: "https://picsum.photos/id/65/600/800",
      price: 5000000,
      formattedPrice: "5.000.000 ₫",
      quantity: 1,
      size: "One Size"
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'WEDDING10') {
      setCouponApplied(true);
      setDiscount(0.1); // 10% discount
      alert('Mã giảm giá đã được áp dụng!');
    } else {
      setCouponApplied(false);
      setDiscount(0);
      alert('Mã giảm giá không hợp lệ hoặc đã hết hạn!');
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  // Format number to Vietnamese currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', { 
      style: 'currency', 
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1056/2000/800" 
            alt="Giỏ Hàng" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white">Giỏ Hàng</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <h2 className="heading-lg mb-6">Sản Phẩm Trong Giỏ Hàng</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left">Sản Phẩm</th>
                        <th className="px-4 py-3 text-center">Giá</th>
                        <th className="px-4 py-3 text-center">Số Lượng</th>
                        <th className="px-4 py-3 text-center">Thành Tiền</th>
                        <th className="px-4 py-3 text-center">Xóa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <td className="px-4 py-4">
                            <div className="flex items-center">
                              <div className="w-20 h-20 mr-4">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-500">Size: {item.size}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-center">{item.formattedPrice}</td>
                          <td className="px-4 py-4">
                            <div className="flex items-center justify-center">
                              <button 
                                className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <input 
                                type="number" 
                                value={item.quantity} 
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                className="w-12 h-8 border-t border-b border-gray-300 text-center"
                                min="1"
                              />
                              <button 
                                className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-center font-medium">
                            {formatCurrency(item.price * item.quantity)}
                          </td>
                          <td className="px-4 py-4 text-center">
                            <button 
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between mt-8">
                  <Link to="/products" className="btn-secondary">
                    Tiếp Tục Mua Sắm
                  </Link>
                  <button className="btn-secondary">
                    Cập Nhật Giỏ Hàng
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-1/3">
                <h2 className="heading-lg mb-6">Tổng Đơn Hàng</h2>
                <div className="bg-wedding-cream p-6 rounded-sm">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Tạm tính:</span>
                      <span className="font-medium">{formatCurrency(subtotal)}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Giảm giá (10%):</span>
                        <span>-{formatCurrency(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold border-t border-gray-300 pt-4">
                      <span>Tổng cộng:</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="mb-6">
                    <label htmlFor="coupon" className="block text-sm font-medium mb-2">Mã Giảm Giá</label>
                    <div className="flex">
                      <input 
                        type="text" 
                        id="coupon"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Nhập mã giảm giá"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                      />
                      <button 
                        className="ml-2 bg-gray-800 text-white px-4 py-2 rounded-sm hover:bg-gray-700"
                        onClick={handleApplyCoupon}
                      >
                        Áp Dụng
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">* Nhập mã "WEDDING10" để được giảm 10%</p>
                  </div>

                  <button className="w-full btn-primary mb-4">
                    Tiến Hành Thanh Toán
                  </button>

                  <div className="text-sm text-gray-600 space-y-2">
                    <p>Chúng tôi chấp nhận các phương thức thanh toán:</p>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 border border-gray-300 rounded-sm text-xs">Visa</span>
                      <span className="px-2 py-1 border border-gray-300 rounded-sm text-xs">MasterCard</span>
                      <span className="px-2 py-1 border border-gray-300 rounded-sm text-xs">Momo</span>
                      <span className="px-2 py-1 border border-gray-300 rounded-sm text-xs">Chuyển khoản</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="heading-lg mb-4">Giỏ Hàng Của Bạn Đang Trống</h2>
              <p className="body-md mb-8 max-w-2xl mx-auto text-gray-600">
                Hãy khám phá bộ sưu tập váy cưới tuyệt đẹp của chúng tôi và thêm sản phẩm vào giỏ hàng.
              </p>
              <Link to="/products" className="btn-primary">
                Mua Sắm Ngay
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center">Có Thể Bạn Cũng Thích</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100">
                <img 
                  src="https://picsum.photos/id/66/600/800" 
                  alt="Váy Cưới" 
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-serif">
                    <Link to="/products/5" className="link-hover">
                      Váy Cưới Bohemian Dream
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">Váy Suông</p>
                </div>
                <p className="text-sm font-medium text-wedding-gold">28.000.000 ₫</p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100">
                <img 
                  src="https://picsum.photos/id/67/600/800" 
                  alt="Váy Cưới" 
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-serif">
                    <Link to="/products/6" className="link-hover">
                      Váy Cưới Vintage Lace
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">Váy Xòe</p>
                </div>
                <p className="text-sm font-medium text-wedding-gold">32.000.000 ₫</p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100">
                <img 
                  src="https://picsum.photos/id/68/600/800" 
                  alt="Váy Cưới" 
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-serif">
                    <Link to="/products/7" className="link-hover">
                      Váy Cưới Modern Romance
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">Váy Đuôi Cá</p>
                </div>
                <p className="text-sm font-medium text-wedding-gold">27.000.000 ₫</p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100">
                <img 
                  src="https://picsum.photos/id/69/600/800" 
                  alt="Váy Cưới" 
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-serif">
                    <Link to="/products/8" className="link-hover">
                      Váy Cưới Simple Elegance
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">Váy Tối Giản</p>
                </div>
                <p className="text-sm font-medium text-wedding-gold">20.000.000 ₫</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
