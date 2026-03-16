import { Modal } from "@/components/ui/Modal";
import { formatCurrency } from "@/lib/utils";
import type { OrdenCompra } from "@/types";

interface DetalleOCModalProps {
  open: boolean;
  orden: OrdenCompra | null;
  onClose: () => void;
}

export function DetalleOCModal({ open, orden, onClose }: DetalleOCModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Detalle de orden de compra">
      {!orden ? null : (
        <div className="space-y-4">
          <div className="rounded-xl border border-flex-navy/10 bg-flex-ice p-3 text-sm text-flex-navy">
            <p className="font-semibold">{orden.numero}</p>
            <p>{orden.proveedorNombre}</p>
            <p>{orden.obraNombre}</p>
          </div>
          <table className="min-w-full divide-y divide-flex-navy/10 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.15em] text-flex-navy/60">
                <th className="py-2">Producto</th>
                <th className="py-2">Cantidad</th>
                <th className="py-2">P. unitario</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-flex-navy/10">
              {orden.items.map((item) => (
                <tr key={item.productoNombre}>
                  <td className="py-2">{item.productoNombre}</td>
                  <td className="py-2">
                    {item.cantidad} {item.unidad}
                  </td>
                  <td className="py-2">{formatCurrency(item.precioUnitario)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-right text-sm font-bold text-flex-navy">
            Total: {formatCurrency(orden.total)}
          </p>
        </div>
      )}
    </Modal>
  );
}
