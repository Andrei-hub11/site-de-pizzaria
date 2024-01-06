import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
}

interface MenuActions {
  openCartMenu: () => void;
  closeCartMenu: () => void;
}

type MenuStore = MenuState & MenuActions;

const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  openCartMenu: () => set(() => ({ isOpen: true })),
  closeCartMenu: () => set(() => ({ isOpen: false })),
}));

export default useMenuStore;
