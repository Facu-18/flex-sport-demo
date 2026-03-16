import { formatCurrency } from "@/lib/utils";

interface ReportesKpisProps {
  ingresos: number;
  egresos: number;
  leadsConvertidos: number;
}

export function ReportesKpis({ ingresos, egresos, leadsConvertidos }: ReportesKpisProps) {
  const margen = ingresos - egresos;
  const cards = [
    { id: "ing", label: "Ingresos totales", value: formatCurrency(ingresos) },
    { id: "egr", label: "Egresos", value: formatCurrency(egresos) },
    { id: "mar", label: "Margen", value: formatCurrency(margen) },
    { id: "lea", label: "Leads convertidos", value: `${leadsConvertidos}` },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <article key={card.id} className="rounded-2xl border border-flex-navy/10 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/60">
            {card.label}
          </p>
          <p className="mt-2 text-2xl font-extrabold text-flex-navy">{card.value}</p>
        </article>
      ))}
    </div>
  );
}
