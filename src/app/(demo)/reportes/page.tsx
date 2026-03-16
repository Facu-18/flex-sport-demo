"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import {
  egresosMensuales,
  estadoCobranzas,
  ingresosMensuales,
  leadsEmbudoData,
  periodosReporte,
} from "@/data/reportes";
import { ReportesKpis } from "@/components/modules/reportes/ReportesKpis";
import { Toast } from "@/components/ui/Toast";

const chartFallback = () => (
  <section className="rounded-2xl border border-flex-navy/10 bg-white p-5">
    <div className="h-80 animate-pulse rounded-xl bg-flex-ice" />
  </section>
);

const IngresosChart = dynamic(
  () => import("@/components/modules/reportes/IngresosChart").then((mod) => mod.IngresosChart),
  { ssr: false, loading: chartFallback },
);

const CobranzasPieChart = dynamic(
  () =>
    import("@/components/modules/reportes/CobranzasPieChart").then((mod) => mod.CobranzasPieChart),
  { ssr: false, loading: chartFallback },
);

const LeadsFunnelChart = dynamic(
  () =>
    import("@/components/modules/reportes/LeadsFunnelChart").then((mod) => mod.LeadsFunnelChart),
  { ssr: false, loading: chartFallback },
);

export default function ReportesPage() {
  const [periodo, setPeriodo] = useState<(typeof periodosReporte)[number]["id"]>("mes");
  const [toast, setToast] = useState("");

  const { ingresosData, egresosData } = useMemo(() => {
    if (periodo === "mes") {
      return {
        ingresosData: ingresosMensuales.slice(-3),
        egresosData: egresosMensuales.slice(-3),
      };
    }
    if (periodo === "trimestre") {
      return {
        ingresosData: ingresosMensuales.slice(-4),
        egresosData: egresosMensuales.slice(-4),
      };
    }
    return {
      ingresosData: ingresosMensuales,
      egresosData: egresosMensuales,
    };
  }, [periodo]);

  const ingresosTotal = ingresosData.reduce((sum, item) => sum + item.valor, 0);
  const egresosTotal = egresosData.reduce((sum, item) => sum + item.valor, 0);
  const leadsConvertidos = leadsEmbudoData.find((item) => item.etapa === "Ganado")?.cantidad ?? 0;

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flex-navy/55">
              Reportes
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-flex-navy">Analitica comercial</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={periodo}
              onChange={(event) => setPeriodo(event.target.value as typeof periodo)}
              className="rounded-xl border border-flex-navy/20 px-3 py-2 text-sm text-flex-navy"
            >
              {periodosReporte.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => {
                setToast("Exportando...");
                window.setTimeout(() => setToast("Exportando... listo"), 1500);
                window.setTimeout(() => setToast(""), 3000);
              }}
              className="rounded-xl bg-flex-navy px-3 py-2 text-sm font-semibold text-flex-ice"
            >
              Exportar PDF
            </button>
          </div>
        </div>
      </section>

      <ReportesKpis ingresos={ingresosTotal} egresos={egresosTotal} leadsConvertidos={leadsConvertidos} />

      <section className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <IngresosChart ingresos={ingresosData} egresos={egresosData} />
        <CobranzasPieChart data={estadoCobranzas} />
      </section>

      <LeadsFunnelChart data={leadsEmbudoData} />

      <Toast open={Boolean(toast)} message={toast} />
    </div>
  );
}
