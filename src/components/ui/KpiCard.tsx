interface KpiCardProps {
  label: string;
  value: string;
  delta: string;
}

export function KpiCard({ label, value, delta }: KpiCardProps) {
  return (
    <article className="rounded-2xl border border-flex-navy/10 bg-white p-5 shadow-lg shadow-flex-navy/5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-flex-navy/55">{label}</p>
      <p className="mt-3 text-3xl font-extrabold text-flex-navy">{value}</p>
      <p className="mt-2 inline-flex rounded-full bg-flex-lime/30 px-2.5 py-1 text-xs font-bold text-flex-navy">
        {delta}
      </p>
    </article>
  );
}
