import Link from "next/link";

interface ModulePlaceholderProps {
  title: string;
  description: string;
  nextHref?: string;
  nextLabel?: string;
}

export function ModulePlaceholder({
  title,
  description,
  nextHref,
  nextLabel,
}: ModulePlaceholderProps) {
  return (
    <section className="space-y-5 rounded-3xl border border-flex-navy/10 bg-white p-8 shadow-xl shadow-flex-navy/5">
      <div className="inline-flex rounded-full border border-flex-lime/40 bg-flex-lime/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-flex-navy">
        Demo en construcción
      </div>
      <div>
        <h1 className="text-3xl font-extrabold text-flex-navy">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-flex-navy/70">{description}</p>
      </div>
      {nextHref && nextLabel ? (
        <Link
          href={nextHref}
          className="inline-flex rounded-xl bg-flex-navy px-4 py-2 text-sm font-semibold text-flex-ice transition hover:brightness-110"
        >
          {nextLabel}
        </Link>
      ) : null}
    </section>
  );
}
