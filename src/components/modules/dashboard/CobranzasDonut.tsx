"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { estadoCobranzas } from "@/data/reportes";
import { formatCurrency } from "@/lib/utils";

export function CobranzasDonut() {
  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-5 shadow-lg shadow-flex-navy/5">
      <h3 className="text-lg font-bold text-flex-navy">Estado de cobranzas</h3>
      <div className="mt-4 grid items-center gap-2 md:grid-cols-[1fr_auto]">
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={estadoCobranzas}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={3}
              >
                {estadoCobranzas.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(Number(value ?? 0))} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
          {estadoCobranzas.map((entry) => (
            <div key={entry.name} className="flex items-center gap-2 text-sm text-flex-navy">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span>{entry.name}</span>
              <span className="font-semibold">{formatCurrency(entry.value)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
