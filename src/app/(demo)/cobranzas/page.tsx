"use client";

import { useMemo, useState } from "react";
import { contratos } from "@/data/contratos";
import { TabsBar } from "@/components/ui/TabsBar";
import { CobranzasKpis } from "@/components/modules/cobranzas/CobranzasKpis";
import { CuotasTable } from "@/components/modules/cobranzas/CuotasTable";
import { PagarModal } from "@/components/modules/cobranzas/PagarModal";
import { Toast } from "@/components/ui/Toast";
import { useCobranzasStore } from "@/store/useCobranzasStore";
import type { CuotaEstado } from "@/types";

const tabs = [
  { id: "todas", label: "Todas" },
  { id: "pagada", label: "Pagadas" },
  { id: "pendiente", label: "Pendientes" },
  { id: "vencida", label: "Vencidas" },
];

export default function CobranzasPage() {
  const cuotas = useCobranzasStore((state) => state.cuotas);
  const pagarCuota = useCobranzasStore((state) => state.pagarCuota);
  const [active, setActive] = useState("todas");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [toast, setToast] = useState("");

  const filtered = useMemo(() => {
    if (active === "todas") return cuotas;
    return cuotas.filter((item) => item.estado === (active as CuotaEstado));
  }, [active, cuotas]);

  const cobrado = cuotas
    .filter((item) => item.estado === "pagada")
    .reduce((sum, item) => sum + item.monto, 0);
  const pendiente = cuotas
    .filter((item) => item.estado === "pendiente")
    .reduce((sum, item) => sum + item.monto, 0);
  const vencido = cuotas
    .filter((item) => item.estado === "vencida")
    .reduce((sum, item) => sum + item.monto, 0);

  const clienteByContrato = Object.fromEntries(
    contratos.map((contrato) => [contrato.id, contrato.clienteEmpresa]),
  );

  const selectedCuota = cuotas.find((item) => item.id === selectedId) ?? null;

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flex-navy/55">
          Cobranzas
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-flex-navy">Plan de pagos</h1>
      </section>

      <CobranzasKpis cobrado={cobrado} pendiente={pendiente} vencido={vencido} />
      <TabsBar tabs={tabs} active={active} onChange={setActive} />

      <CuotasTable
        cuotas={filtered}
        clienteByContrato={clienteByContrato}
        onPagar={(cuota) => setSelectedId(cuota.id)}
      />

      <PagarModal
        open={Boolean(selectedCuota)}
        cuota={selectedCuota}
        onClose={() => setSelectedId(null)}
        onConfirm={(metodo) => {
          if (!selectedCuota) return;
          pagarCuota(selectedCuota.id, metodo);
          setSelectedId(null);
          setToast("Pago registrado correctamente");
          window.setTimeout(() => setToast(""), 1800);
        }}
      />

      <Toast open={Boolean(toast)} message={toast} />
    </div>
  );
}
