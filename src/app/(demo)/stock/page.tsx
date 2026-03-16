"use client";

import { useMemo, useState } from "react";
import { ProductosTable } from "@/components/modules/stock/ProductosTable";
import { MovimientosSidepanel } from "@/components/modules/stock/MovimientosSidepanel";
import { useStockStore } from "@/store/useStockStore";
import type { Producto } from "@/types";

const obraOptions = [
  { id: "todas", label: "Todas las obras" },
  { id: "Cancha de Boca", label: "Cancha de Boca" },
  { id: "Parque Central", label: "Parque Central" },
];

export default function StockPage() {
  const selectedObra = useStockStore((state) => state.selectedObra);
  const filtrarPorObra = useStockStore((state) => state.filtrarPorObra);
  const productos = useStockStore((state) => state.productos);
  const movimientos = useStockStore((state) => state.movimientos);
  const getMovimientosPorProducto = useStockStore((state) => state.getMovimientosPorProducto);
  const [selectedProducto, setSelectedProducto] = useState<Producto | null>(null);

  const filtered = useMemo(() => {
    if (selectedObra === "todas") {
      return productos;
    }

    return productos.filter((item) => item.obraAsignada === selectedObra);
  }, [productos, selectedObra]);

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flex-navy/55">
          Inventario
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-flex-navy">Stock por obra</h1>
      </section>

      <section className="rounded-2xl border border-flex-navy/10 bg-white p-4">
        <label className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/60">
          Filtrar por obra
        </label>
        <select
          value={selectedObra}
          onChange={(event) => filtrarPorObra(event.target.value)}
          className="mt-2 w-full max-w-xs rounded-xl border border-flex-navy/20 px-3 py-2 text-sm text-flex-navy outline-none focus:border-flex-lime"
        >
          {obraOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </section>

      <ProductosTable rows={filtered} movimientos={movimientos} onVerMovimientos={setSelectedProducto} />

      <MovimientosSidepanel
        open={Boolean(selectedProducto)}
        title={selectedProducto ? `Movimientos de ${selectedProducto.nombre}` : "Movimientos"}
        movimientos={selectedProducto ? getMovimientosPorProducto(selectedProducto.id) : []}
        onClose={() => setSelectedProducto(null)}
      />
    </div>
  );
}
