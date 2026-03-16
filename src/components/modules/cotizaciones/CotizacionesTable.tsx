import Link from "next/link";
import { DataTable } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Cotizacion } from "@/types";

interface CotizacionesTableProps {
  rows: Cotizacion[];
}

export function CotizacionesTable({ rows }: CotizacionesTableProps) {
  return (
    <DataTable
      rows={rows}
      columns={[
        {
          key: "numero",
          header: "Numero",
          render: (row) => (
            <Link href={`/cotizaciones/${row.id}`} className="font-semibold text-flex-navy hover:underline">
              {row.numero}
            </Link>
          ),
        },
        {
          key: "cliente",
          header: "Cliente",
          render: (row) => row.clienteNombre,
        },
        {
          key: "empresa",
          header: "Empresa",
          render: (row) => row.clienteEmpresa,
        },
        {
          key: "monto",
          header: "Monto",
          render: (row) => formatCurrency(row.total),
        },
        {
          key: "estado",
          header: "Estado",
          render: (row) => <StatusBadge status={row.estado} />,
        },
        {
          key: "fecha",
          header: "Fecha",
          render: (row) => formatDate(row.fechaCreacion),
        },
      ]}
      emptyMessage="No hay cotizaciones para este filtro."
    />
  );
}
