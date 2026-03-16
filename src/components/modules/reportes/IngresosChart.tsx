"use client";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { PuntoGrafico } from "@/types";
import { formatCurrency } from "@/lib/utils";

interface IngresosChartProps {
  ingresos: PuntoGrafico[];
  egresos: PuntoGrafico[];
}

export function IngresosChart({ ingresos, egresos }: IngresosChartProps) {
  const data = ingresos.map((item, index) => ({
    mes: item.mes,
    ingresos: item.valor,
    egresos: egresos[index]?.valor ?? 0,
  }));

  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-5">
      <h3 className="text-lg font-bold text-flex-navy">Ingresos vs egresos</h3>
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip formatter={(value) => formatCurrency(Number(value ?? 0))} />
            <Legend />
            <Line type="monotone" dataKey="ingresos" stroke="#012040" strokeWidth={3} />
            <Line type="monotone" dataKey="egresos" stroke="#CDFE05" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
