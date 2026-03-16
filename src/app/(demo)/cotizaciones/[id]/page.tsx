"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Toast } from "@/components/ui/Toast";
import { useCotizacionesStore } from "@/store/useCotizacionesStore";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function CotizacionDetailPage() {
  const { id } = useParams<{ id: string }>();
  const cotizaciones = useCotizacionesStore((state) => state.cotizaciones);
  const aprobar = useCotizacionesStore((state) => state.aprobar);
  const rechazar = useCotizacionesStore((state) => state.rechazar);
  const [openPreview, setOpenPreview] = useState(false);
  const [toast, setToast] = useState("");

  const cotizacion = cotizaciones.find((item) => item.id === id);

  if (!cotizacion) {
    return (
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-8 text-flex-navy">
        Cotizacion no encontrada.
      </section>
    );
  }

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 1800);
  };

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold text-flex-navy">{cotizacion.numero}</h1>
            <p className="text-sm text-flex-navy/70">
              {cotizacion.clienteNombre} - {cotizacion.clienteEmpresa}
            </p>
          </div>
          <StatusBadge status={cotizacion.estado} />
        </div>
        <div className="mt-4 grid gap-3 text-sm text-flex-navy/75 md:grid-cols-3">
          <p>Fecha: {formatDate(cotizacion.fechaCreacion)}</p>
          <p>Validez: {cotizacion.validezDias} dias</p>
          <p>Total: {formatCurrency(cotizacion.total)}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <h2 className="text-xl font-bold text-flex-navy">Items</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-flex-navy/10 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.15em] text-flex-navy/60">
                <th className="py-2">Descripcion</th>
                <th className="py-2">Cantidad</th>
                <th className="py-2">P. unitario</th>
                <th className="py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-flex-navy/10">
              {cotizacion.items.map((item, index) => (
                <tr key={index}>
                  <td className="py-2">{item.descripcion}</td>
                  <td className="py-2">{item.cantidad}</td>
                  <td className="py-2">{formatCurrency(item.precioUnitario)}</td>
                  <td className="py-2">{formatCurrency(item.precioUnitario * item.cantidad)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-flex-navy/10 bg-white p-6">
        <h2 className="text-xl font-bold text-flex-navy">Resumen financiero</h2>
        <div className="mt-4 space-y-2 text-sm text-flex-navy">
          <p>Subtotal: {formatCurrency(cotizacion.subtotal)}</p>
          <p>Descuento: {formatCurrency(cotizacion.descuento)}</p>
          <p className="text-base font-bold">Total: {formatCurrency(cotizacion.total)}</p>
          <p className="pt-2 text-flex-navy/70">Condiciones: {cotizacion.condicionesPago}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              aprobar(cotizacion.id);
              showToast("Cotizacion aprobada");
            }}
            className="rounded-xl bg-flex-lime px-3 py-2 text-sm font-semibold text-flex-navy"
          >
            Aprobar cotizacion
          </button>
          <button
            type="button"
            onClick={() => {
              rechazar(cotizacion.id);
              showToast("Cotizacion rechazada");
            }}
            className="rounded-xl border border-flex-navy/20 px-3 py-2 text-sm font-semibold text-flex-navy"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => setOpenPreview(true)}
            className="rounded-xl border border-flex-navy/20 px-3 py-2 text-sm font-semibold text-flex-navy"
          >
            Ver como cliente
          </button>
          {cotizacion.estado === "aprobada" ? (
            <button
              type="button"
              onClick={() => showToast("Contrato CNT-2026-012 generado")}
              className="rounded-xl bg-flex-navy px-3 py-2 text-sm font-semibold text-flex-ice"
            >
              Convertir en contrato
            </button>
          ) : null}
          <Link
            href="/contratos"
            className="rounded-xl border border-flex-navy/20 px-3 py-2 text-sm font-semibold text-flex-navy"
          >
            Ir a contratos
          </Link>
        </div>
      </section>

      <Modal open={openPreview} onClose={() => setOpenPreview(false)} title="Preview para cliente">
        <article className="rounded-xl border border-flex-navy/10 bg-flex-ice p-4 text-sm text-flex-navy">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-flex-navy/60">
            Documento comercial
          </p>
          <h3 className="mt-2 text-lg font-bold">{cotizacion.numero}</h3>
          <p>Cliente: {cotizacion.clienteEmpresa}</p>
          <p>Total: {formatCurrency(cotizacion.total)}</p>
          <p className="mt-3 text-flex-navy/70">
            Este bloque representa el PDF visual para presentar la propuesta al cliente.
          </p>
        </article>
      </Modal>

      <Toast open={Boolean(toast)} message={toast} />
    </div>
  );
}
