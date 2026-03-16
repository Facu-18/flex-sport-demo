import { DataTable } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { OrdenCompra } from "@/types";

interface ComprasTableProps {
  rows: OrdenCompra[];
  onAprobar: (id: string) => void;
  onDetalle: (orden: OrdenCompra) => void;
}

function normalizeOcStatus(status: OrdenCompra["estado"]) {
  if (status === "aprobada") return "aprobada_oc";
  if (status === "pagada") return "pagada_oc";
  return status;
}

export function ComprasTable({ rows, onAprobar, onDetalle }: ComprasTableProps) {
  return (
    <DataTable
      rows={rows}
      columns={[
        { key: "numero", header: "Numero", render: (row) => <span className="font-semibold">{row.numero}</span> },
        { key: "obra", header: "Obra", render: (row) => row.obraNombre },
        { key: "proveedor", header: "Proveedor", render: (row) => row.proveedorNombre },
        { key: "total", header: "Total", render: (row) => formatCurrency(row.total) },
        {
          key: "estado",
          header: "Estado",
          render: (row) => <StatusBadge status={normalizeOcStatus(row.estado)} />,
        },
        { key: "fecha", header: "Fecha solicitud", render: (row) => formatDate(row.fechaSolicitud) },
        {
          key: "acciones",
          header: "Acciones",
          render: (row) => (
            <div className="flex items-center gap-2">
              {row.estado === "solicitada" ? (
                <button
                  type="button"
                  onClick={() => onAprobar(row.id)}
                  className="rounded-lg border border-flex-navy/20 px-3 py-1.5 text-xs font-semibold text-flex-navy"
                >
                  Aprobar
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => onDetalle(row)}
                className="rounded-lg border border-flex-navy/20 px-3 py-1.5 text-xs font-semibold text-flex-navy"
              >
                Ver detalle
              </button>
            </div>
          ),
        },
      ]}
      emptyMessage="No hay ordenes para este estado."
    />
  );
}
