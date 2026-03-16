import { create } from "zustand";
import { leads as initialLeads } from "@/data/leads";
import type { Lead, LeadStatus } from "@/types";

interface CrmState {
  leads: Lead[];
  moveLead: (id: string, nextStatus: LeadStatus) => void;
  addNota: (id: string, nota: string) => void;
}

export const useCrmStore = create<CrmState>((set) => ({
  leads: initialLeads,
  moveLead: (id, nextStatus) =>
    set((state) => ({
      leads: state.leads.map((lead) =>
        lead.id === id ? { ...lead, estado: nextStatus } : lead,
      ),
    })),
  addNota: (id, nota) =>
    set((state) => ({
      leads: state.leads.map((lead) =>
        lead.id === id ? { ...lead, notas: [nota, ...lead.notas] } : lead,
      ),
    })),
}));
