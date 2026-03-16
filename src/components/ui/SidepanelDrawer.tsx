import type { ReactNode } from "react";

interface SidepanelDrawerProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function SidepanelDrawer({
  open,
  title,
  onClose,
  children,
}: SidepanelDrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-flex-navy/60">
      <aside className="absolute right-0 top-0 h-full w-full max-w-xl border-l border-flex-navy/10 bg-white p-6 shadow-2xl">
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
        <div className="h-[calc(100%-3rem)] overflow-y-auto">{children}</div>
      </aside>
    </div>
  );
}
