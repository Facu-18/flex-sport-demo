"use client";

import { useMemo, useState } from "react";
import { ComprasTable } from "@/components/modules/compras/ComprasTable";
import { DetalleOCModal } from "@/components/modules/compras/DetalleOCModal";
import { Toast } from "@/components/ui/Toast";
import { TabsBar } from "@/components/ui/TabsBar";
import { useComprasStore } from "@/store/useComprasStore";
import { formatCurrency } from "@/lib/utils";
import type { OrdenCompra, OrdenCompraEstado } from "@/types";

const tabs = [
  { id: "todas", label: "Todas" },
  { id: "solicitada", label: "Solicitadas" },
  { id: "aprobada", label: "Aprobadas" },
  { id: "recibida", label: "Recibidas" },
];

export default function ComprasPage() {
  const ordenesCompra = useComprasStore((state) => state.ordenesCompra);
  const aprobarOC = useComprasStore((state) => state.aprobarOC);
  const [active, setActive] = useState("todas");
  const [selected, setSelected] = useState<OrdenCompra | null>(null);
  const [toast, setToast] = useState("");

  const filtered = useMemo(() => {
    if (active === "todas") return ordenesCompra;
    return ordenesCompra.filter((item) => item.estado === (active as OrdenCompraEstado));
  }, [active, ordenesCompra]);

  const totalEmitidas = ordenesCompra.length;
  const pendientesAprobacion = ordenesCompra.filter((item) => item.estado === "solicitada").length;
  const enTransito = ordenesCompra.filter((item) => ["aprobada", "ordenada"].includes(item.estado)).length;
  const totalMonto = ordenesCompra.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flex-navy/55">Compras</p>
        <h1 className="mt-2 text-3xl font-extrabold text-flex-navy">Ordenes de compra</h1>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-2xl border border-flex-navy/10 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/60">
            Total OC emitidas
          </p>
          <p className="mt-2 text-2xl font-extrabold text-flex-navy">{totalEmitidas}</p>
        </article>
        <article className="rounded-2xl border border-flex-navy/10 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/60">
            Pendientes de aprobacion
          </p>
          <p className="mt-2 text-2xl font-extrabold text-flex-navy">{pendientesAprobacion}</p>
        </article>
        <article className="rounded-2xl border border-flex-navy/10 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/60">En transito</p>
          <p className="mt-2 text-2xl font-extrabold text-flex-navy">{enTransito}</p>
        </article>
        <article className="rounded-2xl border border-flex-navy/10 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/60">Monto total</p>
          <p className="mt-2 text-2xl font-extrabold text-flex-navy">{formatCurrency(totalMonto)}</p>
        </article>
      </section>

      <TabsBar tabs={tabs} active={active} onChange={setActive} />

      <ComprasTable
        rows={filtered}
        onAprobar={(id) => {
          aprobarOC(id);
          setToast("OC aprobada");
          window.setTimeout(() => setToast(""), 1800);
        }}
        onDetalle={setSelected}
      />

      <DetalleOCModal open={Boolean(selected)} orden={selected} onClose={() => setSelected(null)} />
      <Toast open={Boolean(toast)} message={toast} />
    </div>
  );
}
