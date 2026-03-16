import { DataTable } from "@/components/ui/DataTable";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { MovimientoStock, Producto } from "@/types";

interface ProductosTableProps {
  rows: Producto[];
  movimientos: MovimientoStock[];
  onVerMovimientos: (producto: Producto) => void;
}

function stockBadge(disponible: number) {
  if (disponible === 0) return "bg-rose-100 text-rose-700";
  if (disponible <= 10) return "bg-amber-100 text-amber-700";
  return "bg-emerald-100 text-emerald-700";
}

export function ProductosTable({ rows, movimientos, onVerMovimientos }: ProductosTableProps) {
  return (
    <DataTable
      rows={rows}
      columns={[
        { key: "codigo", header: "Codigo", render: (row) => <span className="font-semibold">{row.codigo}</span> },
        { key: "nombre", header: "Nombre", render: (row) => row.nombre },
        { key: "categoria", header: "Categoria", render: (row) => row.categoria },
        {
          key: "disponible",
          header: "Disponible",
          render: (row) => (
            <span className={`rounded-full px-2 py-1 text-xs font-semibold ${stockBadge(row.stockDisponible)}`}>
              {row.stockDisponible}
            </span>
          ),
        },
        { key: "reservado", header: "Reservado", render: (row) => row.stockReservado },
        { key: "obra", header: "Obra asignada", render: (row) => row.obraAsignada ?? "-" },
        {
          key: "ultima",
          header: "Ultima entrada",
          render: (row) => {
            const last = [...movimientos]
              .filter((mov) => mov.productoId === row.id)
              .sort((a, b) => b.fecha.localeCompare(a.fecha))[0];

            return last ? formatDate(last.fecha) : "-";
          },
        },
        {
          key: "precio",
          header: "Precio",
          render: (row) => formatCurrency(row.precioUnitario),
        },
        {
          key: "acciones",
          header: "Acciones",
          render: (row) => (
            <button
              type="button"
              onClick={() => onVerMovimientos(row)}
              className="rounded-lg border border-flex-navy/20 px-3 py-1.5 text-xs font-semibold text-flex-navy"
            >
              Ver movimientos
            </button>
          ),
        },
      ]}
      emptyMessage="No hay productos para el filtro elegido."
    />
  );
}
