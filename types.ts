export type ProductCategory =
  | 'all'
  | 'organic-anion'
  | 'pure-cotton'
  | 'panty-liners'
  | 'period-panties'
  | 'baby-economy'
  | 'baby-elite';

export interface ProductVariant {
  id: string;
  size: string;
  dimension?: string;
  packCount: string;
  price: number;
  weightRange?: string;
  waistRange?: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  categoryLabel: string;
  image: string;
  description: string;
  keyBenefits: string[];
  features: string[];
  variants: ProductVariant[];
  badge?: string;
}

export interface CartItem {
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}

export interface OrderFormState {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  notes?: string;
}
