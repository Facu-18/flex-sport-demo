import { ObraCard } from "@/components/modules/obras/ObraCard";
import { obras } from "@/data/obras";

export default function ObrasPage() {
  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flex-navy/55">
          Proyectos
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-flex-navy">Obras activas</h1>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {obras.map((obra) => (
          <ObraCard key={obra.id} obra={obra} />
        ))}
      </section>
    </div>
  );
}
