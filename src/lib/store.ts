import { create } from "zustand";

interface UIState {
  isMobileMenuOpen: boolean;
  isHeaderSolid: boolean;
  isLoading: boolean;
  activeSection: string;
  setMobileMenuOpen: (open: boolean) => void;
  setHeaderSolid: (solid: boolean) => void;
  setLoading: (loading: boolean) => void;
  setActiveSection: (section: string) => void;
  toggleMobileMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isHeaderSolid: false,
  isLoading: true,
  activeSection: "hero",
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  setHeaderSolid: (solid) => set({ isHeaderSolid: solid }),
  setLoading: (loading) => set({ isLoading: loading }),
  setActiveSection: (section) => set({ activeSection: section }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));
