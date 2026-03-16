import { DataTable } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Cuota } from "@/types";

interface CuotasTableProps {
  cuotas: Cuota[];
  clienteByContrato: Record<string, string>;
  onPagar: (cuota: Cuota) => void;
}

export function CuotasTable({ cuotas, clienteByContrato, onPagar }: CuotasTableProps) {
  return (
    <DataTable
      rows={cuotas}
      columns={[
        {
          key: "numero",
          header: "#",
          render: (row) => <span className="font-semibold">#{row.numero}</span>,
        },
        {
          key: "descripcion",
          header: "Descripcion",
          render: (row) => (
            <div>
              <p>{row.descripcion}</p>
              <p className="text-xs text-flex-navy/60">{clienteByContrato[row.contratoId] ?? "-"}</p>
            </div>
          ),
        },
        {
          key: "vencimiento",
          header: "Vencimiento",
          render: (row) => formatDate(row.vencimiento),
        },
        {
          key: "monto",
          header: "Monto",
          render: (row) => formatCurrency(row.monto),
        },
        {
          key: "estado",
          header: "Estado",
          render: (row) => <StatusBadge status={row.estado} />,
        },
        {
          key: "fechaPago",
          header: "Fecha pago",
          render: (row) => (row.fechaPago ? formatDate(row.fechaPago) : "-"),
        },
        {
          key: "acciones",
          header: "Acciones",
          render: (row) =>
            row.estado === "pagada" ? (
              <span className="text-xs text-flex-navy/60">Registrada</span>
            ) : (
              <button
                type="button"
                onClick={() => onPagar(row)}
                className="rounded-lg border border-flex-navy/20 px-3 py-1.5 text-xs font-semibold text-flex-navy hover:border-flex-navy"
              >
                Registrar pago
              </button>
            ),
        },
      ]}
      emptyMessage="No hay cuotas para este estado."
    />
  );
}
