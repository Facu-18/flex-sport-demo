import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import type { Cuota } from "@/types";

interface PagarModalProps {
  cuota: Cuota | null;
  open: boolean;
  onClose: () => void;
  onConfirm: (metodo: string) => void;
}

export function PagarModal({ cuota, open, onClose, onConfirm }: PagarModalProps) {
  const [metodo, setMetodo] = useState("Transferencia bancaria");

  return (
    <Modal open={open} onClose={onClose} title="Registrar pago">
      {!cuota ? null : (
        <div className="space-y-4">
          <p className="text-sm text-flex-navy">
            Confirmar pago de la cuota #{cuota.numero}: <strong>{cuota.descripcion}</strong>
          </p>
          <label className="block space-y-1">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/60">
              Metodo de pago
            </span>
            <select
              value={metodo}
              onChange={(event) => setMetodo(event.target.value)}
              className="w-full rounded-xl border border-flex-navy/20 px-3 py-2 text-sm text-flex-navy outline-none focus:border-flex-lime"
            >
              <option>Transferencia bancaria</option>
              <option>Cheque</option>
              <option>Efectivo</option>
            </select>
          </label>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-flex-navy/20 px-4 py-2 text-sm font-semibold text-flex-navy"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => onConfirm(metodo)}
              className="rounded-lg bg-flex-navy px-4 py-2 text-sm font-semibold text-flex-ice"
            >
              Confirmar pago
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
