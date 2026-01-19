import React from 'react';
import { Screen } from '../types';

interface HeaderProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, setScreen }) => {
  const isDashboard = [Screen.DASHBOARD_USER, Screen.DASHBOARD_SELLER, Screen.WALLET, Screen.SELL_FLOW, Screen.SUPPORT].includes(currentScreen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => setScreen(Screen.HOME)}
        >
          <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">diamond</span>
          <h1 className="font-display text-2xl font-bold tracking-widest text-white">2ButO</h1>
        </div>

        {!isDashboard && (
          <nav className="hidden lg:flex items-center gap-10">
            <button 
              onClick={() => setScreen(Screen.SHOP)}
              className={`text-xs font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors ${currentScreen === Screen.SHOP ? 'text-primary' : 'text-secondary'}`}
            >
              Mua hàng
            </button>
            <button 
              onClick={() => setScreen(Screen.SELL_FLOW)}
              className={`text-xs font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors ${currentScreen === Screen.SELL_FLOW ? 'text-primary' : 'text-secondary'}`}
            >
              Bán hàng
            </button>
            <button 
              onClick={() => setScreen(Screen.ABOUT)}
              className={`text-xs font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors ${currentScreen === Screen.ABOUT ? 'text-primary' : 'text-secondary'}`}
            >
              Câu chuyện
            </button>
            <button 
              onClick={() => setScreen(Screen.SUPPORT)}
              className={`text-xs font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors ${currentScreen === Screen.SUPPORT ? 'text-primary' : 'text-secondary'}`}
            >
              Hỗ trợ
            </button>
          </nav>
        )}

        <div className="flex items-center gap-4">
          {!isDashboard && (
            <div className="hidden md:flex items-center bg-surface border border-border rounded-full px-4 py-2 w-64 focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-secondary text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="bg-transparent border-none focus:outline-none text-sm text-white ml-2 w-full placeholder-secondary/50"
              />
            </div>
          )}
          
          <button 
            onClick={() => setScreen(Screen.AUTH)}
            className="p-2 text-secondary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">person</span>
          </button>
          
          <button 
            onClick={() => setScreen(Screen.DASHBOARD_USER)}
            className="p-2 text-secondary hover:text-white transition-colors relative"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>

          <button
             onClick={() => setScreen(Screen.DASHBOARD_SELLER)}
             className="hidden md:flex bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Seller Centre
          </button>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-2xl text-primary">diamond</span>
              <h4 className="text-white text-xl font-bold tracking-tight font-display">2ButO</h4>
            </div>
            <p className="text-secondary text-sm leading-relaxed font-body font-light">
              Nền tảng mua bán hàng hiệu vintage uy tín hàng đầu Việt Nam. Nơi giá trị thật được tôn vinh và phong cách được định hình.
            </p>
          </div>
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 font-body">Khám phá</h5>
            <ul className="space-y-4 font-body text-sm text-secondary">
              <li className="hover:text-primary cursor-pointer transition-colors">Mua hàng hiệu</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Bán ký gửi</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Authenticity Check</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Tạp chí</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 font-body">Hỗ trợ</h5>
            <ul className="space-y-4 font-body text-sm text-secondary">
              <li className="hover:text-primary cursor-pointer transition-colors">Trung tâm trợ giúp</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Chính sách bảo mật</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Điều khoản sử dụng</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 font-body">Kết nối</h5>
            <div className="flex gap-4">
              {['Fb', 'Ig', 'Tk'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-white hover:border-white hover:text-background transition-all duration-300">
                  <span className="text-xs font-bold font-body">{social}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-secondary/60 text-xs font-body tracking-wide">© 2024 2ButO Luxury Resale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
