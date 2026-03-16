"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { LeadHeader } from "@/components/modules/crm/LeadHeader";
import { LeadTimeline } from "@/components/modules/crm/LeadTimeline";
import { useCrmStore } from "@/store/useCrmStore";
import { useCotizacionesStore } from "@/store/useCotizacionesStore";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function LeadDetailPage() {
  const { id } = useParams<{ id: string }>();
  const leads = useCrmStore((state) => state.leads);
  const addNota = useCrmStore((state) => state.addNota);
  const cotizaciones = useCotizacionesStore((state) => state.cotizaciones);
  const [nota, setNota] = useState("");

  const lead = leads.find((item) => item.id === id);

  if (!lead) {
    return (
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-8 text-flex-navy">
        Lead no encontrado.
      </section>
    );
  }

  const relacionadas = cotizaciones.filter((item) => item.leadId === lead.id);

  return (
    <div className="space-y-5">
      <LeadHeader lead={lead} />

      <div className="grid gap-5 xl:grid-cols-[2fr_1fr]">
        <LeadTimeline notas={lead.notas} />

        <section className="space-y-4 rounded-2xl border border-flex-navy/10 bg-white p-6">
          <h2 className="text-xl font-bold text-flex-navy">Cotizaciones asociadas</h2>
          {relacionadas.map((cotizacion) => (
            <Link
              key={cotizacion.id}
              href={`/cotizaciones/${cotizacion.id}`}
              className="block rounded-xl border border-flex-navy/10 bg-flex-ice p-3"
            >
              <p className="font-semibold text-flex-navy">{cotizacion.numero}</p>
              <div className="mt-1">
                <StatusBadge status={cotizacion.estado} />
              </div>
            </Link>
          ))}
          {relacionadas.length === 0 ? (
            <p className="text-sm text-flex-navy/60">Sin cotizaciones para este lead.</p>
          ) : null}
          <Link
            href={`/cotizaciones?lead=${lead.id}`}
            className="inline-flex rounded-xl bg-flex-navy px-3 py-2 text-sm font-semibold text-flex-ice"
          >
            Nueva cotizacion
          </Link>
        </section>
      </div>

      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <h2 className="text-lg font-bold text-flex-navy">Agregar nota interna</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <input
            value={nota}
            onChange={(event) => setNota(event.target.value)}
            placeholder="Escribe una nota breve..."
            className="w-full max-w-xl rounded-xl border border-flex-navy/20 px-3 py-2 text-sm outline-none focus:border-flex-lime"
          />
          <button
            type="button"
            onClick={() => {
              if (!nota.trim()) return;
              addNota(lead.id, nota.trim());
              setNota("");
            }}
            className="rounded-xl bg-flex-lime px-3 py-2 text-sm font-semibold text-flex-navy"
          >
            Guardar nota
          </button>
        </div>
      </section>
    </div>
  );
}
