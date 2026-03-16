import type { Actividad } from "@/types";

interface ActivityFeedProps {
  items: Actividad[];
}

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-5 shadow-lg shadow-flex-navy/5">
      <h3 className="text-lg font-bold text-flex-navy">Actividad reciente</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-flex-navy/10 bg-flex-ice p-3"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-flex-navy/60">
                {item.icono}
              </p>
              <p className="text-xs text-flex-navy/60">{item.tiempo}</p>
            </div>
            <p className="mt-1 text-sm text-flex-navy">{item.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
