import { create } from "zustand";
import { contratos as initialContratos } from "@/data/contratos";
import type { Contrato } from "@/types";

function getTodayIso() {
  return new Date().toISOString().slice(0, 10);
}

interface ContratosState {
  contratos: Contrato[];
  firmar: (id: string) => void;
  activar: (id: string) => void;
}

export const useContratosStore = create<ContratosState>((set) => ({
  contratos: initialContratos,
  firmar: (id) =>
    set((state) => ({
      contratos: state.contratos.map((item) =>
        item.id === id
          ? {
              ...item,
              estado: "firmado",
              fechaFirma: getTodayIso(),
            }
          : item,
      ),
    })),
  activar: (id) =>
    set((state) => ({
      contratos: state.contratos.map((item) =>
        item.id === id ? { ...item, estado: "en_ejecucion" } : item,
      ),
    })),
}));
