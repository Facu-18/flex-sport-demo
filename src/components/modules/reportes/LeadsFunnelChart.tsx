"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface LeadsFunnelChartProps {
  data: { etapa: string; cantidad: number }[];
}

export function LeadsFunnelChart({ data }: LeadsFunnelChartProps) {
  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-5">
      <h3 className="text-lg font-bold text-flex-navy">Leads por etapa</h3>
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="etapa" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#012040" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
