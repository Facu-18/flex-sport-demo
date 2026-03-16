"use client";

import dynamic from "next/dynamic";
import { KpiCard } from "@/components/ui/KpiCard";
import { dashboardKpis, actividadReciente, alertas } from "@/data/dashboard";
import { ActivityFeed } from "@/components/modules/dashboard/ActivityFeed";
import { AlertsPanel } from "@/components/modules/dashboard/AlertsPanel";

const chartFallback = () => (
  <section className="rounded-2xl border border-flex-navy/10 bg-white p-5 shadow-lg shadow-flex-navy/5">
    <div className="h-72 animate-pulse rounded-xl bg-flex-ice" />
  </section>
);

const IncomeChart = dynamic(
  () => import("@/components/modules/dashboard/IncomeChart").then((mod) => mod.IncomeChart),
  { ssr: false, loading: chartFallback },
);

const CobranzasDonut = dynamic(
  () =>
    import("@/components/modules/dashboard/CobranzasDonut").then((mod) => mod.CobranzasDonut),
  { ssr: false, loading: chartFallback },
);

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6 shadow-lg shadow-flex-navy/5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flex-navy/55">
          Dashboard general
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-flex-navy">
          Estado operativo en tiempo real
        </h1>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardKpis.map((item) => (
          <KpiCard key={item.id} label={item.label} value={item.value} delta={item.delta} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <IncomeChart />
        <CobranzasDonut />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <ActivityFeed items={actividadReciente} />
        <AlertsPanel items={alertas} />
      </section>
    </div>
  );
}
