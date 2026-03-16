import { create } from "zustand";
import { ordenesCompra as initialOrdenesCompra } from "@/data/ordenes-compra";
import type { OrdenCompra } from "@/types";

function getTodayIso() {
  return new Date().toISOString().slice(0, 10);
}

interface ComprasState {
  ordenesCompra: OrdenCompra[];
  aprobarOC: (id: string) => void;
  recibirOC: (id: string) => void;
}

export const useComprasStore = create<ComprasState>((set) => ({
  ordenesCompra: initialOrdenesCompra,
  aprobarOC: (id) =>
    set((state) => ({
      ordenesCompra: state.ordenesCompra.map((item) =>
        item.id === id
          ? {
              ...item,
              estado: "aprobada",
              fechaAprobacion: getTodayIso(),
            }
          : item,
      ),
    })),
  recibirOC: (id) =>
    set((state) => ({
      ordenesCompra: state.ordenesCompra.map((item) =>
        item.id === id ? { ...item, estado: "recibida" } : item,
      ),
    })),
}));
