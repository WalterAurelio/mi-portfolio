import { create } from "zustand";

type ActiveSectionStore = {
  activeSection: 'sobre mí' | 'tech stack' | 'proyectos' | 'contacto' | undefined;
  setActiveSection: (value: ActiveSectionStore['activeSection']) => void;
};

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
  activeSection: 'contacto',
  setActiveSection: (value) => {
    set({ activeSection: value })
  }
}));