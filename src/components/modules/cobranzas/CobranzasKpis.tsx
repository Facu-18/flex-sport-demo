import { formatCurrency } from "@/lib/utils";

interface CobranzasKpisProps {
  cobrado: number;
  pendiente: number;
  vencido: number;
}

export function CobranzasKpis({ cobrado, pendiente, vencido }: CobranzasKpisProps) {
  const cards = [
    { id: "k1", label: "Total cobrado", value: cobrado, style: "bg-emerald-50 text-emerald-700" },
    { id: "k2", label: "Pendiente", value: pendiente, style: "bg-slate-100 text-slate-700" },
    { id: "k3", label: "Vencido", value: vencido, style: "bg-rose-50 text-rose-700" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <article key={card.id} className={`rounded-2xl border border-flex-navy/10 p-5 ${card.style}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.15em]">{card.label}</p>
          <p className="mt-2 text-2xl font-extrabold">{formatCurrency(card.value)}</p>
        </article>
      ))}
    </div>
  );
}
