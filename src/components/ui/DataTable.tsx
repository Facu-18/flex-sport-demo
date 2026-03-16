import type { ReactNode } from "react";

interface Column<T> {
  key: string;
  header: string;
  className?: string;
  render: (row: T) => ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  emptyMessage?: string;
}

export function DataTable<T>({
  columns,
  rows,
  emptyMessage = "Sin datos para mostrar.",
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-flex-navy/10 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-flex-navy/10 text-sm">
          <thead className="bg-flex-ice text-left">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-flex-navy/60 ${column.className ?? ""}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-flex-navy/10">
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-10 text-center text-sm text-flex-navy/60"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={index} className="hover:bg-flex-ice/70">
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`whitespace-nowrap px-4 py-3 align-top text-flex-navy ${column.className ?? ""}`}
                    >
                      {column.render(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
