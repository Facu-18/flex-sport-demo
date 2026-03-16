import type { Alerta } from "@/types";

interface AlertsPanelProps {
  items: Alerta[];
}

export function AlertsPanel({ items }: AlertsPanelProps) {
  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-5 shadow-lg shadow-flex-navy/5">
      <h3 className="text-lg font-bold text-flex-navy">Alertas operativas</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl border px-3 py-2 text-sm ${
              item.tipo === "danger"
                ? "border-rose-200 bg-rose-50 text-rose-700"
                : "border-amber-200 bg-amber-50 text-amber-700"
            }`}
          >
            {item.mensaje}
          </div>
        ))}
      </div>
    </section>
  );
}
