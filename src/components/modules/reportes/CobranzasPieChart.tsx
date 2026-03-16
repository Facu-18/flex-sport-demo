"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { formatCurrency } from "@/lib/utils";

interface CobranzasPieChartProps {
  data: { name: string; value: number; color: string }[];
}

export function CobranzasPieChart({ data }: CobranzasPieChartProps) {
  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-5">
      <h3 className="text-lg font-bold text-flex-navy">Composicion de cobranzas</h3>
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={95}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => formatCurrency(Number(value ?? 0))} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
