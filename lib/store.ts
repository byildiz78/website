import { create } from "zustand";
import { persist } from "zustand/middleware";

type Layout = "boxed" | "full";

interface LayoutState {
  layout: Layout;
  setLayout: (layout: Layout) => void;
}

// .env dosyasından varsayılan layout değerini al
const defaultLayout = process.env.NEXT_PUBLIC_DEFAULT_LAYOUT as Layout || "boxed";

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      layout: defaultLayout,
      setLayout: (layout) => set({ layout }),
    }),
    {
      name: "layout-storage",
    }
  )
);