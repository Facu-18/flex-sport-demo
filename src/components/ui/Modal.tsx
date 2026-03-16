import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-flex-navy/60 p-4">
      <div className="w-full max-w-3xl rounded-2xl border border-flex-navy/10 bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-flex-navy">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-flex-navy/20 px-3 py-1 text-sm text-flex-navy hover:bg-flex-ice"
          >
            Cerrar
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
