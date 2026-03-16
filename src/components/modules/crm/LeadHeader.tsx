"use client";

import type { Lead, LeadStatus } from "@/types";
import { useCrmStore } from "@/store/useCrmStore";
import { StatusBadge } from "@/components/ui/StatusBadge";

const states: LeadStatus[] = ["nuevo", "contactado", "cotizado", "ganado", "perdido"];

interface LeadHeaderProps {
  lead: Lead;
}

export function LeadHeader({ lead }: LeadHeaderProps) {
  const moveLead = useCrmStore((state) => state.moveLead);

  return (
    <section className="rounded-2xl border border-flex-navy/10 bg-white p-6 shadow-lg shadow-flex-navy/5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-flex-navy/55">
            Lead activo
          </p>
          <h1 className="mt-1 text-3xl font-extrabold text-flex-navy">{lead.nombre}</h1>
          <p className="text-sm text-flex-navy/70">{lead.empresa}</p>
        </div>
        <StatusBadge status={lead.estado} />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-flex-navy/10 bg-flex-ice p-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/55">
            Email
          </p>
          <p className="mt-1 font-medium text-flex-navy">{lead.email}</p>
        </div>
        <div className="rounded-xl border border-flex-navy/10 bg-flex-ice p-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/55">
            Telefono
          </p>
          <p className="mt-1 font-medium text-flex-navy">{lead.telefono}</p>
        </div>
        <div className="rounded-xl border border-flex-navy/10 bg-flex-ice p-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/55">
            Responsable
          </p>
          <p className="mt-1 font-medium text-flex-navy">{lead.responsable}</p>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/60">
          Cambiar estado
        </label>
        <select
          value={lead.estado}
          onChange={(event) => moveLead(lead.id, event.target.value as LeadStatus)}
          className="mt-2 w-full max-w-sm rounded-xl border border-flex-navy/20 bg-white px-3 py-2 text-sm text-flex-navy outline-none focus:border-flex-lime"
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
