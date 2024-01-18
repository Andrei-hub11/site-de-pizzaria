import { afterEach, describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Product } from "../../types";
import { create, storeResetFns } from "../../__test__/zustand";

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

const useCartStoreMock = create<CartState>((set) => ({
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

// Resetar o estado após cada teste
afterEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => {
      resetFn();
    });
  });
});

describe("useMenuStore", () => {
  it("should add a product to the cart with the correct properties", () => {
    const { result } = renderHook(() => useCartStoreMock());

    act(() =>
      result.current.addToCart({
        id: "1222333",
        type: "special",
        name: "bolo de chocolate",
        price: 10,
        image: "sjajjdh",
        imageSrcSet: "akakaka",
        quantity: 1,
      })
    );

    expect(result.current.products[0].id).toEqual("1222333");
    expect(result.current.products[0].type).toEqual("special");
    expect(result.current.products[0].name).toEqual("bolo de chocolate");
    expect(result.current.products[0].price).toEqual(10);
    expect(result.current.products[0].image).toEqual("sjajjdh");
    expect(result.current.products[0].imageSrcSet).toEqual("akakaka");
    expect(result.current.products[0].quantity).toEqual(1);
  });

  it("should increment the quantity of a product in the cart", () => {
    const { result } = renderHook(() => useCartStoreMock());

    act(() =>
      result.current.addToCart({
        id: "1222333",
        type: "special",
        name: "bolo de chocolate",
        price: 10,
        image: "sjajjdh",
        imageSrcSet: "akakaka",
        quantity: 1,
      })
    );

    act(() => result.current.incrementQuantity("1222333", 1));

    expect(result.current.products[0].quantity).toEqual(2);
  });

  it("should decrement the quantity of a product in the cart", () => {
    const { result } = renderHook(() => useCartStoreMock());

    act(() =>
      result.current.addToCart({
        id: "1222333",
        type: "special",
        name: "bolo de chocolate",
        price: 10,
        image: "sjajjdh",
        imageSrcSet: "akakaka",
        quantity: 1,
      })
    );

    act(() => result.current.decrementQuantity("1222333", 1));

    expect(result.current.products.length).toEqual(0);
  });

  it("should update the price of a product based on the selected size", () => {
    const { result } = renderHook(() => useCartStoreMock());

    act(() =>
      result.current.addToCart({
        id: "1222333",
        type: "special",
        name: "bolo de chocolate",
        price: 10,
        image: "sjajjdh",
        imageSrcSet: "akakaka",
        quantity: 1,
      })
    );

    act(() => result.current.updatePrice("1222333", "GG"));

    expect(result.current.products[0].price).toEqual(48);
  });

  it("should start a dropdown for a product", () => {
    const { result } = renderHook(() => useCartStoreMock());

    act(() => result.current.startDropdown("1222333"));

    expect(result.current.dropdown[0].id).toEqual("1222333");
  });

  it("should update the selected size in the dropdown for a product", () => {
    const { result } = renderHook(() => useCartStoreMock());

    act(() => result.current.startDropdown("1222333"));
    act(() => result.current.updateDropdown("1222333", "GG"));

    expect(result.current.dropdown[0].sizeSelected).toEqual("GG");
  });
});
