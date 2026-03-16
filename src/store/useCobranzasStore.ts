import { create } from "zustand";
import { cuotas as initialCuotas } from "@/data/cuotas";
import type { Cuota } from "@/types";

function getTodayIso() {
  return new Date().toISOString().slice(0, 10);
}

interface CobranzasState {
  cuotas: Cuota[];
  pagarCuota: (id: string, metodoPago: string) => void;
}

export const useCobranzasStore = create<CobranzasState>((set) => ({
  cuotas: initialCuotas,
  pagarCuota: (id, metodoPago) =>
    set((state) => ({
      cuotas: state.cuotas.map((item) =>
        item.id === id
          ? {
              ...item,
              estado: "pagada",
              fechaPago: getTodayIso(),
              metodoPago,
            }
          : item,
      ),
    })),
}));
