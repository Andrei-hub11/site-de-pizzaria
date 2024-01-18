import { create } from "zustand";
import { Product } from "../types";

interface Dropdown {
  id: string;
  sizeSelected: string;
}

interface CartState {
  products: Product[];
  dropdown: Dropdown[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  incrementQuantity: (productId: string, quantity: number) => void;
  decrementQuantity: (productId: string, quantity: number) => void;
  startDropdown: (productId: string) => void;
  updateDropdown: (productId: string, sizeSelected: string) => void;
  updatePrice: (productId: string, sizeSelected: string) => void;
}

const useCartStore = create<CartState>((set) => ({
  products: [],
  dropdown: [],
  addToCart: (product) =>
    set((state) => ({
      products: [
        ...state.products,
        { ...product, quantity: 1, price: product.price },
      ],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
  incrementQuantity: (productId, quantity) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + quantity }
          : product
      ),
    })),
  decrementQuantity: (productId, quantity) =>
    set((state) => {
      const updatedProducts: Product[] = state.products.reduce(
        (acc: Product[], product: Product) => {
          if (product.id === productId) {
            const newQuantity = product.quantity - quantity;
            if (newQuantity <= 0) {
              return acc; // remove o item
            }
            const updatedProduct = { ...product, quantity: newQuantity };
            return [...acc, updatedProduct];
          }
          return [...acc, product];
        },
        []
      );

      return {
        products: updatedProducts,
      };
    }),
  startDropdown: (productId) =>
    set((state) => ({
      dropdown: [...state.dropdown, { id: productId, sizeSelected: "G" }],
    })),
  updateDropdown(productId, sizeSelected) {
    set((state) => ({
      dropdown: state.dropdown.map((drop) =>
        drop.id === productId
          ? {
              ...drop,
              sizeSelected: sizeSelected,
            }
          : drop
      ),
    }));
  },
  updatePrice(productId, sizeSelected) {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? {
              ...product,
              price: sizeSelected === "M" ? 23 : sizeSelected === "G" ? 32 : 48,
            }
          : product
      ),
    }));
  },
}));

export default useCartStore;
