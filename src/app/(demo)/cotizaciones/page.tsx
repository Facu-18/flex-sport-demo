"use client";

import { useMemo, useState } from "react";
import { CotizacionesTable } from "@/components/modules/cotizaciones/CotizacionesTable";
import { TabsBar } from "@/components/ui/TabsBar";
import { useCotizacionesStore } from "@/store/useCotizacionesStore";
import type { CotizacionEstado } from "@/types";

const tabs = [
  { id: "todas", label: "Todas" },
  { id: "aprobada", label: "Aprobadas" },
  { id: "enviada", label: "Enviadas" },
  { id: "borrador", label: "Borradores" },
];

export default function CotizacionesPage() {
  const cotizaciones = useCotizacionesStore((state) => state.cotizaciones);
  const [active, setActive] = useState("todas");

  const filtered = useMemo(() => {
    if (active === "todas") {
      return cotizaciones;
    }

    return cotizaciones.filter((item) => item.estado === (active as CotizacionEstado));
  }, [active, cotizaciones]);

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flex-navy/55">
          Cotizaciones
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-flex-navy">Gestion comercial</h1>
      </section>

      <TabsBar tabs={tabs} active={active} onChange={setActive} />

      <CotizacionesTable rows={filtered} />
    </div>
  );
}
