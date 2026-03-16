interface LeadTimelineProps {
  notas: string[];
}

export function LeadTimeline({ notas }: LeadTimelineProps) {
  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-6 shadow-lg shadow-flex-navy/5">
      <h2 className="text-xl font-bold text-flex-navy">Timeline de contacto</h2>
      <div className="mt-4 space-y-3">
        {notas.map((nota, index) => (
          <div key={index} className="flex gap-3">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-flex-lime" />
            <p className="rounded-xl border border-flex-navy/10 bg-flex-ice px-3 py-2 text-sm text-flex-navy">
              {nota}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
