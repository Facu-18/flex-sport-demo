import { SidepanelDrawer } from "@/components/ui/SidepanelDrawer";
import { formatDate } from "@/lib/utils";
import type { MovimientoStock } from "@/types";

interface MovimientosSidepanelProps {
  open: boolean;
  title: string;
  movimientos: MovimientoStock[];
  onClose: () => void;
}

export function MovimientosSidepanel({
  open,
  title,
  movimientos,
  onClose,
}: MovimientosSidepanelProps) {
  return (
    <SidepanelDrawer open={open} title={title} onClose={onClose}>
      <div className="space-y-3">
        {movimientos.map((movimiento) => (
          <article
            key={movimiento.id}
            className="rounded-xl border border-flex-navy/10 bg-flex-ice p-3"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-flex-navy/60">
              {movimiento.tipo}
            </p>
            <p className="mt-1 text-sm text-flex-navy">{movimiento.motivo}</p>
            <p className="mt-1 text-xs text-flex-navy/60">
              {movimiento.cantidad} u. - {formatDate(movimiento.fecha)} - {movimiento.responsable}
            </p>
          </article>
        ))}
        {movimientos.length === 0 ? (
          <p className="rounded-xl border border-dashed border-flex-navy/20 p-5 text-center text-sm text-flex-navy/60">
            Sin movimientos para este producto.
          </p>
        ) : null}
      </div>
    </SidepanelDrawer>
  );
}
