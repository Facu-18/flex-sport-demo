import { create } from "zustand";
import { movimientosStock as initialMovimientos } from "@/data/movimientos-stock";
import { productos as initialProductos } from "@/data/productos";
import type { MovimientoStock, Producto } from "@/types";

interface StockState {
  selectedObra: string;
  productos: Producto[];
  movimientos: MovimientoStock[];
  filtrarPorObra: (obra: string) => void;
  getMovimientosPorProducto: (productoId: string) => MovimientoStock[];
}

export const useStockStore = create<StockState>((set, get) => ({
  selectedObra: "todas",
  productos: initialProductos,
  movimientos: initialMovimientos,
  filtrarPorObra: (obra) => set({ selectedObra: obra }),
  getMovimientosPorProducto: (productoId) =>
    get().movimientos.filter((item) => item.productoId === productoId),
}));
