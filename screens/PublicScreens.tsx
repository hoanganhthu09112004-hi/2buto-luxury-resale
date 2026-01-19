import React from 'react';
import { Screen } from '../types';

interface ScreenProps {
  setScreen: (screen: Screen) => void;
}

export const HomeScreen: React.FC<ScreenProps> = ({ setScreen }) => {
  return (
    <main className="min-h-screen flex flex-col animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-background">
        {/* Background Base with Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-28 pb-12 lg:py-0 min-h-[800px]">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 pt-10 lg:pt-0">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-16 bg-primary"></span>
              <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold">Tiêu điểm tháng 10</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.05] tracking-tight drop-shadow-2xl">
              Tương Lai Của <br/>
              <span className="italic font-normal text-white/90">Sự Sang Trọng Bền Vững</span> <span className="text-primary font-light">2024</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-body font-light max-w-2xl leading-relaxed">
              Một cái nhìn sâu sắc về việc đầu tư vào các món đồ vintage cao cấp và cách thị trường resale đang định hình lại ngành thời trang toàn cầu.
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
              <button 
                onClick={() => setScreen(Screen.SHOP)}
                className="group relative px-8 py-3.5 bg-primary text-white overflow-hidden transition-all duration-300 hover:bg-primary-hover shadow-lg shadow-primary/25"
              >
                <span className="relative z-10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest font-body">
                  Khám phá ngay
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </button>
              <button className="px-8 py-3.5 border border-white/20 text-white hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-widest font-body">
                Xem Lookbook
              </button>
            </div>
          </div>

          {/* Right Content - Floating Images */}
          <div className="hidden lg:block lg:col-span-5 relative h-[600px] w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
              
              {/* Image 1 - Back */}
              <div className="absolute top-10 right-0 w-[320px] h-[450px] rounded-lg overflow-hidden border border-white/10 shadow-2xl transform rotate-6 hover:rotate-2 transition-all duration-700 ease-out z-10 group bg-surface">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000" alt="Luxury Bag" />
              </div>

              {/* Image 2 - Front */}
              <div className="absolute bottom-20 left-10 w-[300px] h-[400px] rounded-lg overflow-hidden border border-white/10 shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-700 ease-out z-20 group bg-surface">
                  <img src="https://images.unsplash.com/photo-1617317376997-8748e6862c01?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000" alt="Luxury Watch" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">New Arrival</p>
                      <p className="text-white text-sm font-medium">Bộ sưu tập Đồng hồ & Trang sức</p>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-background border-b border-white/5 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <span className="material-symbols-outlined text-6xl text-primary/20 mb-8">format_quote</span>
          <h2 className="font-display text-3xl md:text-5xl text-white font-medium leading-tight italic">
            “Thời trang không chỉ là vẻ đẹp, nó là thái độ sống. <br className="hidden lg:block"/>Việc chọn lựa một món đồ cũ là cách ta tôn trọng quá khứ.”
          </h2>
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mb-2"></div>
            <p className="text-secondary text-xs font-body font-bold uppercase tracking-[0.2em]">Fashion Icon, Paris Fashion Week</p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block font-body">Bộ sưu tập</span>
              <h3 className="font-display text-3xl md:text-4xl text-white font-medium">Khám Phá Theo Danh Mục</h3>
           </div>
           <button onClick={() => setScreen(Screen.SHOP)} className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider font-body">
              Xem tất cả <span className="material-symbols-outlined">arrow_forward</span>
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] md:h-[500px]">
           {/* Item 1 - Large vertical */}
           <div onClick={() => setScreen(Screen.SHOP)} className="group relative h-full w-full overflow-hidden rounded-sm cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop")'}}></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-8 left-8">
                 <h4 className="font-display text-3xl text-white mb-2">Túi Xách</h4>
                 <span className="text-white/80 text-sm font-light border-b border-white/50 pb-1 font-body">Khám phá (124)</span>
              </div>
           </div>
           
           {/* Item 2 - Grid column */}
           <div className="md:col-span-2 grid grid-rows-2 gap-6">
               <div onClick={() => setScreen(Screen.SHOP)} className="group relative h-full w-full overflow-hidden rounded-sm cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1617317376997-8748e6862c01?q=80&w=1000&auto=format&fit=crop")'}}></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-8 left-8">
                     <h4 className="font-display text-3xl text-white mb-2">Đồng Hồ</h4>
                     <span className="text-white/80 text-sm font-light border-b border-white/50 pb-1 font-body">Khám phá (48)</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-6">
                    <div onClick={() => setScreen(Screen.SHOP)} className="group relative h-full w-full overflow-hidden rounded-sm cursor-pointer">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop")'}}></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                      <div className="absolute bottom-6 left-6">
                         <h4 className="font-display text-2xl text-white mb-1">Trang Sức</h4>
                         <span className="text-white/80 text-xs font-light font-body">64 sản phẩm</span>
                      </div>
                   </div>
                   <div onClick={() => setScreen(Screen.SHOP)} className="group relative h-full w-full overflow-hidden rounded-sm cursor-pointer">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=1000&auto=format&fit=crop")'}}></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                      <div className="absolute bottom-6 left-6">
                         <h4 className="font-display text-2xl text-white mb-1">Giày</h4>
                         <span className="text-white/80 text-xs font-light font-body">82 sản phẩm</span>
                      </div>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* Editor's Pick Banner */}
      <section className="relative py-32 bg-surface overflow-hidden">
          <div className="absolute inset-0 opacity-40">
             <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Fashion runway" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
             <div className="max-w-xl">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block font-body">Editor's Pick</span>
                <h2 className="font-display text-5xl text-white font-medium mb-6 leading-tight">Biểu tượng của <br/>Sự Thanh Lịch</h2>
                <p className="text-secondary text-lg font-light mb-8 leading-relaxed font-body">
                   Bộ sưu tập Thu-Đông 2024 tập hợp những thiết kế kinh điển nhất từ Chanel và Dior. Được tuyển chọn kỹ lưỡng để đảm bảo chất lượng hoàn hảo.
                </p>
                <button onClick={() => setScreen(Screen.SHOP)} className="bg-white text-background px-8 py-3.5 font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors font-body shadow-lg">
                   Mua ngay
                </button>
             </div>
          </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-[#0c120f] border-t border-white/5 relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #a38662 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-xl mx-auto px-6 text-center relative z-10">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block font-body">The VIP List</span>
          <h3 className="font-display text-4xl text-white font-medium mb-6">Gia Nhập Cộng Đồng Tinh Hoa</h3>
          <p className="text-secondary mb-10 font-body font-light text-sm leading-relaxed">
            Nhận thông tin sớm nhất về các bộ sưu tập vintage hiếm, hướng dẫn xác thực độc quyền và lời mời tham dự sự kiện kín.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Địa chỉ email của bạn" className="flex-1 w-full bg-surface border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-sm placeholder:text-secondary/50 font-body text-sm" />
            <button className="bg-primary text-white px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-primary-hover transition-colors rounded-sm shadow-lg shadow-primary/20 font-body">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export const AboutScreen: React.FC<ScreenProps> = () => {
  return (
    <div className="animate-fade-in pb-20">
      <section className="w-full relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2671&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col gap-8 items-center">
          <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-primary tracking-[0.3em] uppercase text-xs font-bold backdrop-blur-sm">Est. 2024</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-[1.05] tracking-tight">
            Giá trị <br/> <span className="italic font-light text-primary">Trường tồn</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary font-light max-w-2xl mt-2 leading-relaxed tracking-wide">
            "Chúng tôi không bán quần áo cũ. Chúng tôi trao truyền những câu chuyện."
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1440px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary"></div>
              <h2 className="text-primary font-bold text-xs tracking-[0.2em] uppercase">Triết lý (Philosophy)</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-medium leading-[1.2] text-white">
              Sự sang trọng <br/>của vòng tuần hoàn
            </h3>
            <div className="space-y-6 text-secondary font-light leading-relaxed text-base md:text-lg">
              <p>
                Tại 2ButO, chúng tôi tin rằng vẻ đẹp thực sự không nằm ở sự mới mẻ, mà ở sự bền bỉ qua thời gian. Một chiếc túi Hermès 10 năm tuổi không chỉ là da thuộc, nó là chứng nhân của những buổi tiệc, những chuyến đi và phong cách sống thượng lưu.
              </p>
              <p>
                Chúng tôi cam kết kéo dài vòng đời của những kiệt tác thời trang, giảm thiểu rác thải và tôn vinh bàn tay của những nghệ nhân đã tạo ra chúng.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] w-full bg-surface-highlight rounded-sm overflow-hidden">
             <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop')` }} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export const AuthScreen: React.FC<ScreenProps> = ({ setScreen }) => {
  return (
    <div className="flex min-h-screen w-full animate-fade-in bg-background">
      <div className="hidden lg:flex w-1/2 relative bg-surface overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2669&auto=format&fit=crop')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
        <div className="relative z-10 flex flex-col justify-between p-16 w-full h-full">
          <div className="size-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
            <span className="font-display font-bold text-xl text-white">2B</span>
          </div>
          <div className="space-y-6 max-w-md">
            <h2 className="font-display text-4xl xl:text-5xl leading-tight font-medium text-white/95">
              Định nghĩa lại sự sang trọng.
            </h2>
            <p className="text-white/70 font-sans text-lg font-light leading-relaxed">
              Tham gia cộng đồng 2ButO để khám phá và sở hữu những món đồ hiệu độc bản từ những nhà sưu tập uy tín nhất Việt Nam.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col relative bg-background border-l border-border">
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-8 sm:px-12 md:px-24">
          <div className="w-full max-w-[420px] flex flex-col gap-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-display font-medium text-white">Đăng nhập</h1>
              <p className="text-secondary text-sm">Chào mừng trở lại! Vui lòng nhập thông tin của bạn.</p>
            </div>

            <div className="flex gap-4 p-1 bg-surface rounded-lg border border-border">
              <button className="flex-1 py-2 text-sm font-bold text-white bg-white/10 rounded-md shadow-sm">Người mua</button>
              <button className="flex-1 py-2 text-sm font-bold text-secondary hover:text-white transition-colors">Người bán</button>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setScreen(Screen.DASHBOARD_USER); }}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-wider">Email</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors">mail</span>
                  <input className="w-full h-12 pl-11 pr-4 bg-surface border border-border text-white rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-secondary/30" placeholder="name@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-secondary uppercase tracking-wider">Mật khẩu</label>
                  <a href="#" className="text-xs text-primary hover:underline">Quên mật khẩu?</a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors">lock</span>
                  <input className="w-full h-12 pl-11 pr-12 bg-surface border border-border text-white rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-secondary/30" placeholder="••••••••" type="password" />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-white">
                    <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                  </button>
                </div>
              </div>
              <button className="w-full h-12 mt-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]">
                Đăng nhập ngay
              </button>
            </form>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink-0 mx-4 text-secondary text-xs uppercase tracking-wider">Hoặc</span>
              <div className="flex-grow border-t border-border"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 h-12 bg-surface border border-border hover:bg-white/5 rounded-lg transition-all text-white text-sm font-medium">
                <span className="material-symbols-outlined text-xl">g_mobiledata</span> Google
              </button>
              <button className="flex items-center justify-center gap-2 h-12 bg-surface border border-border hover:bg-white/5 rounded-lg transition-all text-white text-sm font-medium">
                <span className="material-symbols-outlined text-xl">facebook</span> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
