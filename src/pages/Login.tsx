
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Reset form data when switching between login and register
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login submitted:', { email: formData.email, password: formData.password });
      // In a real app, this would call an authentication API
      alert('Đăng nhập thành công!');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp!');
        return;
      }
      console.log('Register submitted:', formData);
      // In a real app, this would call a registration API
      alert('Đăng ký thành công! Vui lòng đăng nhập.');
      setIsLogin(true);
    }
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1045/2000/800" 
            alt="Đăng Nhập / Đăng Ký" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white">{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="bg-wedding-cream p-8 rounded-sm shadow-sm">
              {/* Form Tabs */}
              <div className="flex mb-8">
                <button 
                  className={`flex-1 py-2 text-center font-medium transition-colors ${isLogin ? 'border-b-2 border-wedding-gold text-wedding-gold' : 'text-gray-500 hover:text-wedding-gold'}`}
                  onClick={() => setIsLogin(true)}
                >
                  Đăng Nhập
                </button>
                <button 
                  className={`flex-1 py-2 text-center font-medium transition-colors ${!isLogin ? 'border-b-2 border-wedding-gold text-wedding-gold' : 'text-gray-500 hover:text-wedding-gold'}`}
                  onClick={() => setIsLogin(false)}
                >
                  Đăng Ký
                </button>
              </div>

              {/* Login Form */}
              {isLogin ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
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
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="password" className="block text-sm font-medium">Mật Khẩu *</label>
                      <a href="#" className="text-xs text-wedding-gold hover:underline">Quên mật khẩu?</a>
                    </div>
                    <input 
                      type="password" 
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary mb-4">Đăng Nhập</button>
                  <p className="text-sm text-center">
                    Chưa có tài khoản? 
                    <button 
                      type="button"
                      onClick={toggleForm}
                      className="ml-1 text-wedding-gold hover:underline"
                    >
                      Đăng ký ngay
                    </button>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
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
                  <div className="mb-4">
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
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium mb-2">Mật Khẩu *</label>
                    <input 
                      type="password" 
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Xác Nhận Mật Khẩu *</label>
                    <input 
                      type="password" 
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary mb-4">Đăng Ký</button>
                  <p className="text-sm text-center">
                    Đã có tài khoản? 
                    <button 
                      type="button"
                      onClick={toggleForm}
                      className="ml-1 text-wedding-gold hover:underline"
                    >
                      Đăng nhập
                    </button>
                  </p>
                </form>
              )}

              {/* Social Login */}
              <div className="mt-8">
                <div className="relative flex items-center justify-center">
                  <div className="border-t border-gray-300 absolute w-full"></div>
                  <span className="bg-wedding-cream px-4 relative text-sm text-gray-500">hoặc đăng nhập với</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-sm hover:bg-gray-50">
                    <span>Facebook</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-sm hover:bg-gray-50">
                    <span>Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
