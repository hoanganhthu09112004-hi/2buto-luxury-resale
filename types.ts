export enum Screen {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SHOP = 'SHOP',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
  AUTH = 'AUTH',
  DASHBOARD_USER = 'DASHBOARD_USER',
  DASHBOARD_SELLER = 'DASHBOARD_SELLER',
  WALLET = 'WALLET',
  TRACKING = 'TRACKING',
  SELL_FLOW = 'SELL_FLOW',
  SUPPORT = 'SUPPORT'
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  condition: string;
  status?: string;
}
