import React from 'react';
import { Screen, Product } from '../types';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface ScreenProps {
  setScreen: (screen: Screen) => void;
}

// Mock Data
const PRODUCTS: Product[] = [
  { id: '1', name: 'Classic Double Flap Medium', brand: 'Chanel', price: 235000000, originalPrice: 250000000, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop', condition: 'Like New' },
  { id: '2', name: 'Lady Dior My ABCDior', brand: 'Dior', price: 145000000, image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop', condition: 'New Arrival' },
  { id: '3', name: 'Birkin 30 Togo Gold', brand: 'Hermès', price: 480000000, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop', condition: 'Like New' },
  { id: '4', name: 'Ace Embroidered Sneaker', brand: 'Gucci', price: 12500000, image: 'https://images.unsplash.com/photo-1560769629-975e13f0c470?q=80&w=800&auto=format&fit=crop', condition: 'Good' },
  { id: '5', name: 'Monogram Speedy 30', brand: 'Louis Vuitton', price: 28000000, image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=800&auto=format&fit=crop', condition: 'Vintage' },
  { id: '6', name: 'Loulou Small Bag', brand: 'Saint Laurent', price: 58900000, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop', condition: 'Like New' },
];

export const ShopScreen: React.FC<ScreenProps> = ({ setScreen }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-border pb-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">
            Bộ sưu tập <span className="text-primary italic">Tuyển chọn</span>
          </h2>
          <p className="text-secondary text-lg font-light font-body max-w-xl leading-relaxed">
            Khám phá những món đồ hiệu authentic đã qua sử dụng, được kiểm định nghiêm ngặt bởi chuyên gia của 2ButO.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-8 font-body">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-medium text-white">Thương hiệu</h3>
            <div className="space-y-2 pl-2 border-l border-border">
              {['Chanel (58)', 'Dior (42)', 'Gucci (35)', 'Hermès (21)', 'Louis Vuitton (64)'].map((brand, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="rounded border-border bg-surface text-primary focus:ring-1 focus:ring-primary" />
                  <span className="text-sm text-secondary group-hover:text-white transition-colors">{brand}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-4 pt-4 border-t border-border">
            <h3 className="font-display text-lg font-medium text-white">Mức giá</h3>
            <input type="range" className="w-full h-1 bg-surface rounded-lg appearance-none cursor-pointer accent-primary" />
            <div className="flex justify-between items-center text-sm font-body">
              <div className="bg-surface px-3 py-1.5 rounded border border-border text-secondary">0 ₫</div>
              <span className="text-border">-</span>
              <div className="bg-surface px-3 py-1.5 rounded border border-border text-secondary">500tr+ ₫</div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-secondary text-sm font-body"><span className="text-white font-medium">{PRODUCTS.length}</span> sản phẩm</p>
            <div className="relative">
              <select className="appearance-none bg-surface border border-border text-white text-sm pl-4 pr-10 py-2 rounded-lg focus:outline-none focus:border-primary cursor-pointer font-body">
                <option>Mới nhất</option>
                <option>Giá: Thấp đến Cao</option>
                <option>Giá: Cao đến Thấp</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[18px]">expand_more</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                onClick={() => setScreen(Screen.PRODUCT_DETAIL)}
                className="group relative flex flex-col bg-card-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100 relative">
                  <div className={`absolute top-3 left-3 z-10 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded font-body ${product.condition === 'New Arrival' ? 'bg-primary' : 'bg-background'}`}>
                    {product.condition}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase mb-1 font-body">{product.brand}</p>
                    <h3 className="font-display text-lg text-background font-medium leading-snug group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-3">
                    <div className="flex flex-col">
                      {product.originalPrice && <span className="text-xs text-gray-400 line-through font-body">{product.originalPrice.toLocaleString()} ₫</span>}
                      <span className="text-primary font-bold font-body text-lg">{product.price.toLocaleString()} ₫</span>
                    </div>
                    <button className="text-background hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductDetailScreen: React.FC<ScreenProps> = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 animate-fade-in">
      <nav className="flex mb-8 text-xs text-secondary tracking-wide uppercase font-body">
        <span className="hover:text-primary cursor-pointer">Trang chủ</span>
        <span className="mx-2">/</span>
        <span className="hover:text-primary cursor-pointer">Túi xách</span>
        <span className="mx-2">/</span>
        <span className="text-white">Hermès Birkin</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 pb-16 border-b border-border">
        {/* Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="relative w-full aspect-[4/3] bg-surface rounded-xl overflow-hidden group shadow-2xl">
            <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-white flex items-center gap-1 border border-white/10">
              <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
              Authenticity Verified
            </div>
            <img 
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop" 
              alt="Hermes Birkin" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`aspect-square rounded-lg border-2 ${i === 1 ? 'border-primary' : 'border-transparent'} overflow-hidden cursor-pointer bg-surface`}>
                <img src={`https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=200&auto=format&fit=crop&${i}`} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
            <div className="aspect-square rounded-lg border border-transparent bg-surface flex items-center justify-center cursor-pointer text-secondary hover:text-white hover:bg-surface-highlight transition-colors">
               <span className="material-symbols-outlined">play_circle</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="border-b border-border pb-6 mb-6">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2 font-display">Hermès</h2>
            <h1 className="text-3xl lg:text-4xl font-display font-medium text-white leading-tight mb-4">Birkin 30 Togo Gold Hardware</h1>
            <div className="flex items-center gap-4 text-sm font-body">
              <span className="px-2 py-1 bg-white/10 rounded text-white font-medium border border-white/10">Rank A (Rất mới)</span>
              <div className="h-4 w-px bg-border"></div>
              <span className="text-secondary flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">visibility</span> 12 đang xem</span>
            </div>
          </div>

          <div className="bg-surface rounded-xl p-6 mb-8 border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 relative z-10">
              <div>
                <p className="text-secondary text-xs font-medium uppercase tracking-wide mb-1 font-body">Giá bán thấp nhất</p>
                <div className="text-3xl font-display text-white flex items-start gap-1">
                  350.000.000 <span className="text-lg mt-1 text-secondary">₫</span>
                </div>
              </div>
              <div className="sm:text-right">
                <p className="text-secondary text-xs font-medium uppercase tracking-wide mb-1 font-body">Giá thầu cao nhất</p>
                <div className="text-xl font-display text-primary/90">342.000.000 ₫</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 relative z-10">
              <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group font-body">
                <span>Mua Ngay</span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="w-full bg-transparent border border-primary/50 hover:border-primary text-primary hover:bg-primary/5 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-body">
                  <span className="material-symbols-outlined text-[18px]">gavel</span>
                  Đặt Giá Thầu
                </button>
                <button className="w-full bg-surface-highlight hover:bg-white/10 text-white font-medium py-3 rounded-lg transition-colors text-sm font-body">
                  Tự động trả giá
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-display text-lg text-white mb-4 border-l-2 border-primary pl-3">Thông số kỹ thuật</h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 font-body text-sm">
              {[
                {k: 'Dòng sản phẩm', v: 'Birkin 30'},
                {k: 'Chất liệu', v: 'Da Togo'},
                {k: 'Màu sắc', v: 'Gold (Nâu vàng)'},
                {k: 'Phụ kiện', v: 'Fullbox, Bill'},
                {k: 'Năm sản xuất', v: '2022 (Stamp U)'},
                {k: 'Kích thước', v: '30 x 22 x 16 cm'}
              ].map((item, i) => (
                <div key={i} className="border-t border-border pt-3">
                  <p className="text-secondary text-xs mb-1">{item.k}</p>
                  <p className="text-white font-medium">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
