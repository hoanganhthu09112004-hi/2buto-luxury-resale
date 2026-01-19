import React from 'react';
import { Screen } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: '01', value: 30000000 },
  { name: '05', value: 45000000 },
  { name: '10', value: 48000000 },
  { name: '15', value: 60000000 },
  { name: '20', value: 68000000 },
  { name: '25', value: 70000000 },
  { name: '30', value: 85000000 },
];

export const DashboardSellerScreen: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-8 animate-fade-in bg-background">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight font-display">Ví người bán</h1>
            <p className="text-secondary font-light font-body text-sm">Quản lý dòng tiền, rút tiền và theo dõi doanh thu.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border hover:bg-surface-highlight text-white text-sm font-medium transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span> Xuất báo cáo
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-gray-200 text-black text-sm font-bold border border-transparent transition-all shadow-lg shadow-white/5">
              <span className="material-symbols-outlined text-[18px]">account_balance</span> Tài khoản ngân hàng
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Balance Card */}
          <div className="col-span-1 flex flex-col justify-between rounded-xl bg-surface border border-border p-6 hover:border-white/10 transition-colors shadow-sm">
            <div className="flex flex-col h-full justify-between gap-8">
              <div>
                <p className="text-secondary text-xs font-semibold uppercase tracking-widest font-body">Số dư khả dụng</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <h3 className="text-4xl font-bold text-white tracking-tight font-display">45.200.000</h3>
                  <span className="text-primary font-medium text-xl">₫</span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black h-11 rounded-lg font-bold text-sm shadow-sm transition-all">
                <span className="material-symbols-outlined text-[20px]">payments</span> Rút tiền về ngân hàng
              </button>
            </div>
          </div>

          {/* Pending Card */}
          <div className="col-span-1 flex flex-col rounded-xl bg-surface border border-border p-6 hover:border-white/10 transition-colors shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-secondary text-sm font-medium mb-1 font-body">Tiền đang chờ duyệt (Ký quỹ)</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight font-display">12.500.000</h3>
                  <span className="text-secondary font-medium">₫</span>
                </div>
              </div>
              <div className="size-10 rounded-full bg-black border border-border flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">hourglass_top</span>
              </div>
            </div>
            <div className="mt-6 space-y-2 font-body">
              <div className="flex items-center justify-between text-xs p-3 rounded bg-black/50 border border-border">
                <span className="text-white font-medium">Hermès Birkin 25</span>
                <span className="text-secondary font-mono">10.000.000 ₫</span>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-2 border-t border-border/50">
                <span className="material-symbols-outlined text-secondary text-[14px]">info</span>
                <p className="text-[11px] text-secondary">Tiền sẽ về ví sau 3 ngày kể từ khi khách nhận hàng.</p>
              </div>
            </div>
          </div>

          {/* Chart Preview Card */}
          <div className="col-span-1 flex flex-col rounded-xl bg-surface border border-border p-6 hover:border-white/10 transition-colors shadow-sm">
            <p className="text-secondary text-sm font-medium mb-1 font-body">Tổng thu nhập tháng này</p>
            <div className="flex items-end gap-3 mb-4">
              <div className="flex items-baseline gap-1 mt-2">
                <h3 className="text-2xl font-bold text-white tracking-tight font-display">57.700.000</h3>
                <span className="text-secondary font-medium">₫</span>
              </div>
              <span className="inline-flex items-center gap-0.5 text-green-400 text-xs font-bold mb-1 font-body">
                <span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
              </span>
            </div>
            <div className="h-24 w-full mt-auto">
               <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a38662" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#a38662" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#a38662" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Big Chart */}
        <div className="rounded-xl bg-surface border border-border p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white font-display">Phân tích doanh thu</h3>
              <p className="text-sm text-secondary font-body">Theo dõi hiệu suất bán hàng theo thời gian thực</p>
            </div>
            <div className="flex bg-black p-1 rounded-lg border border-border">
              {['Tuần', 'Tháng', 'Năm'].map((t, i) => (
                <button key={t} className={`px-4 py-1.5 text-xs font-bold rounded ${i === 1 ? 'bg-surface border border-white/10 text-white' : 'text-secondary hover:text-white'} transition-colors font-body`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValueBig" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a38662" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#a38662" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000000}m`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1E1E1E', borderColor: '#333', borderRadius: '8px', color: '#fff' }} 
                  itemStyle={{ color: '#a38662' }}
                  formatter={(value: number) => [`${value.toLocaleString()} ₫`, 'Doanh thu']}
                />
                <Area type="monotone" dataKey="value" stroke="#a38662" fillOpacity={1} fill="url(#colorValueBig)" strokeWidth={2} activeDot={{ r: 6, fill: '#fff', stroke: '#a38662' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DashboardUserScreen: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-background animate-fade-in">
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
            <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 rounded border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase font-body">VIP Member</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-medium leading-tight">
                Xin chào, <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Nguyễn Văn A.</span>
            </h2>
            <p className="text-secondary mt-2 text-sm md:text-base font-light font-body">Chào mừng trở lại. Bạn có <span className="text-white font-medium">3 thông báo mới</span>.</p>
            </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative bg-surface rounded-xl p-6 border border-border hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-blue-400">local_shipping</span>
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
                    <p className="text-secondary text-sm font-medium uppercase tracking-wide font-body">Đơn hàng của tôi</p>
                    <div className="flex items-baseline gap-1 mt-4">
                    <span className="font-display text-3xl font-bold text-white tracking-tight">2</span>
                    <span className="text-sm font-normal text-secondary ml-1 font-body">đơn</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-xs text-blue-400 font-body">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>1 đơn đang vận chuyển</span>
                    </div>
                </div>
            </div>
            {/* More cards... similar structure */}
             <div className="group relative bg-surface rounded-xl p-6 border border-border hover:border-white transition-all duration-300">
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
                    <p className="text-secondary text-sm font-medium uppercase tracking-wide font-body">Đang đấu giá</p>
                    <div className="mt-4">
                        <span className="font-display text-3xl font-bold text-white tracking-tight">3</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-xs text-amber-400 font-body">
                        <span className="material-symbols-outlined text-sm">timer</span>
                        <span>1 phiên kết thúc trong 3h</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h3 className="font-display text-xl font-bold text-white mb-6">Hoạt động mua sắm</h3>
            <div className="bg-surface rounded-2xl border border-border divide-y divide-border overflow-hidden">
                <div className="p-5 hover:bg-white/[0.02] transition-colors flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                    <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-border bg-black">
                        <img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=200&auto=format&fit=crop"/>
                    </div>
                    <div className="flex-1 min-w-0 font-body">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wide">Thắng đấu giá</span>
                        </div>
                        <p className="text-white text-base font-medium truncate">Bạn đã thắng đấu giá <span className="font-bold">Túi Chanel Classic Flap</span></p>
                        <p className="text-secondary text-sm mt-0.5">Giá cuối: 85.000.000 ₫ • Vui lòng thanh toán trước 24h</p>
                    </div>
                    <button className="shrink-0 w-full sm:w-auto px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 font-body">
                        Thanh toán ngay
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}
