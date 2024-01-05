import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
}

interface MenuActions {
  toggleMenu: () => void;
  closeMenu: () => void;
}

type MenuStore = MenuState & MenuActions;

const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set(() => ({ isOpen: false })),
}));

export default useMenuStore;
