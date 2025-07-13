
import { create } from 'zustand'

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartState {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
