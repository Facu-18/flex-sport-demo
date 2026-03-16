import { KanbanBoard } from "@/components/modules/crm/KanbanBoard";

export default function CrmPage() {
  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flex-navy/55">
          CRM / Leads
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-flex-navy">Pipeline comercial</h1>
        <p className="mt-2 text-sm text-flex-navy/70">
          Mueve leads de etapa para simular seguimiento comercial en vivo.
        </p>
      </section>
      <KanbanBoard />
    </div>
  );
}
