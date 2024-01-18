import { create } from "zustand";
import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

interface UseMenuStoreType {
  isOpen: boolean;
  toggleCartMenu: () => void;
  closeCartMenu: () => void;
}

const useMenuStoreMock = create<UseMenuStoreType>()((set) => ({
  isOpen: false,
  toggleCartMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCartMenu: () => set(() => ({ isOpen: false })),
}));

describe("useMenuStore", () => {
  it("initial isOpen value is false", () => {
    const { result } = renderHook(() => useMenuStoreMock());
    expect(result.current.isOpen).toEqual(false);
  });

  it("toggleCartMenu toggles isOpen", () => {
    const { result } = renderHook(() => useMenuStoreMock());
    expect(result.current.isOpen).toEqual(false);

    act(() => result.current.toggleCartMenu());
    expect(result.current.isOpen).toEqual(true);

    act(() => result.current.toggleCartMenu());
    expect(result.current.isOpen).toEqual(false);
  });

  it("closeCartMenu sets isOpen to false", () => {
    const { result } = renderHook(() => useMenuStoreMock());
    act(() => result.current.toggleCartMenu()); // Ensure isOpen is true initially
    expect(result.current.isOpen).toEqual(true);

    act(() => result.current.closeCartMenu());
    expect(result.current.isOpen).toEqual(false);
  });
});
