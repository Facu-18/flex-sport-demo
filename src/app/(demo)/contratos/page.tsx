"use client";

import Link from "next/link";
import { useState } from "react";
import { DataTable } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Toast } from "@/components/ui/Toast";
import { useContratosStore } from "@/store/useContratosStore";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Contrato } from "@/types";

export default function ContratosPage() {
  const contratos = useContratosStore((state) => state.contratos);
  const firmar = useContratosStore((state) => state.firmar);
  const [selected, setSelected] = useState<Contrato | null>(null);
  const [toast, setToast] = useState("");

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 1800);
  };

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flex-navy/55">
          Contratos
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-flex-navy">Contratos generados</h1>
      </section>

      <DataTable
        rows={contratos}
        columns={[
          {
            key: "numero",
            header: "Numero",
            render: (row) => <span className="font-semibold">{row.numero}</span>,
          },
          {
            key: "cliente",
            header: "Cliente",
            render: (row) => row.clienteEmpresa,
          },
          {
            key: "obra",
            header: "Obra",
            render: (row) => (
              <Link href={`/obras/${row.obraId}`} className="text-flex-navy underline">
                {row.obraNombre}
              </Link>
            ),
          },
          {
            key: "monto",
            header: "Monto total",
            render: (row) => formatCurrency(row.montoTotal),
          },
          {
            key: "estado",
            header: "Estado",
            render: (row) => <StatusBadge status={row.estado} />,
          },
          {
            key: "firma",
            header: "Fecha firma",
            render: (row) => (row.fechaFirma ? formatDate(row.fechaFirma) : "-"),
          },
          {
            key: "acciones",
            header: "Acciones",
            render: (row) => (
              <div className="flex items-center gap-2">
                {row.estado === "enviado" ? (
                  <button
                    type="button"
                    onClick={() => {
                      firmar(row.id);
                      showToast("Contrato firmado");
                    }}
                    className="rounded-lg border border-flex-navy/20 px-3 py-1.5 text-xs font-semibold text-flex-navy"
                  >
                    Marcar firmado
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => setSelected(row)}
                  className="rounded-lg border border-flex-navy/20 px-3 py-1.5 text-xs font-semibold text-flex-navy"
                >
                  Ver contrato
                </button>
              </div>
            ),
          },
        ]}
      />

      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected?.numero ?? "Contrato"}
      >
        {!selected ? null : (
          <article className="space-y-3 rounded-xl border border-flex-navy/10 bg-flex-ice p-4 text-sm text-flex-navy">
            <p>
              Contrato entre <strong>{selected.clienteEmpresa}</strong> y FlexSport para la obra{" "}
              <strong>{selected.obraNombre}</strong>.
            </p>
            <p>Monto: {formatCurrency(selected.montoTotal)}</p>
            <p>Estado: {selected.estado}</p>
            <p>Esta vista simula un documento legal estructurado.</p>
          </article>
        )}
      </Modal>

      <Toast open={Boolean(toast)} message={toast} />
    </div>
  );
}
