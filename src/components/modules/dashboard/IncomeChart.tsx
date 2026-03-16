"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { egresosMensuales, ingresosMensuales } from "@/data/reportes";
import { formatCurrency } from "@/lib/utils";

const data = ingresosMensuales.map((ingreso, index) => ({
  mes: ingreso.mes,
  ingresos: ingreso.valor,
  egresos: egresosMensuales[index]?.valor ?? 0,
}));

export function IncomeChart() {
  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-5 shadow-lg shadow-flex-navy/5">
      <h3 className="text-lg font-bold text-flex-navy">Ingresos vs egresos</h3>
      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="mes" stroke="#012040" fontSize={12} />
            <YAxis stroke="#012040" fontSize={12} />
            <Tooltip
              formatter={(value) => formatCurrency(Number(value ?? 0))}
              contentStyle={{
                borderRadius: "0.75rem",
                border: "1px solid #dbe4ef",
              }}
            />
            <Line
              type="monotone"
              dataKey="ingresos"
              stroke="#012040"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="egresos"
              stroke="#CDFE05"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
