import React, { useState } from 'react';
import { Header, Footer } from './components/Layout';
import { HomeScreen, AboutScreen, AuthScreen } from './screens/PublicScreens';
import { ShopScreen, ProductDetailScreen } from './screens/ShopScreens';
import { DashboardSellerScreen, DashboardUserScreen } from './screens/DashboardScreens';
import { SellFlowScreen, SupportScreen } from './screens/Operations.tsx';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setScreen] = useState<Screen>(Screen.HOME);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <HomeScreen setScreen={setScreen} />;
      case Screen.ABOUT:
        return <AboutScreen setScreen={setScreen} />;
      case Screen.SHOP:
        return <ShopScreen setScreen={setScreen} />;
      case Screen.PRODUCT_DETAIL:
        return <ProductDetailScreen setScreen={setScreen} />;
      case Screen.AUTH:
        return <AuthScreen setScreen={setScreen} />;
      case Screen.DASHBOARD_SELLER:
      case Screen.WALLET: // Simplified for demo
        return <DashboardSellerScreen />;
      case Screen.DASHBOARD_USER:
        return <DashboardUserScreen />;
      case Screen.SELL_FLOW:
        return <SellFlowScreen setScreen={setScreen} />;
      case Screen.SUPPORT:
        return <SupportScreen />;
      default:
        return <HomeScreen setScreen={setScreen} />;
    }
  };

  // Some screens have custom layouts (e.g. Dashboard has sidebar)
  // For simplicity in this demo, we wrap most public screens with standard Header/Footer
  // Dashboard screens might handle their own internal layout or be wrapped differently
  // Here we use a conditional wrapper.

  const isDashboard = [Screen.DASHBOARD_SELLER, Screen.DASHBOARD_USER, Screen.WALLET, Screen.SELL_FLOW, Screen.SUPPORT].includes(currentScreen);
  const isAuth = currentScreen === Screen.AUTH;

  if (isDashboard) {
      // Dashboards often have a sidebar, for this demo we reused the Header but might want a Sidebar layout
      // The designs show a sidebar for dashboards. 
      // Let's implement a Dashboard Layout wrapper in the screen components themselves or here.
      // To keep it simple based on the file limit, I'll rely on the Header component adapting (it has a dashboard mode check)
      // and render content directly. But wait, the design shows a SIDEBAR for the dashboard. 
      // I added a Sidebar component in the index.html/css previously? No.
      // I will make a simple layout here.
      
      return (
        <div className="flex h-screen bg-background overflow-hidden text-white font-body">
            {/* Sidebar for Dashboard */}
            <aside className="w-64 bg-surface border-r border-border hidden md:flex flex-col">
                <div className="h-20 flex items-center px-6 border-b border-border">
                     <span className="material-symbols-outlined text-3xl text-primary mr-2">diamond</span>
                     <span className="font-display font-bold text-xl">2ButO</span>
                </div>
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <button onClick={() => setScreen(Screen.DASHBOARD_USER)} className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${currentScreen === Screen.DASHBOARD_USER ? 'bg-primary/10 text-primary' : 'text-secondary hover:text-white hover:bg-white/5'}`}>
                        <span className="material-symbols-outlined">dashboard</span> Tổng quan
                    </button>
                    <button onClick={() => setScreen(Screen.SHOP)} className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-secondary hover:text-white hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined">shopping_bag</span> Mua hàng
                    </button>
                    <button onClick={() => setScreen(Screen.DASHBOARD_SELLER)} className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${currentScreen === Screen.DASHBOARD_SELLER ? 'bg-primary/10 text-primary' : 'text-secondary hover:text-white hover:bg-white/5'}`}>
                        <span className="material-symbols-outlined">storefront</span> Kênh người bán
                    </button>
                     <button onClick={() => setScreen(Screen.SELL_FLOW)} className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${currentScreen === Screen.SELL_FLOW ? 'bg-primary/10 text-primary' : 'text-secondary hover:text-white hover:bg-white/5'}`}>
                        <span className="material-symbols-outlined">add_circle</span> Đăng bán
                    </button>
                    <div className="pt-4 mt-4 border-t border-border">
                        <button onClick={() => setScreen(Screen.SUPPORT)} className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${currentScreen === Screen.SUPPORT ? 'bg-primary/10 text-primary' : 'text-secondary hover:text-white hover:bg-white/5'}`}>
                            <span className="material-symbols-outlined">support_agent</span> Hỗ trợ
                        </button>
                    </div>
                </nav>
                <div className="p-4 border-t border-border">
                    <button onClick={() => setScreen(Screen.HOME)} className="flex items-center gap-3 w-full px-4 py-2 text-sm text-secondary hover:text-white transition-colors">
                        <span className="material-symbols-outlined">logout</span> Thoát
                    </button>
                </div>
            </aside>
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                 {/* Topbar for Dashboard */}
                 <header className="h-16 border-b border-border bg-background/95 backdrop-blur flex items-center justify-between px-6 shrink-0">
                    <div className="md:hidden">
                        <span className="material-symbols-outlined text-white">menu</span>
                    </div>
                    <div className="hidden md:block">
                        <h2 className="text-white font-medium">Bảng điều khiển</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary hover:text-white">
                            <span className="material-symbols-outlined text-sm">notifications</span>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50">
                             <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" className="w-full h-full rounded-full object-cover" alt="Avatar"/>
                        </div>
                    </div>
                 </header>
                 {renderScreen()}
            </main>
        </div>
      );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-white font-body selection:bg-primary selection:text-white">
      {!isAuth && <Header currentScreen={currentScreen} setScreen={setScreen} />}
      {renderScreen()}
      {!isAuth && <Footer />}
    </div>
  );
};

export default App;
