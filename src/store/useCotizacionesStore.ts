import { create } from "zustand";
import { cotizaciones as initialCotizaciones } from "@/data/cotizaciones";
import type { Cotizacion } from "@/types";

interface CotizacionesState {
  cotizaciones: Cotizacion[];
  aprobar: (id: string) => void;
  rechazar: (id: string) => void;
}

export const useCotizacionesStore = create<CotizacionesState>((set) => ({
  cotizaciones: initialCotizaciones,
  aprobar: (id) =>
    set((state) => ({
      cotizaciones: state.cotizaciones.map((item) =>
        item.id === id ? { ...item, estado: "aprobada" } : item,
      ),
    })),
  rechazar: (id) =>
    set((state) => ({
      cotizaciones: state.cotizaciones.map((item) =>
        item.id === id ? { ...item, estado: "rechazada" } : item,
      ),
    })),
}));
