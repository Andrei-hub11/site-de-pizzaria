import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
}

interface MenuActions {
  toggleCartMenu: () => void;
  closeCartMenu: () => void;
}

type MenuStore = MenuState & MenuActions;

const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  toggleCartMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCartMenu: () => set(() => ({ isOpen: false })),
}));

export default useMenuStore;
