import React from 'react';
import { Screen } from '../types';

interface ScreenProps {
  setScreen: (screen: Screen) => void;
}

export const SellFlowScreen: React.FC<ScreenProps> = () => {
  return (
    <div className="flex-1 flex justify-center py-10 px-4 sm:px-6 lg:px-8 bg-background animate-fade-in">
        <div className="w-full max-w-5xl flex flex-col gap-8">
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="font-display text-4xl font-bold text-white mb-2">Đăng bán sản phẩm</h1>
                    <p className="text-secondary font-body">Điền thông tin chi tiết để nhận báo giá chính xác từ chuyên gia.</p>
                </div>
                {/* Stepper */}
                <div className="flex items-center w-full justify-between relative font-body">
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface -z-10"></div>
                    <div className="flex flex-col items-center gap-2 bg-background px-2">
                        <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm"><span className="material-symbols-outlined text-sm">check</span></div>
                        <span className="text-primary text-xs font-bold uppercase tracking-wide">Danh mục</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-background px-2">
                        <div className="size-8 rounded-full bg-white text-background ring-4 ring-primary/20 flex items-center justify-center font-bold text-sm">2</div>
                        <span className="text-white text-xs font-bold uppercase tracking-wide">Chi tiết & Ảnh</span>
                    </div>
                    {/* ... other steps */}
                </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                    <span className="material-symbols-outlined text-primary">feed</span>
                    <h3 className="text-lg font-display font-bold text-white">Thông tin cơ bản</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-white">Thương hiệu (Brand) <span className="text-primary">*</span></span>
                        <div className="relative">
                            <select className="w-full h-12 bg-[#23211f] border border-border rounded-lg px-4 text-white focus:ring-1 focus:ring-primary focus:border-primary appearance-none cursor-pointer">
                                <option>Hermès</option>
                                <option>Chanel</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">expand_more</span>
                        </div>
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-white">Tên sản phẩm <span className="text-primary">*</span></span>
                        <input className="w-full h-12 bg-[#23211f] border border-border rounded-lg px-4 text-white focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Ví dụ: Birkin 25" type="text"/>
                    </label>
                </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
                 <div className="flex items-center justify-between border-b border-border pb-4 z-10">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">photo_camera</span>
                        <h3 className="text-lg font-display font-bold text-white">Hình ảnh chi tiết</h3>
                    </div>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/20 font-body">Mẹo: Ảnh sáng rõ giúp bán nhanh hơn 30%</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 z-10 font-body">
                    <div className="aspect-square border-2 border-dashed border-border hover:border-primary hover:bg-white/5 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all group">
                        <span className="material-symbols-outlined text-3xl text-secondary mb-2 group-hover:text-white transition-colors">add_a_photo</span>
                        <span className="text-xs font-medium text-secondary group-hover:text-white">Mặt trước</span>
                    </div>
                    {/* ... other photo slots */}
                </div>
            </div>
        </div>
    </div>
  )
}

export const SupportScreen: React.FC = () => {
    return (
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 animate-fade-in bg-background">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white tracking-tight mb-2 font-display">Trung tâm Hỗ trợ</h2>
                        <p className="text-secondary text-sm max-w-xl font-body">Giải quyết khiếu nại, báo cáo hàng giả và hỗ trợ các vấn đề thanh toán.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body">
                    <a className="group relative bg-surface rounded-xl border border-border p-6 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">shopping_cart_checkout</span>
                            </div>
                        </div>
                        <h3 className="text-base font-bold text-white mb-1">Mua hàng & Thanh toán</h3>
                        <p className="text-xs text-secondary">Chính sách bảo vệ người mua 100%</p>
                    </a>
                    {/* ... more cards */}
                </div>

                <div className="bg-surface rounded-xl border border-border p-6">
                    <h3 className="text-lg font-bold text-white mb-6 font-display">Gửi khiếu nại mới</h3>
                    <form className="space-y-5 font-body">
                        <div>
                            <label className="block text-xs font-bold text-white mb-2">Loại yêu cầu <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <select className="w-full bg-[#121212] border border-border rounded-md text-white text-sm py-3 px-4 focus:ring-1 focus:ring-primary focus:border-primary appearance-none">
                                    <option>Khiếu nại về đơn hàng</option>
                                    <option>Báo cáo hàng giả</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-sm">expand_more</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-white mb-2">Chi tiết vấn đề <span className="text-red-500">*</span></label>
                            <textarea className="w-full bg-[#121212] border border-border rounded-md text-white text-sm py-3 px-4 focus:ring-1 focus:ring-primary focus:border-primary min-h-[120px] resize-none" placeholder="Vui lòng mô tả chi tiết vấn đề..."></textarea>
                        </div>
                        <button className="bg-primary hover:bg-primary-hover text-black font-bold py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2">
                            <span>Gửi yêu cầu</span>
                            <span className="material-symbols-outlined text-sm">send</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
