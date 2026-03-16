"use client";

import Link from "next/link";
import { TabsBar } from "@/components/ui/TabsBar";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Cuota, Obra, OrdenCompra, Producto } from "@/types";
import { useMemo, useState } from "react";

type TabId = "cobranzas" | "compras" | "stock" | "info";

interface ObraTabsProps {
  obra: Obra;
  cuotas: Cuota[];
  compras: OrdenCompra[];
  productos: Producto[];
}

const tabs = [
  { id: "cobranzas", label: "Cobranzas" },
  { id: "compras", label: "Compras" },
  { id: "stock", label: "Stock" },
  { id: "info", label: "Info" },
];

export function ObraTabs({ obra, cuotas, compras, productos }: ObraTabsProps) {
  const [active, setActive] = useState<TabId>("cobranzas");

  const totalCuotas = useMemo(() => cuotas.reduce((sum, item) => sum + item.monto, 0), [cuotas]);

  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-6 shadow-lg shadow-flex-navy/5">
      <TabsBar
        tabs={tabs}
        active={active}
        onChange={(id) => setActive(id as TabId)}
      />

      <div className="mt-5">
        {active === "cobranzas" ? (
          <div className="space-y-3">
            <p className="text-sm text-flex-navy/70">Cuotas vinculadas: {cuotas.length}</p>
            <p className="text-sm font-semibold text-flex-navy">
              Total plan de pagos: {formatCurrency(totalCuotas)}
            </p>
            {cuotas.map((cuota) => (
              <article
                key={cuota.id}
                className="rounded-xl border border-flex-navy/10 bg-flex-ice p-3 text-sm text-flex-navy"
              >
                <p>
                  Cuota #{cuota.numero} - {cuota.descripcion} - {formatCurrency(cuota.monto)}
                </p>
                <p className="text-xs text-flex-navy/60">Vence {formatDate(cuota.vencimiento)}</p>
              </article>
            ))}
            <Link href="/cobranzas" className="inline-flex text-sm font-semibold text-flex-navy underline">
              Ver en cobranzas
            </Link>
          </div>
        ) : null}

        {active === "compras" ? (
          <div className="space-y-3">
            {compras.map((compra) => (
              <article
                key={compra.id}
                className="rounded-xl border border-flex-navy/10 bg-flex-ice p-3 text-sm text-flex-navy"
              >
                <p className="font-semibold">{compra.numero}</p>
                <p>{compra.proveedorNombre}</p>
                <p className="text-xs text-flex-navy/60">{formatDate(compra.fechaSolicitud)}</p>
              </article>
            ))}
            <Link href="/compras" className="inline-flex text-sm font-semibold text-flex-navy underline">
              Ver en compras
            </Link>
          </div>
        ) : null}

        {active === "stock" ? (
          <div className="space-y-3">
            {productos.map((producto) => (
              <article
                key={producto.id}
                className="rounded-xl border border-flex-navy/10 bg-flex-ice p-3 text-sm text-flex-navy"
              >
                <p className="font-semibold">{producto.nombre}</p>
                <p className="text-xs text-flex-navy/60">
                  Disponible: {producto.stockDisponible} - Reservado: {producto.stockReservado}
                </p>
              </article>
            ))}
            <Link href="/stock" className="inline-flex text-sm font-semibold text-flex-navy underline">
              Ver en stock
            </Link>
          </div>
        ) : null}

        {active === "info" ? (
          <div className="rounded-xl border border-flex-navy/10 bg-flex-ice p-4 text-sm text-flex-navy">
            <p>Cliente: {obra.clienteEmpresa}</p>
            <p>Contrato: {obra.contratoNumero || "Pendiente de generacion"}</p>
            <p>Ubicacion: {obra.ubicacion}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
